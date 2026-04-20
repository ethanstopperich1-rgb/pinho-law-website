import { NextResponse, type NextRequest } from "next/server";
import type { VisaEngineLeadPayload } from "@/lib/visa-engine/types";

// Submit handler for the Visa Decision Engine.
//
// Offline-safe: without Supabase credentials the route logs the lead to
// stdout and returns { ok: true, storage: "stdout" } so the UI can still
// flow to the thank-you page in local dev. Once Supabase envs are set
// we INSERT into `website_leads` via the REST endpoint.

const HIGH_VALUE_VISAS = new Set([
  "eb-5",
  "eb-2-niw",
  "e-2",
  "l-1a",
  "eb-1a",
]);

function priorityFor(
  visaRecommended: string | null,
  hasEmail: boolean,
  hasPhone: boolean,
  messageLen: number,
): "high" | "standard" | "nurture" {
  const score =
    (hasEmail ? 20 : 0) +
    (hasPhone ? 25 : 0) +
    (visaRecommended && HIGH_VALUE_VISAS.has(visaRecommended) ? 30 : 10) +
    (messageLen > 50 ? 10 : 0);
  if (score >= 70) return "high";
  if (score >= 40) return "standard";
  return "nurture";
}

export async function POST(req: NextRequest) {
  let payload: VisaEngineLeadPayload;
  try {
    payload = (await req.json()) as VisaEngineLeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  if (!payload?.name || !payload?.email || !payload?.phone) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 400 },
    );
  }

  const priority = priorityFor(
    payload.visaRecommended,
    Boolean(payload.email),
    Boolean(payload.phone),
    payload.message?.length ?? 0,
  );

  const row = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    locale: payload.locale,
    visa_interest: payload.visaRecommended,
    source: "visa-engine" as const,
    message: payload.message ?? null,
    priority,
    utm_source: payload.utm?.source ?? null,
    utm_medium: payload.utm?.medium ?? null,
    utm_campaign: payload.utm?.campaign ?? null,
  };

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Offline/dev: capture via server logs so the full flow exercises end-to-end
    // without external dependencies.
    console.info("[visa-engine/submit] stdout-only (no Supabase env)", row);
    // Optional fire-and-forget webhook to n8n if configured.
    maybeWebhook(row, payload.sessionId).catch(() => {});
    return NextResponse.json({ ok: true, storage: "stdout", priority });
  }

  try {
    const insertRes = await fetch(`${supabaseUrl}/rest/v1/website_leads`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
    if (!insertRes.ok) {
      const text = await insertRes.text();
      console.error("[visa-engine/submit] supabase insert failed", {
        status: insertRes.status,
        body: text,
      });
      return NextResponse.json(
        { ok: false, error: "storage_failed" },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[visa-engine/submit] supabase fetch threw", err);
    return NextResponse.json(
      { ok: false, error: "storage_threw" },
      { status: 502 },
    );
  }

  maybeWebhook(row, payload.sessionId).catch(() => {});
  return NextResponse.json({ ok: true, storage: "supabase", priority });
}

async function maybeWebhook(
  row: Record<string, unknown>,
  sessionId: string,
) {
  const webhook = process.env.N8N_LEAD_INTAKE_WEBHOOK_URL;
  if (!webhook) return;
  await fetch(webhook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ sessionId, ...row }),
  });
}
