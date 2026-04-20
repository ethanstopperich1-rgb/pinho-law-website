# Pinho Law — Content Spec Part 7 (Dashboard audit + remaining pages)

> **Intake status**: Part 7 received in full. Includes separate-repo dashboard audit + publication-ready copy for remaining service pages, team profiles, and the 15-article blog plan.
>
> **Scope note**: Dashboard work is in a SEPARATE repo (`PinhoLaw/Pinho-Law-Business-Dashboard`, vanilla HTML/JS/CSS + Vercel serverless functions). Current session is working in `/Users/voxaris/clients/pinho-law/website/` (Next.js). Dashboard prompts below captured for reference; execute in that other repo when the time comes.

---

## DASHBOARD REPO AUDIT (SEPARATE REPO)

**Location**: `PinhoLaw/Pinho-Law-Business-Dashboard` (GitHub)
**Stack**: `index.html` (449KB) + `js/` modules + `/api/` Vercel serverless functions (Node.js) + Supabase + cookie-auth OAuth
**Deploy**: `vercel.json` present. Local dev: `python3 -m http.server 3000`.

### Already built (live code confirmed)
| Integration | Files | Capability |
|---|---|---|
| Clio | `api/clio/billing.js`, `authorize.js`, `callback.js`, `manage.js` | Full OAuth, billing pull (activities + bills), up to 5,000 records, dedup, summary stats, 5-min cache |
| Google Analytics | `api/google/analytics.js`, `callback.js`, `index.js` | GA4 data via OAuth |
| Meta Ads | `api/meta/index.js`, `callback.js` | Meta Ads API OAuth + data pull |
| WhatsApp | `api/whatsapp/index.js` | WhatsApp Business API |
| Leadster | `js/leadster.js`, `api/leadster/` | Lead widget capture |
| Microsoft | `api/microsoft/` | Microsoft 365 / Outlook |
| Supabase | `supabase/migrations/` | `google_tokens`, `meta_tokens`, `leadster_leads` tables |

### JS modules
`app.js` (28KB), `tables.js` (30KB), `billing.js` (32KB), `editing.js` (24KB), `analytics.js` (12KB), `meta.js` (15KB), `whatsapp.js` (13KB), `leadster.js` (8.5KB), `upload.js` (4.7KB), `feedback.js` (3.6KB).

### Supabase `leadster_leads` schema
```sql
id, received_at, captured_at, name, phone, email,
main_goal, city, state, country,
utm_source, utm_medium, utm_campaign, utm_content, utm_term,
referral_url, flow, qualification (jsonb), raw_payload (jsonb)
```

### Gaps (new panels to build in dashboard)
| Missing Widget | Priority | Source |
|---|---|---|
| Visa Engine Sessions | HIGH | Supabase `visa_engine_sessions` |
| AILA News Feed | HIGH | Supabase `immigration_news` |
| Website Leads | HIGH | Supabase `website_leads` (from Sofia / website forms) |
| Google Reviews monitor | HIGH | Supabase `google_reviews` / Places API |
| n8n Workflow Health | MEDIUM | n8n REST API |
| Pipedrive Pipeline | MEDIUM | Pipedrive API |
| Team Workload | MEDIUM | Clio (already wired) |
| SEO Rankings | LOW | Google Search Console |
| Sofia Bot Conversations | MEDIUM | Sofia DB / n8n |

### DASHBOARD PROMPT D-1 — New Supabase tables
New migration file `supabase/migrations/20260420_create_website_tables.sql` adding `website_leads`, `immigration_news`, `google_reviews`, `visa_engine_sessions` with indexes + RLS. Full DDL captured in original message; `visa_engine_sessions.lead_id` FK-refs `website_leads(id)`.

### DASHBOARD PROMPT D-2 — New API routes
Follow `api/clio/billing.js` pattern (cookie auth, `parseCookies`, error handling, cache headers):
- `api/website/leads.js` — GET, filters by date/priority/locale, summary {total, high_priority, by_visa_type, by_locale}, 2-min cache
- `api/website/visa-sessions.js` — GET, summary {total, converted, conversion_rate, top_visa_type}, 5-min cache
- `api/immigration/news.js` — GET, filter by type/limit/urgent_only, 30-min cache
- `api/google/reviews.js` — GET, summary {avg_rating, total_count, five_star_count}, 1-hr cache

### DASHBOARD PROMPT D-3 — New HTML panels + JS modules
Add to `index.html` + matching `js/` file, matching existing card CSS:
1. **Website Leads Panel** (`js/website-leads.js`) — KPI row + priority-badged table
2. **Immigration News Ticker** (`js/immigration-news.js`) — Urgent banner if any urgent items, filter tabs USCIS/DOS/AILA, 30-min auto-refresh
3. **Visa Engine Sessions** (`js/visa-engine.js`) — Sessions today, conversions, top visa, 14-day sparkline
4. **Google Reviews Monitor** (`js/google-reviews.js`) — Large star display, MoM delta, last 3 review excerpts, alert if <4⭐ in last 7d

---

## REMAINING SERVICE PAGES — PT COPY

### `/real-estate/foreign-buyer-firpta` (COMPLETE — resumes the cut-off page)

**Title**: Compra de Imóvel nos EUA para Estrangeiros — Guia Completo 2026

Full PT copy captured — complete sections:
- Hero: BR = 7% of foreign FL purchases, $10.4B total. Probate risk 12–18mo, 3–7% fees, public process.
- **FIRPTA 2026 table** (0% ≤$300K residence; 10% $300K–$1M residence; 15% ≥$1M or investment; 21% foreign corp). Withholding = gross price, not profit. Refund via tax return 6–12mo.
- Structuring to minimize FIRPTA via single-member LLC (disregarded entity) — not "foreign" for FIRPTA
- **4 ownership options**: direct personal purchase / single-member FL LLC (recommended) / multi-member LLC / Revocable Living Trust — table + use cases
- **Financing table**: Resident vs non-resident (down payment 10–20% vs 30–40%, ITIN required, +0.5–1.0% rate, international-specialist banks)
- **Purchase process 8 steps**: structuring → ITIN/EIN → US bank → offer/contract → due diligence → remote closing → recording → FBAR/FATCA/BACEN compliance
- **BACEN/CBE compliance**: mandatory declaration for BR residents with foreign assets >US$1M (annual, April); R$250K max fine
- FAQ: 5 questions (buy without living in US, remote closing, LLC speed, BR probate interplay, Airbnb/short-term rental)

### `/real-estate/residential-closing`
Full PT — advocacy for buyers/sellers, doc review, title search, title insurance, closing disclosure review, recording. FL closing cost table (doc stamps 0.70% seller / 0.35% buyer, intangible tax 0.20%, title insurance 0.50–0.57%, closing fees $500–1500, recording $10–50; total 1.5–2.5% for cash buyer). FAQ: FL attorney not required but recommended, remote notarization via RON + apostille, 30–45 day typical financed closing / 15–21 day cash.

### `/real-estate/commercial-closing`
Full PT — multifamily, office/commercial, land/development, STR portfolios, mixed-use. **LLC holding + subsidiary-per-property structure diagram** (isolates risk, enables 1031 exchange, simplifies sale).

### `/business/llc-formation` (`/business/llc-florida` per spec)
Full PT — entity comparison table (LLC vs C-Corp vs S-Corp) with **S-Corp disqualifier for non-residents** called out as trap. 7-step formation process: name search (Sunbiz + USPTO) → Articles → EIN → Operating Agreement → Registered Agent → bank account → **BOI Report (FinCEN, since 2024)**. Cost table: $125 FL filing + $30 expedited + $50–150 RA + $138.75/yr Annual Report + Pinho $1.5K simple / $3.5–6K complex. Operating Agreement criticality section (15–40 pg coverage: capital contributions, distributions, voting, manager vs member-managed, buy-sell, dissolution, transfer restrictions). FAQ: BR owner no residency (needs ITIN or passport for EIN), piercing-the-veil discipline, BOI Report mandate, BR CNPJ + US LLC parallel operation.

### `/business/will-and-trust`
Full PT — **Will vs Living Trust comparison table**. Recommendation for most BR clients with FL property: Revocable Living Trust + Pourover Will + DPOA + Health Care Surrogate. Florida intestacy rules (spouse-no-kids / spouse+shared-kids / spouse+mixed-kids / no-spouse). "Pinho Family Trust" structure diagram (Grantor/Trustee = you, Successor = spouse or adult child, beneficiaries → spouse → children equally; deed property + bank + LLC shares to trust). **Critical**: BR testament does NOT govern US assets (lex situs). Need both. Integration with Brazilian succession planning. FAQ: Successor Trustee anyone capable (co-trustee US-based recommended for BR beneficiaries), Trust not registered (only property deed), revocable = fully changeable, minor children = appoint guardian + subtrust age-gated disbursements (25/30/35).

### `/business/asset-protection`
Full PT — **5-layer protection stack**: LLC per asset → LLC holding → Florida Homestead Exemption (unlimited, strongest US) → Domestic Asset Protection Trust (NV/DE) → umbrella insurance ($1–5M). Professional structure for BR doctors/dentists: PA/LLC for clinic + separate LLC for building + personal assets outside clinic LLC + malpractice insurance + personal umbrella. **Critical**: post-lawsuit asset protection = fraudulent transfer. Must structure before claim.

### `/business/contracts`
Full PT — **6 most-demanded contracts**: Operating/Shareholder Agreements (most critical, $50K–500K+ litigation cost of not having), Service Agreements (scope/deliverables/IP/liability/forum), NDAs (unilateral + mutual), Commercial Leases (NNN/gross/modified gross review, cap on CAM, personal guarantee scrutiny), Franchise Agreements (FDD review 14-day FL rule), Employment vs Independent Contractor (IRS/DOL classification stakes).

### `/business/brazil-us-taxation`
Full PT — **US tax obligations table** (Form 1040, FBAR/FinCEN 114, FATCA/Form 8938, Form 5471, Form 8621 PFIC, Form 926) with penalty severities (FBAR willful = 50% of account balance). **Substantial Presence Test** formula (current-year days + 1/3 prior + 1/6 two-years-ago, threshold 183). **Brazilian obligations**: DIRPF declaração de bens e direitos código 71, CBE/SISBACEN >US$1M annual (April) or >US$100M quarterly, GCAP for capital gains, Comunicação de Saída Definitiva requirement. **CRITICAL FACT**: Brazil-US tax treaty NEGOTIATED BUT NEVER RATIFIED by US Senate. Only relief = Foreign Tax Credit (with limits).

---

## REMAINING SERVICE PAGES (condensed brief-format for build reference)

### Immigration

- **EB-1**: EB-1A extraordinary ability (no job offer / no PERM, auto-petition), EB-1B outstanding professor/researcher, EB-1C multinational exec/manager (requires L-1A or 1yr exec abroad). BR no backlog. Premium Processing available. EB-1A ~30–40% overall approval. 10 criteria (need 3): awards, published material, critical role, high salary, judging others' work, original contributions, membership in elite orgs, etc.
- **EB-3**: Skilled Workers (bachelor's + job offer + PERM), Professionals (bachelor's), Other Workers (unskilled). **Requires PERM** (6–12mo extra). Less preferred vs EB-2 NIW. Use case: employer sponsoring specific BR employee.
- **US Citizenship**: 5yr LPR (3yr if married to USC), continuous residence, 30/60mo physical presence, good moral character, English read/write/speak, civics (100q, 6 of 10 correct). **Brazil allows dual citizenship — do NOT lose Brazilian**. N-400 $760 paper / $710 online.
- **Family Green Card Hub**: Immediate relatives of USCs (spouse/unmarried-<21/parents) = no cap, current. F-2A (LPR spouse/children) = some wait. F-2B/F-3/F-4 = long backlog. For BR: IR category almost always current = fastest.
- **Child Green Card**: USC parent + under-21 unmarried = IR. LPR parent = F-2A. Foreign-born USC child may already be USC via CSPA. Adoption: IR-3/IH-3 orphan/Hague. **Critical**: CSPA aging-out protection if petition filed pre-21.
- **O-1**: O-1A (science/edu/biz/athletics), O-1B (arts/film/TV). No cap, no lottery, can self-petition with agent. 3yr + 1yr extensions. Evidence: major award OR 3 of 8 criteria. Great for BR artists, musicians, chefs, athletes, tech founders.
- **P**: P-1 international athletes/entertainment groups, P-2 reciprocal exchange, P-3 culturally-unique. For BR samba groups, capoeira masters, forró bands. US agent/employer petition. Up to 5yr for P-1 athletes.
- **TN**: USMCA only — Canada + Mexico. **Brazilians do NOT qualify directly**. BR with CA or MX dual citizenship can use. Redirect brief — point to O-1, L-1, H-1B.
- **H-1B (2026)**: $100K fee announced, wage-based selection, 65K cap + 20K master's, ~25–35% lottery odds. For BR: viability depends on employer. Note Trump policy uncertainty. Alternatives: O-1 (no cap/lottery), L-1, TN (if dual).
- **Visa Extension / Change of Status**: I-539 dependents, I-129 work. MUST file before expiry. Maintained status during pending. I-539 regular 6–14mo, Premium $2,075/45 days. Overstay bars: 180 days = 3-yr bar, 1 year = 10-yr bar.
- **F-1 Student Visa**: SEVP-certified school full-time, OPT 12mo post-grad, STEM OPT +24mo, CPT during study. **2026 Trump restrictions**: increased scrutiny, some SEVP certifications revoked, social media screening. Path: F-1 → OPT → H-1B or O-1 → EB-2 NIW / EB-1.

---

## TEAM PROFILE PAGES

### `/team/gregori-pretto` (PT primary)
Senior Immigration Law Clerk. 8 yrs experience. Joined Pinho Law Jan 2019 (7 yrs). **Specialties**: L-1, H-1B, employment-based petitions (PERM, I-140), adjustment of status, deportation defense. **Languages**: Portuguese, English.

### `/team/hannah-dantas` and `/team/gabriel-marinho`
Case Managers — client communication, document collection, USCIS portal management, case tracking, status updates. Bilingual PT/EN. Front-line client experience.

---

## 15 BLOG LAUNCH ARTICLES — COMPLETE SPEC

Each: 1,200+ words PT primary, `Article` + `FAQPage` + `BreadcrumbList` schema, `reviewedBy` Dra. Izi Pinho, min 2 internal service-page links.

| # | Slug | Title | Keywords | Links To |
|---|---|---|---|---|
| 1 | `trump-gold-card-vs-eb2-niw-2026` | Trump Gold Card vs EB-2 NIW: o que muda para brasileiros | trump gold card brasileiro, eb2 niw 2026 | `/eb-2-niw`, `/immigration-live` |
| 2 | `comprar-imovel-eua-via-llc-guia` | Comprar imóvel nos EUA via LLC: guia completo | comprar imovel eua brasileiro llc | `/llc-formation`, `/foreign-buyer-firpta` |
| 3 | `eb-5-brasileiros-2026-sem-fila` | EB-5 para brasileiros em 2026: a fila mais rápida do mundo | eb5 brasileiro 2026 | `/eb-5` |
| 4 | `abrir-empresa-eua-sendo-brasileiro` | Como abrir empresa nos EUA sendo brasileiro | abrir empresa eua brasileiro | `/llc-formation` |
| 5 | `naturalizacao-americana-quando-como` | Naturalização americana: quando e como pedir em 2026 | cidadania americana brasileiro | `/us-citizenship` |
| 6 | `l-1a-executivos-brasileiros-guia` | L-1A para executivos brasileiros: o guia definitivo | visto l1 brasileiro executivo | `/l-1` |
| 7 | `will-trust-eua-brasileiro-precisa` | Will e Trust nos EUA: por que todo brasileiro precisa ter | testamento eua brasileiro trust | `/will-and-trust` |
| 8 | `h-1b-2026-taxa-100mil-selecao-ponderada` | H-1B 2026: taxa $100K e seleção por salário | h1b 2026 mudancas | `/h-1b`, `/o-1` |
| 9 | `green-card-casamento-guia-2026` | Green Card por casamento: guia completo 2026 | green card casamento | `/marriage-us-citizen` |
| 10 | `visto-o1-talentos-brasileiros` | Visto O-1 para talentos brasileiros | visto o1 brasileiro | `/o-1` |
| 11 | `fbar-fatca-brasileiro-eua-obrigacoes` | FBAR e FATCA: o que brasileiro nos EUA deve declarar | fbar fatca brasileiro | `/brazil-us-taxation` |
| 12 | `benefit-corporations-florida-empresas-proposito` | Benefit Corporations na Flórida | benefit corporation florida | `/benefit-corporations` |
| 13 | `o1-vs-eb2-niw-qual-melhor-brasileiro` | O-1 vs EB-2 NIW: qual é melhor? | o1 vs eb2 niw | `/o-1`, `/eb-2-niw` |
| 14 | `imovel-residencial-orlando-brasileiro` | Como comprar imóvel em Orlando sendo brasileiro | comprar casa orlando | `/foreign-buyer-firpta`, `/residential-closing` |
| 15 | `dupla-cidadania-passaporte-europeu-visto-e2` | Dupla cidadania europeia e o E-2 | visto e2 passaporte europeu | `/e-2` |
