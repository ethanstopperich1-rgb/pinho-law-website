"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  INTENT_CARDS,
  RESULTS,
} from "@/lib/visa-engine/decision-tree";
import type {
  EngineLocale,
  Intent,
  VisaEngineLeadPayload,
  VisaResult,
} from "@/lib/visa-engine/types";

// ------------------------------------------------------------------
// UI copy keyed by locale. Lives close to the component so translators
// can find everything for the engine in one place.
// ------------------------------------------------------------------
const COPY = {
  pt: {
    eyebrow: "Motor de Decisão de Visto",
    heading: "Qual visto é o certo para você?",
    subheading:
      "Responda algumas perguntas rápidas e receba uma recomendação personalizada — gratuita, em português, em menos de 2 minutos.",
    step1: "Em que situação você está?",
    step2: "Responda para afinar a recomendação",
    back: "Voltar",
    next: "Próximo",
    yourRecommendation: "Visto recomendado para você",
    reasons: "Por que esse caminho",
    timeline: "Prazo estimado",
    complexity: "Complexidade",
    complexityLabels: { low: "Baixa", medium: "Média", high: "Alta" },
    seeServicePage: "Ver página completa",
    bookConsult: "Agendar consulta gratuita",
    chatWhatsApp: "Falar no WhatsApp",
    leadHeading: "Conclua sua avaliação",
    leadBody:
      "Dra. Izi Pinho ou um membro da equipe entra em contato em até 24 horas úteis.",
    name: "Nome completo",
    email: "E-mail",
    phone: "WhatsApp ou telefone",
    message: "Seu maior desafio ou dúvida (opcional)",
    whatsappOptIn: "Prefiro ser contatado(a) via WhatsApp",
    submit: "Enviar",
    submitting: "Enviando…",
    error: "Não conseguimos enviar. Tente novamente ou ligue (407) 385-4144.",
    disclaimer:
      "O uso desta ferramenta não cria relação advogado-cliente. As informações são educativas e não constituem assessoria jurídica.",
  },
  en: {
    eyebrow: "Visa Decision Engine",
    heading: "Which visa is right for you?",
    subheading:
      "Answer a few quick questions and get a tailored recommendation — free, in English, in under 2 minutes.",
    step1: "Which best describes your situation?",
    step2: "A couple of questions to sharpen the recommendation",
    back: "Back",
    next: "Next",
    yourRecommendation: "Recommended visa for you",
    reasons: "Why this path",
    timeline: "Estimated timeline",
    complexity: "Complexity",
    complexityLabels: { low: "Low", medium: "Medium", high: "High" },
    seeServicePage: "View full page",
    bookConsult: "Book a free consultation",
    chatWhatsApp: "Chat on WhatsApp",
    leadHeading: "Finish your assessment",
    leadBody:
      "Dra. Izi Pinho or a team member will reach out within 24 business hours.",
    name: "Full name",
    email: "Email",
    phone: "WhatsApp or phone",
    message: "Your biggest challenge or question (optional)",
    whatsappOptIn: "I prefer to be contacted via WhatsApp",
    submit: "Submit",
    submitting: "Submitting…",
    error: "Couldn't submit. Try again or call (407) 385-4144.",
    disclaimer:
      "Use of this tool does not create an attorney-client relationship. Information is educational and not legal advice.",
  },
  es: {
    eyebrow: "Motor de Decisión de Visa",
    heading: "¿Qué visa es la correcta para ti?",
    subheading:
      "Responde algunas preguntas rápidas y recibe una recomendación personalizada — gratis, en español, en menos de 2 minutos.",
    step1: "¿Qué situación describe mejor tu caso?",
    step2: "Unas preguntas para afinar la recomendación",
    back: "Atrás",
    next: "Siguiente",
    yourRecommendation: "Visa recomendada para ti",
    reasons: "Por qué esta ruta",
    timeline: "Plazo estimado",
    complexity: "Complejidad",
    complexityLabels: { low: "Baja", medium: "Media", high: "Alta" },
    seeServicePage: "Ver página completa",
    bookConsult: "Agendar consulta gratuita",
    chatWhatsApp: "Chatear por WhatsApp",
    leadHeading: "Finaliza tu evaluación",
    leadBody:
      "Dra. Izi Pinho o un miembro del equipo se pondrá en contacto en menos de 24 horas hábiles.",
    name: "Nombre completo",
    email: "Correo electrónico",
    phone: "WhatsApp o teléfono",
    message: "Tu mayor desafío o duda (opcional)",
    whatsappOptIn: "Prefiero que me contacten por WhatsApp",
    submit: "Enviar",
    submitting: "Enviando…",
    error: "No pudimos enviar. Inténtalo de nuevo o llama al (407) 385-4144.",
    disclaimer:
      "El uso de esta herramienta no crea relación abogado-cliente. La información es educativa, no asesoría legal.",
  },
} as const;

// ------------------------------------------------------------------
// Intent → clarifying question → canonical result mapping.
// The full spec describes a deep decision tree per intent; for the
// v1 shipping today we compress each branch to ONE diagnostic question
// whose answer snaps to a spec-defined VisaResult. This covers the
// highest-signal splits (dual citizenship for E-2, spouse USC vs LPR,
// exec vs specialized for L-1, etc.) while keeping UX fast.
// ------------------------------------------------------------------
type StepQuestion = {
  prompt: { pt: string; en: string; es: string };
  options: Array<{
    id: string;
    label: { pt: string; en: string; es: string };
    resultId: string;
  }>;
};

const STEP_QUESTIONS: Record<Intent, StepQuestion> = {
  PERMANENT_RESIDENCE: {
    prompt: {
      pt: "Qual situação descreve você?",
      en: "Which best describes you?",
      es: "¿Cuál te describe mejor?",
    },
    options: [
      {
        id: "professional",
        label: {
          pt: "Sou profissional qualificado (mestrado ou experiência avançada)",
          en: "I'm a qualified professional (master's or advanced experience)",
          es: "Soy profesional calificado (maestría o experiencia avanzada)",
        },
        resultId: "eb-2-niw",
      },
      {
        id: "extraordinary",
        label: {
          pt: "Tenho reconhecimento extraordinário (prêmios, publicações, mídia)",
          en: "I have extraordinary recognition (awards, publications, press)",
          es: "Tengo reconocimiento extraordinario (premios, publicaciones, prensa)",
        },
        resultId: "eb-1a",
      },
      {
        id: "spouse-usc",
        label: {
          pt: "Sou casado(a) com cidadão(ã) americano(a)",
          en: "I'm married to a US citizen",
          es: "Estoy casado(a) con ciudadano(a) estadounidense",
        },
        resultId: "cr-1-ir-1",
      },
      {
        id: "investor",
        label: {
          pt: "Tenho capital de US$ 800k+ para investir",
          en: "I have US$ 800k+ to invest",
          es: "Tengo US$ 800k+ para invertir",
        },
        resultId: "eb-5",
      },
    ],
  },
  WORK_VISA: {
    prompt: {
      pt: "Qual sua situação profissional?",
      en: "What's your work situation?",
      es: "¿Cuál es tu situación laboral?",
    },
    options: [
      {
        id: "exec-br-company",
        label: {
          pt: "Sou executivo/gerente de empresa no Brasil (1+ ano)",
          en: "I'm an exec/manager at a Brazilian company (1+ year)",
          es: "Soy ejecutivo/gerente de empresa en Brasil (1+ año)",
        },
        resultId: "l-1a",
      },
      {
        id: "extraordinary",
        label: {
          pt: "Tenho realizações excepcionais no meu setor",
          en: "I have exceptional achievements in my field",
          es: "Tengo logros excepcionales en mi campo",
        },
        resultId: "o-1a",
      },
      {
        id: "specialized",
        label: {
          pt: "Sou especialista em empresa que quer me transferir",
          en: "I'm a specialist at a company that wants to transfer me",
          es: "Soy especialista en empresa que quiere trasladarme",
        },
        resultId: "l-1b",
      },
      {
        id: "h1b",
        label: {
          pt: "Tenho empregador americano disposto a patrocinar (H-1B)",
          en: "I have a US employer willing to sponsor (H-1B)",
          es: "Tengo empleador en EE.UU. dispuesto a patrocinar (H-1B)",
        },
        resultId: "h-1b",
      },
    ],
  },
  MARRIAGE: {
    prompt: {
      pt: "Onde você está agora?",
      en: "Where are you right now?",
      es: "¿Dónde estás ahora?",
    },
    options: [
      {
        id: "in-brazil",
        label: {
          pt: "No Brasil, quero me casar e entrar nos EUA",
          en: "In Brazil, I want to marry and enter the US",
          es: "En Brasil, quiero casarme y entrar a EE.UU.",
        },
        resultId: "k-1",
      },
      {
        id: "in-us-valid",
        label: {
          pt: "Nos EUA com status válido, casei ou vou casar",
          en: "In the US with valid status, married or about to marry",
          es: "En EE.UU. con estatus válido, casado(a) o por casarme",
        },
        resultId: "adjust-status",
      },
      {
        id: "in-us-expired",
        label: {
          pt: "Nos EUA com status expirado",
          en: "In the US with expired status",
          es: "En EE.UU. con estatus expirado",
        },
        resultId: "consult",
      },
    ],
  },
  BUSINESS_EXPANSION: {
    prompt: {
      pt: "Qual é o seu ponto de partida?",
      en: "What's your starting point?",
      es: "¿Cuál es tu punto de partida?",
    },
    options: [
      {
        id: "br-exec",
        label: {
          pt: "Tenho empresa no Brasil e sou executivo(a) dela",
          en: "I have a Brazilian company and I'm an exec there",
          es: "Tengo empresa en Brasil y soy ejecutivo(a) allí",
        },
        resultId: "l-1a",
      },
      {
        id: "dual-cit",
        label: {
          pt: "Tenho dupla cidadania (Itália, Portugal, Espanha etc.)",
          en: "I have dual citizenship (Italy, Portugal, Spain, etc.)",
          es: "Tengo doble ciudadanía (Italia, Portugal, España, etc.)",
        },
        resultId: "e-2",
      },
      {
        id: "capital-800k",
        label: {
          pt: "Tenho US$ 800k+ para investir em projeto americano",
          en: "I have US$ 800k+ to invest in a US project",
          es: "Tengo US$ 800k+ para invertir en un proyecto de EE.UU.",
        },
        resultId: "eb-5",
      },
      {
        id: "niche-expertise",
        label: {
          pt: "Sou referência na minha área (consigo NIW)",
          en: "I'm a leader in my field (NIW-eligible)",
          es: "Soy referente en mi área (elegible para NIW)",
        },
        resultId: "eb-2-niw",
      },
    ],
  },
  INVESTMENT: {
    prompt: {
      pt: "Quanto você pode investir?",
      en: "How much can you invest?",
      es: "¿Cuánto puedes invertir?",
    },
    options: [
      {
        id: "100-300k",
        label: { pt: "US$ 100k–300k", en: "US$ 100k–300k", es: "US$ 100k–300k" },
        resultId: "e-2",
      },
      {
        id: "800k-1m",
        label: { pt: "US$ 800k–1M", en: "US$ 800k–1M", es: "US$ 800k–1M" },
        resultId: "eb-5",
      },
      {
        id: "1m-plus",
        label: { pt: "US$ 1M+", en: "US$ 1M+", es: "US$ 1M+" },
        resultId: "eb-5",
      },
    ],
  },
  STUDENT: {
    prompt: {
      pt: "Você já foi aceito(a) em uma escola?",
      en: "Have you been accepted to a school?",
      es: "¿Ya te aceptaron en una escuela?",
    },
    options: [
      {
        id: "accepted",
        label: {
          pt: "Sim, tenho I-20 ou carta de aceite",
          en: "Yes, I have an I-20 or acceptance letter",
          es: "Sí, tengo I-20 o carta de aceptación",
        },
        resultId: "f-1",
      },
      {
        id: "not-yet",
        label: {
          pt: "Ainda não, estou pesquisando",
          en: "Not yet, I'm researching",
          es: "Aún no, estoy investigando",
        },
        resultId: "f-1",
      },
    ],
  },
};

// ------------------------------------------------------------------
// Main component
// ------------------------------------------------------------------
type Step = 1 | 2 | 3 | 4;

export function VisaEngine({ locale }: { locale: EngineLocale }) {
  const router = useRouter();
  const copy = COPY[locale];
  const [step, setStep] = useState<Step>(1);
  const [intent, setIntent] = useState<Intent | null>(null);
  const [resultId, setResultId] = useState<string | null>(null);
  const [leadError, setLeadError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const sessionId = useMemo(
    () =>
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `ve-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    [],
  );

  const result: VisaResult | null = resultId ? RESULTS[resultId] ?? null : null;

  function pickIntent(i: Intent) {
    setIntent(i);
    setStep(2);
  }

  function pickResult(id: string) {
    setResultId(id);
    setStep(3);
  }

  function goBack() {
    if (step === 4) setStep(3);
    else if (step === 3) setStep(2);
    else if (step === 2) {
      setIntent(null);
      setStep(1);
    }
  }

  async function submitLead(formData: FormData) {
    setLeadError(null);
    setSubmitting(true);
    const payload: VisaEngineLeadPayload = {
      sessionId,
      locale,
      visaRecommended: resultId,
      intent,
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      whatsappOptIn: formData.get("whatsappOptIn") === "on",
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/visa-engine/submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`submit failed ${res.status}`);
      router.push(`/${locale}/obrigado?v=${encodeURIComponent(resultId ?? "")}`);
    } catch (err) {
      console.error(err);
      setLeadError(copy.error);
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <header className="mb-8 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gold">
            {copy.eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl">
            {copy.heading}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted md:text-base">
            {copy.subheading}
          </p>
        </header>

        <ProgressBar step={step} />

        <div className="mt-8 rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm md:p-10">
          {step === 1 && (
            <>
              <h2 className="font-heading text-xl font-semibold text-ink">
                {copy.step1}
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {INTENT_CARDS.map((card) => (
                  <button
                    key={card.intent}
                    type="button"
                    onClick={() => pickIntent(card.intent)}
                    className="group flex items-center gap-3 rounded-[var(--radius-md)] border border-border bg-cream px-4 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-white hover:shadow-md"
                  >
                    <span className="text-2xl">{card.icon}</span>
                    <span className="text-sm font-medium text-ink">
                      {card.label[locale]}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && intent && (
            <>
              <h2 className="font-heading text-xl font-semibold text-ink">
                {STEP_QUESTIONS[intent].prompt[locale]}
              </h2>
              <div className="mt-6 space-y-2">
                {STEP_QUESTIONS[intent].options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => pickResult(opt.resultId)}
                    className="group flex w-full items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border bg-cream px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-white hover:shadow-md"
                  >
                    <span className="text-sm text-ink">{opt.label[locale]}</span>
                    <span className="text-gold">→</span>
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <BackButton label={copy.back} onClick={goBack} />
              </div>
            </>
          )}

          {step === 3 && result && (
            <ResultView
              result={result}
              locale={locale}
              copy={copy}
              onContinue={() => setStep(4)}
              onBack={goBack}
            />
          )}

          {step === 4 && result && (
            <LeadForm
              locale={locale}
              copy={copy}
              submitting={submitting}
              error={leadError}
              onBack={goBack}
              onSubmit={submitLead}
            />
          )}
        </div>

        <p className="mt-6 text-center text-xs text-ink-muted/70">
          {copy.disclaimer}
        </p>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Sub-components (colocated — single-file, single-concept)
// ------------------------------------------------------------------
function ProgressBar({ step }: { step: Step }) {
  const pct = ((step - 1) / 3) * 100;
  return (
    <div className="mx-auto h-1 max-w-md overflow-hidden rounded-full bg-warm-gray">
      <div
        className="h-full bg-gold transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function BackButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline"
    >
      ← {label}
    </button>
  );
}

function ResultView({
  result,
  locale,
  copy,
  onContinue,
  onBack,
}: {
  result: VisaResult;
  locale: EngineLocale;
  copy: (typeof COPY)[EngineLocale];
  onContinue: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-gold">
        {copy.yourRecommendation}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
          {result.titles[locale]}
        </h2>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            result.badgeColor,
          )}
        >
          {result.visaCode}
        </span>
      </div>

      <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-2">
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider text-ink-muted">
            {copy.reasons}
          </h3>
          <ul className="mt-3 space-y-2">
            {result.reasons[locale].map((r) => (
              <li key={r} className="flex gap-2 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              {copy.timeline}
            </h3>
            <p className="mt-2 text-sm text-ink">{result.timeline[locale]}</p>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              {copy.complexity}
            </h3>
            <p className="mt-2 text-sm text-ink">
              {copy.complexityLabels[result.complexity]}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
        <a
          href={`/${locale}${result.servicePage}`}
          className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-border bg-cream px-5 py-3 text-sm font-medium text-ink hover:bg-warm-gray"
        >
          {copy.seeServicePage}
        </a>
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-gold px-5 py-3 text-sm font-medium text-white hover:bg-gold/90"
        >
          {copy.bookConsult}
        </button>
        <a
          href="https://wa.me/14073854144"
          className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-gold bg-white px-5 py-3 text-sm font-medium text-gold hover:bg-gold/5"
        >
          {copy.chatWhatsApp}
        </a>
      </div>

      <div className="mt-6">
        <BackButton label={copy.back} onClick={onBack} />
      </div>
    </div>
  );
}

function LeadForm({
  locale,
  copy,
  submitting,
  error,
  onBack,
  onSubmit,
}: {
  locale: EngineLocale;
  copy: (typeof COPY)[EngineLocale];
  submitting: boolean;
  error: string | null;
  onBack: () => void;
  onSubmit: (data: FormData) => void;
}) {
  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-ink">
        {copy.leadHeading}
      </h2>
      <p className="mt-2 text-sm text-ink-muted">{copy.leadBody}</p>

      <form
        action={onSubmit}
        className="mt-6 grid gap-4"
        aria-describedby="lead-form-disclaimer"
      >
        <FormInput label={copy.name} name="name" type="text" required />
        <FormInput label={copy.email} name="email" type="email" required />
        <FormInput label={copy.phone} name="phone" type="tel" required />
        <label className="flex items-center gap-2 text-sm text-ink">
          <input
            type="checkbox"
            name="whatsappOptIn"
            defaultChecked
            className="h-4 w-4 rounded border-border accent-gold"
          />
          {copy.whatsappOptIn}
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">{copy.message}</span>
          <textarea
            name="message"
            rows={3}
            className="mt-1.5 w-full rounded-[var(--radius-md)] border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </label>

        {error && (
          <p className="rounded-[var(--radius-md)] border border-alert/30 bg-alert/5 p-3 text-sm text-alert">
            {error}
          </p>
        )}

        <div className="flex items-center justify-between gap-3 pt-2">
          <BackButton label={copy.back} onClick={onBack} />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-gold/90 disabled:opacity-60"
          >
            {submitting ? copy.submitting : copy.submit}
          </button>
        </div>
      </form>
    </div>
  );
}

function FormInput({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: "text" | "email" | "tel";
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-alert">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full rounded-[var(--radius-md)] border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
    </label>
  );
}
