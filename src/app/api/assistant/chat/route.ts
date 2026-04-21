import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { getAllVisaIds, VISAS } from "@/data/visas";
import { getAllCitySlugs, CITIES } from "@/data/cities";
import { FAQS } from "@/data/faqs";
import { ARTICLES } from "@/content/blog";

// POST /api/assistant/chat — the Pinho Law AI assistant.
// Takes { messages, locale }, calls Claude with a navigate tool,
// returns { text, action? } where action may instruct the client
// to router.push(...) the target page.

export const runtime = "nodejs";
export const maxDuration = 30;

type Locale = "pt" | "en" | "es";
type Msg = { role: "user" | "assistant"; content: string };

function buildRouteCatalog(locale: Locale) {
  const staticRoutes = [
    { path: `/${locale}`, name: { pt: "Home", en: "Home", es: "Inicio" }[locale], desc: "Página inicial" },
    { path: `/${locale}/attorney-izi-pinho`, name: "Dra. Izi Pinho", desc: "Página da advogada" },
    { path: `/${locale}/immigration`, name: { pt: "Imigração", en: "Immigration", es: "Inmigración" }[locale], desc: "Hub de imigração" },
    { path: `/${locale}/business`, name: { pt: "Empresarial", en: "Business", es: "Empresarial" }[locale], desc: "Hub empresarial" },
    { path: `/${locale}/real-estate`, name: { pt: "Imobiliário", en: "Real Estate", es: "Inmobiliario" }[locale], desc: "Hub imobiliário" },
    { path: `/${locale}/blog`, name: "Blog", desc: "Artigos/análises" },
    { path: `/${locale}/tools`, name: { pt: "Ferramentas", en: "Tools", es: "Herramientas" }[locale], desc: "Calculadoras gratuitas" },
    { path: `/${locale}/reviews`, name: { pt: "Avaliações", en: "Reviews", es: "Reseñas" }[locale], desc: "Depoimentos de clientes" },
    { path: `/${locale}/consultation`, name: { pt: "Consulta", en: "Consultation", es: "Consulta" }[locale], desc: "Agendar consulta" },
    { path: `/${locale}/contact`, name: { pt: "Contato", en: "Contact", es: "Contacto" }[locale], desc: "Contato" },
    { path: `/${locale}/immigration-live`, name: "Immigration Live", desc: "Feed USCIS/AILA/DOS" },
    { path: `/${locale}/american-dream`, name: { pt: "Sonho Americano", en: "American Dream", es: "Sueño Americano" }[locale], desc: "Jornada para morar" },
    { path: `/${locale}/expand-business-usa`, name: "Expand Business USA", desc: "Empresários expandindo" },
    { path: `/${locale}/already-in-usa`, name: "Already in USA", desc: "Já nos EUA, regularizar status" },
    { path: `/${locale}/team`, name: { pt: "Equipe", en: "Team", es: "Equipo" }[locale], desc: "Equipe" },
  ];
  const tools = [
    "visa-decision-engine","firpta-calculator","eb5-calculator","priority-date-tracker",
    "visa-cost-estimator","green-card-timeline","llc-vs-corp","br-us-tax",
  ].map((s) => ({ path: `/${locale}/tools/${s}`, name: s, desc: `Calculadora ${s}` }));
  const visaHubs = getAllVisaIds().map((id) => ({
    path: `/${locale}/immigration/${VISAS[id].slugs[locale]}`,
    name: VISAS[id].names[locale].short,
    desc: VISAS[id].names[locale].full,
  }));
  const cities = getAllCitySlugs().map((slug) => ({
    path: `/${locale}/advogado-imigracao/${slug}`,
    name: CITIES[slug].name,
    desc: `Advogado de imigração em ${CITIES[slug].name}`,
  }));
  const faqs = FAQS.map((f) => ({
    path: `/${locale}/perguntas/${f.slug[locale]}`,
    name: f.question[locale],
    desc: f.shortAnswer[locale].slice(0, 100),
  }));
  const blog = ARTICLES.map((a) => ({
    path: `/${locale}/blog/${a.slug}`,
    name: a.content[locale].title,
    desc: a.content[locale].dek,
  }));
  return [...staticRoutes, ...tools, ...visaHubs, ...cities, ...faqs, ...blog];
}

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        text:
          "O assistente está temporariamente indisponível. Por favor use o WhatsApp (407) 385-4144 para contato direto.",
      },
      { status: 200 },
    );
  }

  const body = (await req.json().catch(() => ({}))) as {
    messages?: Msg[];
    locale?: Locale;
  };
  const messages = body.messages ?? [];
  const locale: Locale = body.locale === "en" || body.locale === "es" ? body.locale : "pt";

  const catalog = buildRouteCatalog(locale);
  // Compact list for the system prompt — name + path, one per line.
  const catalogText = catalog
    .map((r) => `${r.path} — ${r.name}${r.desc ? ` (${r.desc})` : ""}`)
    .join("\n");

  const system = `You are the Pinho Law website assistant. Pinho Law is an immigration + business law firm in Orlando, FL (Dra. Izi Pinho, Esq., Florida Bar #126610, AILA since 2019). You help visitors navigate the site and answer questions in plain language.

STRICT RULES:
- Respond in the user's language (pt/en/es). Current locale: ${locale}.
- You have ONE tool: "navigate_to" — use it when the user asks to go somewhere, see/open a page, a calculator, a blog article, a specific visa, a city, etc.
- If the user asks a factual/legal question, answer briefly (2–4 sentences) and ALSO call navigate_to with the most relevant page.
- Never give case-specific legal advice. Always recommend scheduling a consultation for specifics.
- Never invent pages. Only navigate to paths in the catalog.
- If you navigate, still write 1–2 sentences confirming where you're taking them.
- Keep responses concise. No markdown headers or lists unless truly needed.

VALID NAVIGATION CATALOG (path — name — desc):
${catalogText}`;

  const client = new Anthropic({ apiKey });

  try {
    const resp = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 800,
      system,
      tools: [
        {
          name: "navigate_to",
          description:
            "Navigate the user to a page on the Pinho Law website. Use when the user asks to visit, open, go to, see, or find something.",
          input_schema: {
            type: "object",
            properties: {
              path: {
                type: "string",
                description: "The full path from the navigation catalog, e.g. /pt/reviews",
              },
              reason: {
                type: "string",
                description: "One-sentence user-facing reason why this page matches.",
              },
            },
            required: ["path"],
          },
        },
      ],
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    let text = "";
    let action: { type: "navigate"; path: string; reason?: string } | null = null;
    for (const block of resp.content) {
      if (block.type === "text") text += block.text;
      if (block.type === "tool_use" && block.name === "navigate_to") {
        const input = block.input as { path?: string; reason?: string };
        if (input?.path && catalog.some((r) => r.path === input.path)) {
          action = { type: "navigate", path: input.path, reason: input.reason };
        }
      }
    }

    return NextResponse.json({ text: text.trim(), action });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown error";
    return NextResponse.json(
      {
        text:
          "Desculpe, tive um problema. Tente novamente ou use o WhatsApp (407) 385-4144.",
        error: message,
      },
      { status: 200 },
    );
  }
}
