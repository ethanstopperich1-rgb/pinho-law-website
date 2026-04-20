import { NextResponse, type NextRequest } from "next/server";
import type { AiClassifierOutput, Intent } from "@/lib/visa-engine/types";

// AI classifier fallback. When the visitor types a free-text answer
// instead of clicking a card, we call Claude Haiku and classify their
// message into one of the 6 intents. Offline without ANTHROPIC_API_KEY
// we return a best-effort keyword-rules classification so the UI still
// works in local dev.

const KEYWORD_RULES: Array<{ intent: Intent; patterns: RegExp[] }> = [
  {
    intent: "MARRIAGE",
    patterns: [/casad[oa]|cas(ar|amento)|married|spous|esposo|esposa|marriage/i],
  },
  {
    intent: "INVESTMENT",
    patterns: [/invest|eb[-\s]?5|regional center|investidor|investor|capital/i],
  },
  {
    intent: "BUSINESS_EXPANSION",
    patterns: [/empres|llc|neg[oó]cio|company|expand|business/i],
  },
  {
    intent: "STUDENT",
    patterns: [/f[-\s]?1|estud|student|university|faculdade|college/i],
  },
  {
    intent: "WORK_VISA",
    patterns: [/trabalh|work|h[-\s]?1b|emprego|job|o[-\s]?1|l[-\s]?1/i],
  },
  {
    intent: "PERMANENT_RESIDENCE",
    patterns: [/green card|permanent|residen|eb[-\s]?[12]|niw|cidadania/i],
  },
];

function rulesClassify(text: string): AiClassifierOutput {
  const hits: Intent[] = [];
  for (const rule of KEYWORD_RULES) {
    if (rule.patterns.some((p) => p.test(text))) {
      hits.push(rule.intent);
    }
  }
  if (hits.length > 0) {
    return {
      intent: hits[0],
      confidence: 0.6,
      key_facts: hits.slice(0, 3),
    };
  }
  return {
    intent: "PERMANENT_RESIDENCE",
    confidence: 0.3,
    key_facts: [],
  };
}

export async function POST(req: NextRequest) {
  const { message, locale } = await req
    .json()
    .catch(() => ({ message: "", locale: "pt" }));

  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json(
      { ok: false, error: "missing_message" },
      { status: 400 },
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Offline: keyword-based classification keeps local dev flowing without a key.
  if (!apiKey) {
    return NextResponse.json({ ok: true, ...rulesClassify(message) });
  }

  const systemPrompt = [
    "You are a visa classification assistant for Pinho Law, an immigration law firm in Orlando, FL.",
    "Classify the user's immigration intent into exactly one of these categories:",
    "PERMANENT_RESIDENCE, WORK_VISA, MARRIAGE, BUSINESS_EXPANSION, INVESTMENT, STUDENT.",
    "Return ONLY compact JSON of shape { \"intent\": string, \"confidence\": number, \"key_facts\": string[] }.",
    "Do not give legal advice, do not produce prose. JSON only.",
  ].join("\n");

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 300,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: `Locale: ${locale}\nMessage: ${message}\n\nReturn JSON.`,
          },
        ],
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("[visa-engine/chat] anthropic error", res.status, body);
      return NextResponse.json({ ok: true, ...rulesClassify(message) });
    }
    const data = (await res.json()) as {
      content?: Array<{ type: string; text?: string }>;
    };
    const text = data.content?.find((b) => b.type === "text")?.text ?? "";
    try {
      const parsed = JSON.parse(text) as AiClassifierOutput;
      return NextResponse.json({ ok: true, ...parsed });
    } catch {
      return NextResponse.json({ ok: true, ...rulesClassify(message) });
    }
  } catch (err) {
    console.error("[visa-engine/chat] threw", err);
    return NextResponse.json({ ok: true, ...rulesClassify(message) });
  }
}
