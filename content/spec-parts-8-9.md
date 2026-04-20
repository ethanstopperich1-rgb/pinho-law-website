# Pinho Law — Content Spec Parts 8–9

> **Intake status**: Parts 8 and 9 received. Message cut off inside the Deployment Checklist at legal/compliance section `[ ] 'This is attorney advertising` — remainder pending.

---

## VISA DECISION ENGINE — COMPLETE SPEC

### Purpose
Interactive decision tree with AI fallback on `/tools/visa-decision-engine` (or embedded on `/immigration`) that qualifies the visitor, recommends a visa, captures the lead. Trilingual.

### UX flow (5 steps)

**Step 1 — Locale-aware greeting** (PT/EN/ES canonical copy in spec).

**Step 2 — Primary Intent (6 cards, icon + label)**
- 🌎 Morar permanentemente
- 💼 Trabalhar nos EUA
- 💑 Casar com americano(a)
- 🏢 Expandir meu negócio
- 💰 Investir nos EUA
- 🎓 Estudar nos EUA

**Step 3 — Branch logic per intent** (summary — full tree in `src/lib/visa-engine/decision-tree.ts`)

- **Branch A (Permanent)**: job offer? Y→area→EB-1A/EB-2 NIW or EB-3 (PERM warning); N→bachelor's+? →EB-2 NIW ⭐ / EB-1A / EB-3/family; married USC→CR-1/IR-1 ⭐; family LPR/USC→family prefs; else→EB-5.
- **Branch B (Work)**: sponsor? Y→area routing (H-1B+O-1 alternative, TN for CA/MX, L-1A intracompany, O-1B arts); N→BR company 1y+? →L-1A ⭐ or L-1B; elite creds→O-1A ⭐; else→H-1B (lottery caveat) + EB-2 NIW exploration.
- **Branch C (Marriage)**: location? BR→K-1 ⭐ (fiancé); US valid→I-485 AOS; US expired→🚨 Consult Required.
- **Branch D (Business)**: BR company 1y+? Y+exec→L-1A ⭐; Y+specialized→L-1B; N + $100K–200K→E-2 country? →E-2 ⭐ or dual-cit E-2 or EB-5/EB-2 NIW + LLC; no capital→O-1 or B-1.
- **Branch E (Invest)**: volume? $50K–300K→E-2 + LLC; $300K–800K→EB-5 Rural/TEA ⭐; $800K–$1M+→EB-5; $5M+→Trump Gold Card note (legislative status pending); overlay PR intent vs business operation.
- **Branch F (Student)**: F-1 immediately; accepted? Y→timeline; N→F-1 + OPT/STEM OPT → H-1B/O-1/NIW pathway.

**Step 4 — Result card**: recommended visa + 5 bullet reasons + timeline estimate + complexity + 3 CTAs (full service page, free consultation, WhatsApp).

**Step 5 — Lead capture**: name, email, phone, WhatsApp toggle, open-text "biggest challenge". POSTs to `/api/visa-engine/submit` → Supabase `website_leads` + `visa_engine_sessions` → n8n webhook (WhatsApp welcome) → redirect `/obrigado`.

**AI fallback** (edge cases — custom free-text): `/api/visa-engine/chat` → Claude Haiku with classifier prompt returning `{ intent, confidence, key_facts[] }` → UI resumes tree at correct step.

### Tech spec
```
src/app/[locale]/tools/visa-decision-engine/page.tsx
src/components/visa-engine/
  VisaEngine.tsx, QuestionCard.tsx, AnswerButton.tsx,
  ResultCard.tsx, LeadCaptureForm.tsx, ProgressBar.tsx
src/lib/visa-engine/
  decision-tree.ts, types.ts
src/app/api/visa-engine/
  submit/route.ts, chat/route.ts
src/app/[locale]/obrigado/page.tsx
```

Result shape: `{ id, visaCode, titles{pt,en,es}, reasons{pt,en,es}[], timeline, complexity, servicePage, badgeColor }`.

---

## AILA / USCIS SCRAPER — COMPLETE SPEC

**Sources to monitor:**
| Source | URL | Frequency | Priority |
|---|---|---|---|
| USCIS News | /newsroom/news-releases | 2h | 🔴 HIGH |
| USCIS Policy Manual | /policy-manual/updates | 4h | 🔴 HIGH |
| AILA News | aila.org/news | 4h | 🟡 MED |
| DOS Visa Bulletin | travel.state.gov/visa-bulletin | Monthly (1st) | 🔴 HIGH |
| DOS Travel Advisories (Brazil) | travel.state.gov/.../brazil-travel-advisory | Daily | 🟡 MED |
| Federal Register (immigration) | federalregister.gov | Daily | 🟡 MED |
| ICE Newsroom | ice.gov/newsroom | 6h | 🟡 MED |

**n8n AILA scraper workflow (captured as JSON skeleton)**:
Schedule → HTTP fetch USCIS/DOS pages → Code node (cheerio parse, mark urgent via keywords `immediate|effective immediately|policy change|suspended|terminated`) → Claude Haiku summarize in pt-BR (2 sentences, neutral, factual) → Supabase dedup check by `external_url` → insert to `immigration_news` → filter urgent → WhatsApp template `immigration_alert_pt` broadcast to opted-in clients.

**Visa Bulletin monthly parser** (runs 1st of each month, 9am ET): regex-extract EB-2/EB-3/F-2A/F-2B Brazil priority dates, parse `01MAY23` → ISO, compare prior month, write to DB, trigger Workflow 5 segmented broadcast.

---

## 7 n8n WORKFLOWS — COMPLETE SPECS

### 1. Lead Intake Router
Webhook `/webhook/pinho-lead-intake` (called from website visa-engine submit, Leadster, Sofia). Normalize → IP geo enrich (ip-api.com free) → score lead:
```
score = has_email(20) + has_phone(25) + visa_type_weight + message_quality(10 if >50ch) + locale_pt(5)
visa_type_weight: eb-5=30, eb-2-niw=25, e-2=25, l-1a=20, eb-1a=20, k-1=15, h-1b=10, f-1=5
priority: ≥70 HIGH, 40–69 STANDARD, <40 NURTURE
```
Branch by priority: HIGH → immediate team WA alert + Pipedrive deal "Nova Consulta" + welcome template `alta_prioridade_pt`; STANDARD → welcome + Pipedrive "Qualificação" + 24h follow-up; NURTURE → email nurture + `nurture_welcome_pt` + tagged.

### 2. WhatsApp Response Handler
Webhook `/webhook/whatsapp-incoming` (Meta verify signature). Match sender phone → Supabase lead lookup → keyword router (consulta/agendar → Calendly; valor/preço → free-consult note; status/caso → Clio matter lookup) → else Claude AI response as "Sofia" persona (PT, always-end-with-consult-CTA, no specific legal advice). Log to `whatsapp_conversations`. 24h no-response → follow-up workflow.

### 3. Clio Case Status Sync
Schedule 6h. Fetch open matters → activities last 7d → flag stale (no activity 14d+) → Slack/email alert to team. If status changed (open→closed) → trigger feedback request + Pipedrive deal Won/Lost.

### 4. Google Reviews Monitor
Schedule daily 8am ET. Google Places API fetch → dedup by `google_review_id` → insert to `google_reviews`. If <4⭐ → immediate team WA alert + Clio/Asana task. Aggregate drops <4.8 → alert Dra. Izi. Response template for negative reviews captured in spec (PT).

### 5. Monthly Visa Bulletin Broadcast
Schedule 1st of month 10am ET. Parse → extract Brazil dates → compare previous month → ADVANCED/RETROGRESSED/CURRENT/UNCHANGED. Segment clients (active EB-2 NIW / waiting for priority date) → personalized WhatsApp via approved template → log to `broadcast_log`.

### 6. Lead Follow-up Sequence
Triggered from Workflow 1 (standard/nurture). Day 0 welcome → Day 1 (no response) WA follow-up → Day 3 email → Day 7 final WA → Day 30 (nurture only) monthly newsletter. Stop if responds, books, or marked "not interested".

### 7. Sofia Bot Lead Handoff
Webhook from `pinho-law-sofia-bot` with `{ name, email, phone, visa_interest, conversation_summary, session_id, locale, booking_confirmed }`. If booked → Clio matter + Pipedrive "Consulta Agendada" + team notification + client confirmation WA. If just info → Supabase insert → route to Workflow 1 for scoring + tag "Sofia — Sem Agendamento". Store summary for team reference.

---

## PART 9 — CLAUDE CODE PROMPT SEQUENCE (build order)

### Phase 1 — Foundation Fixes
- **F-1**: Replace `constants.ts` with corrected block; add `organizationSchema/serviceSchema/breadcrumbSchema/articleSchema`; inject org schema into `[locale]/layout.tsx`. Typecheck.
- **F-2**: Replace `sitemap.ts` with 60+ URL version.
- **F-3**: Audit existing `page.tsx` + `hero.tsx`: verify `izi@pinholaw.com`, 5.0/111, FAQ schema ≥5Q, CTA → `/consultation`, WhatsApp `wa.me/14073854144`.

### Phase 2 — Immigration Pages (priority order)
- **I-1**: `/immigration` hub — 2-col service grid (immigrant + non-immigrant), stats bar, FAQ preview (5Q), Visa Decision Engine CTA.
- **I-2**: `/immigration/immigrant-visas/eb-2-niw` — **highest-volume page**, full Dhanasar framework + Proffitt table + 2026 approval data + Timeline component + stats bar (Brasil CURRENT ✅ / Premium ✅ / Sem patrocinador ✅ / 8–14mo).
- **I-3**: `/immigration/non-immigrant-visas/e-2` — lead with dual-cit angle + treaty country table + requirements (substantial/at-risk/non-marginal/50%+/direction) + consular 3–8wk + 2yr initial unlimited renewals + explicit "E-2 does NOT lead to green card" + path via EB-5/NIW.
- **I-4**: `/immigration/non-immigrant-visas/l-1` — L-1A vs L-1B, 1-year-abroad requirement, new-office path, direct EB-1C pathway (fastest Brazilian exec route).
- **I-5**: `/immigration/immigrant-visas/eb-5` — post-Reform Act thresholds ($800K rural/urban TEA, $1.05M non-TEA), Brazilian Rural set-aside NO BACKLOG, Regional Center vs Direct, 24–36mo conditional, Trump Gold Card mention with "legislative status pending April 2026" disclaimer.

### Phase 3 — Business Law
- **B-1**: `/business` hub + `/business/llc-florida` + `/business/will-and-trust` + `/business/protecao-patrimonial` + `/business/contratos`.

### Phase 4 — Real Estate
- **R-1**: `/real-estate` hub + `/real-estate/comprador-estrangeiro` + `/real-estate/fechamento-residencial` + `/real-estate/fechamento-comercial` + `/real-estate/investimento` (LLC-per-property + Holding + 1031 exchange + Airbnb Orlando structure + FIRPTA planning).

### Phase 5 — Attorney + Team (E-E-A-T CRITICAL)
- **A-1**: `/dra-izi-pinho` — hero photo + credentials block (Bar 126610 + AILA 2019 + Stetson magna + Rollins summa + 47 Stetson L. Rev. 333 + Harvard Forum #533) + awards timeline (10) + philosophy bio (3 paragraphs: origin → academic → trilingual vision) + bar membership list + publications + YT embed + consult CTA. Schema: Person + BreadcrumbList + ProfilePage.

### Phase 6 — Content
- **C-1**: `/american-dream` + `/expand-business-usa` + `/already-in-usa` journey pages.
- **C-2**: `/immigration-live` — Supabase-powered live feed, URGENTE banner, filter tabs, right sidebar with current Visa Bulletin EB-2 Brazil. ISR revalidate 1800s. ItemList + FAQPage schema.
- **C-3**: `/blog` + `/blog/[slug]` infrastructure. `src/lib/blog.ts` typed utilities. First 3 articles: `trump-gold-card-vs-eb2-niw-2026`, `comprar-imovel-eua-via-llc-guia`, `abrir-empresa-eua-sendo-brasileiro`.

### Phase 7 — Visa Engine + Tools
- **VE-1**: Full build (see complete spec above). Decision tree file, 6 components, 2 API routes, obrigado page.

### Phase 8 — Polish + Performance
- **P-1**: Core Web Vitals — next/image everywhere with width/height/priority/sizes, `display=swap` fonts + preconnect, `next/script` with afterInteractive/lazyOnload, LCP preloads, CLS skeleton loaders, bundle analyzer.
- **P-2**: i18n completeness — every string via `t()`, pt.json/en.json/es.json parity, per-locale OG images.

---

## ENV VAR MASTER LIST

**pinho-law-website**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ANTHROPIC_API_KEY`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `N8N_LEAD_INTAKE_WEBHOOK_URL`, `NEXT_PUBLIC_SITE_URL=https://pinho.law`.

**Pinho-Law-Business-Dashboard** (separate repo): `SUPABASE_URL/SERVICE_KEY`, `CLIO_CLIENT_ID/SECRET`, `META_APP_ID/SECRET`, `GOOGLE_CLIENT_ID/SECRET`, `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `MICROSOFT_CLIENT_ID/SECRET`, `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `LEADSTER_WEBHOOK_SECRET`, `SESSION_SECRET`.

**n8n**: `ANTHROPIC_API_KEY`, `SUPABASE_URL/SERVICE_KEY`, `WHATSAPP_API_URL/ACCESS_TOKEN`, `PIPEDRIVE_API_KEY`, `GOOGLE_PLACES_KEY`, `PINHO_LAW_TEAM_WHATSAPP=+14073854144`, `N8N_ENCRYPTION_KEY`.

---

## DEPLOYMENT CHECKLIST

DNS: pinho.law → Vercel primary; pinholaw.com 301→pinho.law; www 301→apex.
Vercel: two projects (website Next.js + dashboard vanilla serverless), env vars in dashboard.
Supabase: 4 migrations + RLS.
Google: GA4 ID, Search Console verification, GBP website field, Places API key.
Meta: App + Business Manager + WhatsApp Business approval + pre-approved templates (PT/EN/ES per workflow) + Ads connection.
Clio: app registered + OAuth callback + scopes (matters, activities, bills, contacts, users).
n8n: self-hosted on Railway/Render OR n8n.cloud, 7 workflows imported/active, webhook URLs, AILA scraper test.
Content: 4 team photos in `/public/images/team/`, per-locale OG images in `/public/og/`, logo + favicon + apple-touch, robots.txt + sitemap.
SEO: sitemap submitted GSC + Bing, schema validated, unique titles/descriptions, no broken links (Screaming Frog), CWV LCP<2.5/CLS<0.1/FID<100ms.
Legal: Privacy updated (LGPD + GDPR), cookie banner, Disclaimer, **"This is attorney advertising"** disclosure [CUT OFF in intake — remainder pending].
