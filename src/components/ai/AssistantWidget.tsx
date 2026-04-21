"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Sparkles, X } from "lucide-react";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";
import { cn } from "@/lib/utils";

// Floating AI assistant. Renders on every page via [locale] layout.
// Powered by /api/assistant/chat → Claude Haiku 4.5 with a navigate_to
// tool. When Claude invokes the tool, we router.push(path).

type Locale = "pt" | "en" | "es";
type ChatRole = "user" | "assistant";
interface ChatMsg {
  role: ChatRole;
  content: string;
  /** Optional navigation action executed after the message. */
  navigatedTo?: string;
}

const COPY = {
  pt: {
    openLabel: "Pergunte ao assistente",
    title: "Assistente Pinho Law",
    intro:
      "Olá! Sou o assistente da Pinho Law. Posso te levar a qualquer página do site ou responder perguntas básicas. Onde quer ir?",
    thinking: "Pensando…",
    placeholder: "Digite sua pergunta…",
    navigatingTo: "Indo para",
    close: "Fechar",
    emergency:
      "Para situações urgentes ou dúvidas específicas sobre seu caso, use o WhatsApp (407) 385-4144 para falar com a equipe.",
  },
  en: {
    openLabel: "Ask the assistant",
    title: "Pinho Law Assistant",
    intro:
      "Hi! I'm the Pinho Law assistant. I can take you to any page or answer basic questions. Where would you like to go?",
    thinking: "Thinking…",
    placeholder: "Type your question…",
    navigatingTo: "Going to",
    close: "Close",
    emergency:
      "For urgent matters or case-specific questions, WhatsApp (407) 385-4144 to reach the team.",
  },
  es: {
    openLabel: "Pregunta al asistente",
    title: "Asistente Pinho Law",
    intro:
      "¡Hola! Soy el asistente de Pinho Law. Puedo llevarte a cualquier página o responder preguntas básicas. ¿A dónde quieres ir?",
    thinking: "Pensando…",
    placeholder: "Escribe tu pregunta…",
    navigatingTo: "Yendo a",
    close: "Cerrar",
    emergency:
      "Para casos urgentes, WhatsApp (407) 385-4144.",
  },
} as const;

export function AssistantWidget() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const c = COPY[(locale as Locale) in COPY ? (locale as Locale) : "pt"];
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState<ChatMsg[]>([
    { role: "assistant", content: c.intro },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [open, msgs]);

  async function send(text: string) {
    const next: ChatMsg[] = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setLoading(true);
    try {
      const res = await fetch("/api/assistant/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
          locale,
        }),
      });
      const data = (await res.json()) as {
        text: string;
        action?: { type: "navigate"; path: string; reason?: string } | null;
      };
      const reply: ChatMsg = {
        role: "assistant",
        content: data.text || c.emergency,
        navigatedTo: data.action?.path,
      };
      setMsgs([...next, reply]);
      if (data.action?.type === "navigate" && data.action.path) {
        setTimeout(() => {
          router.push(data.action!.path);
        }, 600);
      }
    } catch {
      setMsgs([...next, { role: "assistant", content: c.emergency }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        type="button"
        aria-label={c.openLabel}
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A961]/50 bg-[#0E1B2E] text-[#C9A961] shadow-2xl transition-transform hover:scale-105 md:bottom-6 md:right-6",
          open && "pointer-events-none opacity-0",
        )}
      >
        <Sparkles className="h-6 w-6" />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed inset-x-4 bottom-4 top-auto z-50 flex max-h-[80vh] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[#C9A961]/30 bg-[#0E1B2E] shadow-2xl md:inset-auto md:bottom-6 md:right-6 md:h-[640px] md:w-[420px]">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#0E1B2E] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A961]/20">
                <Sparkles className="h-4 w-4 text-[#C9A961]" />
              </div>
              <div className="font-heading text-sm font-semibold text-white">
                {c.title}
              </div>
            </div>
            <button
              type="button"
              aria-label={c.close}
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-[#0E1B2E] px-4 py-4"
          >
            {msgs.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  m.role === "user"
                    ? "ml-auto bg-[#C9A961] text-[#0E1B2E]"
                    : "bg-white/5 text-white/90",
                )}
              >
                {m.content}
                {m.navigatedTo && (
                  <div className="mt-2 text-xs text-white/60">
                    → {c.navigatingTo} {m.navigatedTo}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-2xl bg-white/5 px-4 py-2.5 text-sm italic text-white/60">
                {c.thinking}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 bg-[#0E1B2E] p-3">
            <PromptInputBox
              placeholder={c.placeholder}
              isLoading={loading}
              onSend={(msg) => send(msg)}
            />
          </div>
        </div>
      )}
    </>
  );
}
