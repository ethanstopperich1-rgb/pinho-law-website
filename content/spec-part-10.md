# Pinho Law — Content Spec Part 10 (Deployment + Launch)

> Captures the full deployment checklist, dashboard Claude prompts D-4/D-5/D-6, launch sequence, maintenance schedule, and repo structure map. This is the operational runbook — no new page copy.

## Sections

1. **DNS + Domain**: pinho.law → Vercel (website), dashboard.pinho.law → Vercel (dashboard repo), pinholaw.com 301→pinho.law, www 301→apex, SSL auto.
2. **Vercel website project**: env vars (Supabase, Anthropic, GA, n8n webhook, site URL, WhatsApp), `maxDuration=30` for API routes, region `iad1`. Post-deploy verify: locale roots load, EB-2 NIW page resolves, sitemap returns 180+ URLs, JSON-LD present on every page.
3. **Vercel dashboard project** (SEPARATE): framework OTHER, no build, env vars for Supabase/Clio/Meta/Google/Microsoft/WhatsApp/Leadster/SESSION_SECRET.
4. **Supabase**: region us-east-1, run migrations in order (google_tokens → leadster_leads → meta_tokens → website_tables). **Missing migration to create: `clio_tokens`** (referenced in `api/lib/clio.js` `getValidToken()` but no migration exists). Also add `microsoft_tokens`. RLS: website_leads anon insert only, immigration_news + google_reviews public read. Enable realtime on immigration_news for `/immigration-live`.
5. **OAuth apps**: Clio (6 scopes), Google Cloud (GA4 + My Business + Places + Business Profile APIs), Meta (FB Login + Marketing + WhatsApp Business), Microsoft (Graph Calendars/Mail/Contacts/OnlineMeetings). Meta message templates to get approved: `alta_prioridade_pt`, `standard_welcome_pt`, `nurture_welcome_pt`, `visa_bulletin_pt`, `immigration_alert_pt`.
6. **n8n**: hosting on n8n.cloud ($24/mo) or self-host Railway (~$5–10/mo with persistent volume). Import all 7 workflows, set credentials (Anthropic header auth, Supabase headers, WhatsApp bearer, Places key, Pipedrive), register webhook URLs in Vercel env / Meta webhook settings / Sofia bot. Activate all 7.
7. **GBP + SEO**: verify GBP ownership, set website field, copy Place ID → `GOOGLE_PLACE_ID`, 10+ photos, enable messaging. GSC + Bing submit sitemap, CWV report after 28d. Schema.org validator passes for LegalService/LocalBusiness/Person/FAQPage/Service/Article/BreadcrumbList/ProfilePage/hasCredential.
8. **Analytics**: GA4 measurement ID, conversion events (consultation_booked, lead_captured, whatsapp_click, phone_call), audience segments per locale + high-value pages; Meta Pixel Lead/ViewContent/Contact; Microsoft Clarity heatmaps.
9. **Legal/Compliance**: Privacy Policy covers LGPD+CCPA, data retention (leads 2y, GA4 default), contact for requests `izi@pinholaw.com`. Cookie banner (Cookieyes free or custom shadcn Dialog), 3 categories (Necessary/Analytics/Marketing), non-essential loads only after consent, 12mo cookie. **Attorney advertising disclaimer** (PT/EN full text in spec) in footer every page. "No attorney-client relationship" disclaimer on Visa Engine result screen before lead capture.

## Dashboard prompts

- **D-4**: Add missing `clio_tokens` + `microsoft_tokens` migrations (DDL in spec). Confirm `SUPABASE_SERVICE_ROLE_KEY` env var name matches `api/lib/supabase.js` reader.
- **D-5**: Add 4 new panels to `index.html` + 4 JS modules (`website-leads.js`, `immigration-news.js`, `visa-engine.js`, `google-reviews.js`) matching existing vanilla-JS/fetch patterns. Plus 4 new serverless functions (`api/website/leads.js`, `api/website/visa-sessions.js`, `api/immigration/news.js`, `api/google/reviews.js`) following `api/clio/billing.js` pattern exactly. Use `const { getSupabase } = require('../lib/supabase')`.
- **D-6**: Monthly report export — button in billing panel triggers XLSX with 3 sheets (Faturamento, Atividades, Leads do Site), filename `PinhoLaw-Relatorio-[YYYY-MM].xlsx`. Uses xlsx lib already in package.json.

## Launch sequence

- **T-7**: env vars set, migrations run, OAuth apps registered, Meta templates submitted, n8n imported (not active), `vercel --prod` builds clean, `tsc --noEmit` 0 errors.
- **T-3**: complete OAuth flows (Clio/Google/Meta), test WhatsApp template, manual AILA scraper trigger, Visa Engine test lead, schema validation on 5 pages, Lighthouse Perf≥85 / SEO=100 / A11y≥90 on home + hub + attorney.
- **T-1**: Meta templates approved, update review count, PT proofread by Dra. Izi, soft launch to team, 24h monitoring.
- **T-0**: announce LinkedIn/IG/FB/TikTok, update GBP, activate all workflows, monitor GA4 realtime + Vercel logs, test Visa Engine mobile trilingual.
- **T+7**: GSC sitemap confirmed, GA4 conversion events firing, n8n exec logs clean, first lead report, WhatsApp template wording tune, directory submissions (Avvo, FindLaw, Justia, AILA, Orlando Chamber, Brazilian-American Chamber SE).

## Maintenance

- **Daily automated**: AILA scraper 2h, WhatsApp Workflow 2, lead follow-up Workflow 6.
- **Weekly manual**: dashboard review (new leads + Clio billing), respond to Google reviews <48h, 2–3 social posts, 1 blog article.
- **Monthly (1st)**: Visa Bulletin broadcast auto, update `REVIEWS.totalReviews`, export report, n8n logs review, CWV check, urgent Trump policy pages, Meta Ads review, Clio outstanding bills.
- **Quarterly**: bio/awards refresh, visa timeline estimates refresh, internal link audit, low-performer page updates, rotate `SESSION_SECRET`, Supabase storage review.

## Priority queue

Per user: **F-1, F-2, F-3 → I-2 (EB-2 NIW) → I-1 (Immigration hub) → A-1 (Dra. Izi profile) → VE-1 (Visa Engine)**.

Status vs this session:
- F-1 constants: email + reviews + CASE_STATS ✅ done. Named exports `TEAM/AWARDS/MEMBERSHIPS/ATTORNEY/FIRM_STATS` were nested under `IZI` — **surfacing as top-level exports this turn**.
- F-2 sitemap ✅ done (60 slugs × 3 locales = 180 URLs).
- F-3 audit home: FIRM.email is canonical, REVIEWS match, org schema injected.
- A-1 attorney page: route + schema + awards wall + scholarship block ✅ done at `/attorney-izi-pinho`.
- VE-1: directories scaffolded, skeleton this turn.
- I-1, I-2, pillar service pages: pending (content-heavy, awaiting build batch).
