import { NextResponse } from "next/server";
import { Resend } from "resend";
import { FIRM } from "@/lib/constants";

// POST /api/intake/submit — lead intake handler.
// Accepts the IntakeData payload, sends two emails via Resend:
//   1. Firm notification to izi@pinholaw.com (full intake dump)
//   2. Confirmation to the client (next-steps copy)
// Falls back gracefully (no email sent) when RESEND_API_KEY is unset —
// the intake UI still shows "complete" + WhatsApp/mailto buttons, so
// leads are never lost even if email is unconfigured.

export const runtime = "nodejs";
export const maxDuration = 15;

interface IntakeSubmission {
  service: "immigration" | "business" | "both" | null;
  immigrationCategory: string | null;
  businessCategory: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: "phone" | "whatsapp" | "email" | null;
  message: string;
  locale?: "pt" | "en" | "es";
  source?: string;
}

function sanitize(v: unknown, max = 2000): string {
  return String(v ?? "")
    .trim()
    .slice(0, max)
    .replace(/<script[\s\S]*?<\/script>/gi, "");
}

function validateEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

// ── WhatsApp notification (Twilio) ───────────────────────────────
// Sends a brief ping to the firm's WhatsApp when a new intake arrives.
// Uses Twilio's WhatsApp API. Configure env:
//   TWILIO_ACCOUNT_SID=ACxxxxxxxx
//   TWILIO_AUTH_TOKEN=xxxxxxxx
//   TWILIO_WHATSAPP_FROM=whatsapp:+14155238886   (Twilio Sandbox or approved sender)
//   FIRM_WHATSAPP_TO=whatsapp:+14073854144       (where Izi wants the ping)
// Gracefully no-op if any is missing.
async function notifyFirmWhatsApp(d: IntakeSubmission): Promise<"sent" | "skipped" | "failed"> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM;
  const to = process.env.FIRM_WHATSAPP_TO;
  if (!sid || !token || !from || !to) return "skipped";

  const lines = [
    "🔔 *Novo lead — Pinho Law*",
    "",
    `*${sanitize(d.firstName)} ${sanitize(d.lastName)}*`,
    `📧 ${sanitize(d.email)}`,
    d.phone ? `📱 ${sanitize(d.phone)}` : "",
    d.service ? `⚖️ Serviço: ${sanitize(d.service)}` : "",
    d.immigrationCategory ? `🌍 Categoria: ${sanitize(d.immigrationCategory)}` : "",
    d.businessCategory ? `💼 Categoria: ${sanitize(d.businessCategory)}` : "",
    d.preferredContact ? `📞 Contato preferido: ${sanitize(d.preferredContact)}` : "",
    "",
    `💬 ${sanitize(d.message, 500)}`,
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams();
  params.append("From", from);
  params.append("To", to);
  params.append("Body", lines);

  try {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " + Buffer.from(`${sid}:${token}`).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      },
    );
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[intake] Twilio WhatsApp failed:", res.status, text);
      return "failed";
    }
    return "sent";
  } catch (err) {
    console.error("[intake] Twilio WhatsApp error:", err);
    return "failed";
  }
}

function formatFirmEmailHtml(d: IntakeSubmission): string {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:8px 12px;background:#f6f3ec;font-weight:600;color:#1A1A2E;border-bottom:1px solid #e5e1d6">${k}</td><td style="padding:8px 12px;color:#1A1A2E;border-bottom:1px solid #e5e1d6">${v || "—"}</td></tr>`;
  return `
<!doctype html><html><body style="margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;background:#faf8f2;padding:24px">
<table style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(14,27,46,0.08)" cellpadding="0" cellspacing="0">
  <tr><td style="background:#0E1B2E;padding:20px 24px;color:#C9A961">
    <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#C9A961;font-weight:600">New lead · Pinho Law</div>
    <div style="font-size:22px;font-weight:700;color:#F5F1E8;margin-top:4px">${sanitize(d.firstName)} ${sanitize(d.lastName)}</div>
    <div style="margin-top:4px;color:#F5F1E8;opacity:0.7;font-size:14px">${sanitize(d.email)} · ${sanitize(d.phone)}</div>
  </td></tr>
  <tr><td style="padding:0">
    <table style="width:100%" cellpadding="0" cellspacing="0">
      ${row("Service", sanitize(d.service))}
      ${d.immigrationCategory ? row("Immigration category", sanitize(d.immigrationCategory)) : ""}
      ${d.businessCategory ? row("Business category", sanitize(d.businessCategory)) : ""}
      ${row("Preferred contact", sanitize(d.preferredContact))}
      ${row("Locale", sanitize(d.locale))}
      ${row("Source", sanitize(d.source))}
      <tr><td colspan="2" style="padding:16px 12px;color:#1A1A2E">
        <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#C9A961;font-weight:600;margin-bottom:8px">Message</div>
        <div style="white-space:pre-wrap;line-height:1.6">${sanitize(d.message, 4000) || "—"}</div>
      </td></tr>
    </table>
  </td></tr>
  <tr><td style="padding:16px 24px;background:#f6f3ec;color:#555;font-size:12px">
    Reply directly to this email to contact ${sanitize(d.firstName)}. They also get a separate confirmation email.
  </td></tr>
</table>
</body></html>`;
}

function formatClientEmailHtml(d: IntakeSubmission): string {
  const locale = d.locale ?? "pt";
  const copy = {
    pt: {
      greeting: `Olá ${sanitize(d.firstName)},`,
      thanks:
        "Recebemos suas informações. A equipe da Pinho Law vai entrar em contato em até 1 dia útil.",
      next: "Próximos passos",
      steps: [
        "Nossa equipe revisa seu caso (normalmente no mesmo dia).",
        `Entramos em contato pelo método escolhido: <b>${sanitize(d.preferredContact)}</b>.`,
        "Agendamos sua consulta inicial — 30 minutos, gratuita.",
      ],
      urgent: "Caso urgente? Chame no WhatsApp:",
      signoff: "Obrigada,\nPinho Law · Orlando, FL",
    },
    en: {
      greeting: `Hi ${sanitize(d.firstName)},`,
      thanks:
        "We've received your intake. The Pinho Law team will contact you within 1 business day.",
      next: "Next steps",
      steps: [
        "Our team reviews your case (usually same day).",
        `We reach out via your preferred method: <b>${sanitize(d.preferredContact)}</b>.`,
        "We schedule your initial consultation — 30 minutes, complimentary.",
      ],
      urgent: "Urgent? WhatsApp us:",
      signoff: "Thank you,\nPinho Law · Orlando, FL",
    },
    es: {
      greeting: `Hola ${sanitize(d.firstName)},`,
      thanks:
        "Recibimos tu información. El equipo de Pinho Law te contactará en 1 día hábil.",
      next: "Próximos pasos",
      steps: [
        "Nuestro equipo revisa tu caso (generalmente el mismo día).",
        `Te contactamos por: <b>${sanitize(d.preferredContact)}</b>.`,
        "Agendamos tu consulta inicial — 30 minutos, gratuita.",
      ],
      urgent: "¿Urgente? Escríbenos por WhatsApp:",
      signoff: "Gracias,\nPinho Law · Orlando, FL",
    },
  } as const;
  const c = copy[locale];
  return `<!doctype html><html><body style="margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;background:#faf8f2;padding:24px">
<table style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(14,27,46,0.08)" cellpadding="0" cellspacing="0">
  <tr><td style="background:#0E1B2E;padding:24px;color:#F5F1E8">
    <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#C9A961;font-weight:600">Pinho Law</div>
    <div style="font-size:20px;font-weight:700;margin-top:6px">${c.greeting}</div>
  </td></tr>
  <tr><td style="padding:24px;color:#1A1A2E;font-size:15px;line-height:1.6">
    <p style="margin:0 0 16px">${c.thanks}</p>
    <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#C9A961;font-weight:600;margin-top:20px;margin-bottom:8px">${c.next}</div>
    <ol style="padding-left:18px;margin:0 0 16px">
      ${c.steps.map((s) => `<li style="margin:6px 0">${s}</li>`).join("")}
    </ol>
    <p style="margin:16px 0 0;font-size:14px;color:#555">${c.urgent} <a href="https://wa.me/${FIRM.whatsapp}" style="color:#C9A961;font-weight:600">+1 (407) 385-4144</a></p>
  </td></tr>
  <tr><td style="padding:16px 24px;background:#f6f3ec;color:#555;font-size:12px;white-space:pre-line">${c.signoff}</td></tr>
</table>
</body></html>`;
}

export async function POST(req: Request) {
  let body: IntakeSubmission;
  try {
    body = (await req.json()) as IntakeSubmission;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  // Minimal validation
  if (!body.firstName || !body.email || !body.message) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 400 },
    );
  }
  if (!validateEmail(body.email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 },
    );
  }

  // Fire WhatsApp notification + emails in parallel. Each channel fails
  // independently — a WhatsApp failure does not block email, and vice
  // versa. At least one channel succeeds = lead is captured.
  const apiKey = process.env.RESEND_API_KEY;
  const fromDomain =
    process.env.RESEND_FROM_DOMAIN ?? "notifications@pinho.law";
  const firmEmail = FIRM.email;

  const emailPromise: Promise<"sent" | "skipped" | "failed"> = (async () => {
    if (!apiKey) return "skipped";
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: `Pinho Law Intake <${fromDomain}>`,
        to: [firmEmail],
        replyTo: body.email,
        subject: `New lead: ${sanitize(body.firstName)} ${sanitize(body.lastName)} — ${sanitize(body.service) || "general"}`,
        html: formatFirmEmailHtml(body),
      });
      await resend.emails.send({
        from: `Pinho Law <${fromDomain}>`,
        to: [body.email],
        replyTo: firmEmail,
        subject:
          body.locale === "en"
            ? "We've received your intake — next steps"
            : body.locale === "es"
              ? "Recibimos tu información — próximos pasos"
              : "Recebemos seu contato — próximos passos",
        html: formatClientEmailHtml(body),
      });
      return "sent";
    } catch (err) {
      console.error(
        "[intake] email send failed:",
        err instanceof Error ? err.message : err,
      );
      return "failed";
    }
  })();

  const [emailResult, waResult] = await Promise.all([
    emailPromise,
    notifyFirmWhatsApp(body),
  ]);

  // At least one succeeded = ok. Both failed = still ok to the UI
  // (lead is in Vercel logs), but flag for follow-up.
  const anySuccess = emailResult === "sent" || waResult === "sent";
  if (!anySuccess && emailResult !== "skipped") {
    console.log("[intake] ALL NOTIFICATION CHANNELS FAILED — manual follow-up needed:", {
      firstName: body.firstName,
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message.slice(0, 200),
    });
  }

  return NextResponse.json({
    ok: true,
    channels: { email: emailResult, whatsapp: waResult },
  });
}
