import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/immigrant-visas/eb-2-niw/for-doctors";

// EB-2 NIW vertical for healthcare professionals — médicos brasileiros é
// segmento de alta conversão (alta renda, alta escolaridade, alta
// elegibilidade Dhanasar). Captures: "EB-2 NIW médico brasileiro",
// "physician national interest waiver", "USMLE green card".

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "EB-2 NIW para Médicos",
    eyebrow: "EB-2 NIW · Vertical: Healthcare",
    h1: "EB-2 NIW para Médicos e Profissionais de Saúde Brasileiros",
    lede:
      "Médicos formados no Brasil (CRM ativo), enfermeiros especialistas, pesquisadores em saúde pública e biomedicina. Healthcare é prioridade federal sob INA §203(b)(2)(B)(ii) — caminho mais favorável de EB-2 NIW para o setor.",
    stats: [
      { value: "80–90%", label: "Aprovação c/ counsel" },
      { value: "CURRENT", label: "Brasil 2026" },
      { value: "Physician NIW", label: "Estatuto especial" },
      { value: "USMLE/ECFMG", label: "Pré-requisitos" },
    ],
    meta: {
      title:
        "EB-2 NIW para Médicos Brasileiros 2026 — Physician National Interest Waiver | Pinho Law",
      description:
        "Médicos brasileiros formados no exterior: como obter green card via EB-2 NIW. Physician NIW (medically underserved areas), pesquisador em saúde pública, USMLE/ECFMG.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Duas rotas EB-2 NIW para healthcare",
        body: "Profissionais de saúde brasileiros têm duas vias dentro do EB-2 NIW: (1) Physician NIW estatutário — INA §203(b)(2)(B)(ii) — para médicos que se comprometem a 5 anos de prática em área medicamente desatendida (HPSA — Health Professional Shortage Area, ou MUA — Medically Underserved Area, ou em VA hospital); e (2) NIW geral via Dhanasar 3-prong, para perfis de pesquisa, saúde pública, ou subspecialty crítica que não exijam compromisso de área desatendida.",
      },
      {
        kind: "table",
        value: {
          heading: "Physician NIW (estatutário) vs NIW geral (Dhanasar)",
          headers: ["Critério", "Physician NIW (§203(b)(2)(B)(ii))", "NIW Dhanasar"],
          rows: [
            ["Compromisso de área", "5 anos em HPSA, MUA ou VA hospital", "Nenhum"],
            ["Tipo de prática", "Atendimento clínico em primary care ou subspecialty designada", "Pesquisa, saúde pública, qualquer subspecialty"],
            ["Comprovação", "Carta da unidade + certificação de área desatendida", "Framework Dhanasar tradicional"],
            ["Premium Processing", "Sim", "Sim"],
            ["Pode mudar de hospital antes dos 5 anos?", "Apenas dentro de área designada", "Sim, sem restrição"],
            ["I-485 disponível imediatamente?", "Sim, pode protocolar concorrente", "Sim, se Priority Date current"],
          ],
          note: "Para médicos em primary care (clínica geral, pediatria, OB/GYN, psiquiatria, medicina interna) com vontade de servir em área desatendida, Physician NIW costuma ser mais previsível. Para subspecialties competitivas (cirurgia, cardiologia intervencionista) ou perfis acadêmicos, NIW Dhanasar geral.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Pré-requisitos médicos para qualquer rota EB-2 NIW",
          intro:
            "Antes do filing migratório, o médico brasileiro precisa atender requisitos do sistema regulatório americano:",
          style: "check",
          items: [
            "ECFMG Certification (Educational Commission for Foreign Medical Graduates) — mandatório para todos os médicos formados fora dos EUA",
            "USMLE Steps 1, 2 CK e 2 CS aprovados (Step 3 normalmente exigido até a residência ou após — varia por estado)",
            "Diploma médico verificado pelo ECFMG (FCVS — Federation Credentials Verification Service)",
            "Tradução juramentada do diploma e histórico do CRM brasileiro",
            "Para Physician NIW: oferta de emprego válida em HPSA/MUA designada (carta de hospital, clínica federal, VA, ou rede comunitária)",
            "Demonstração de proficiência em inglês — necessária para licenciamento estadual subsequente",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Subspecialties que aprovam mais consistentemente em NIW Dhanasar",
          intro:
            "Áreas com escassez federal documentada ou alta importância de saúde pública:",
          style: "check",
          items: [
            "Psiquiatria e saúde mental (escassez federal severa pós-2020)",
            "Oncologia (todas as subáreas)",
            "Cardiologia intervencionista e eletrofisiologia",
            "Doenças infecciosas (especialmente após COVID-19, com foco em saúde pública)",
            "Geriatria (envelhecimento da população americana)",
            "Pesquisa em healthcare AI / informática médica (intersecção com IA federal priority)",
            "Saúde pública e epidemiologia (perfis de PhD em pesquisa)",
            "Pediatria especializada (cardiopediatria, oncopediatria, neonatologia)",
            "Anestesiologia em áreas críticas",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Pacote típico de evidência para médico brasileiro em NIW Dhanasar",
          style: "check",
          items: [
            "ECFMG Certification + cópias dos USMLE score reports",
            "Diploma médico do Brasil + tradução juramentada + verificação FCVS",
            "Histórico de residência e fellowship (se concluído nos EUA ou Brasil)",
            "Publicações em revistas indexadas (Lancet, NEJM, JAMA, ou revistas brasileiras de impacto como Revista Brasileira de Cardiologia)",
            "Cartas de chefes de departamento, professores de residência, ou colegas em US institutions",
            "Plano de Atuação Proposto: prática clínica + componente de pesquisa ou ensino, alinhado a prioridade federal de saúde",
            "Estatísticas de impacto: pacientes atendidos, casos publicados, protocolos desenvolvidos",
            "Membership em sociedades médicas (AMA, ACS, ACC, ACR, etc.) ou suas equivalentes brasileiras (SBC, SBOC, SBP, SBD)",
            "Prêmios de residência, awards de pesquisa, palestras em congressos internacionais",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          badgeLabel: "Caminho integrado",
          tone: "gold",
          heading: "Médico brasileiro recém-aprovado USMLE — sequência completa",
          body: "Para médicos brasileiros que ainda estão fazendo USMLE no Brasil ou em residência nos EUA via J-1, a sequência típica é: (1) Conclusão USMLE + ECFMG · (2) Match em residência (J-1 visa scholar via ECFMG) · (3) Conclusão da residência (3-7 anos) · (4) J-1 waiver via Conrad 30 ou Physician NIW · (5) EB-2 NIW para green card permanente. O Physician NIW pode substituir o J-1 waiver tradicional em muitos casos.",
          recLabel: "Para quem está em J-1",
          rec: "Médicos em residência J-1 enfrentam a 'two-year home residency requirement' (212(e)). Physician NIW é frequentemente usado como J-1 waiver alternativo via Conrad 30 ou waiver direto da agência interessada — eliminando a necessidade de retornar 2 anos ao Brasil.",
          liveLink: { label: "Falar sobre seu caso médico", href: "/consultation" },
        },
      },
    ],
    faqTitle: "Perguntas frequentes — EB-2 NIW para Médicos",
    faq: [
      {
        q: "Médico brasileiro precisa fazer residência nos EUA antes do EB-2 NIW?",
        a: "Não obrigatoriamente. Se o histórico clínico/de pesquisa no Brasil for suficiente para fechar o Dhanasar 3-prong, o EB-2 NIW pode ser protocolado mesmo sem residência americana. Na prática, médicos sem residência americana enfrentam mais dificuldade de licenciamento estadual — mas o green card em si não exige residência local.",
      },
      {
        q: "Posso fazer EB-2 NIW estando em J-1 (residência)?",
        a: "Sim, mas com nuance. J-1 com 'two-year home residency requirement' (INA §212(e)) impede I-485 até cumprir os 2 anos no Brasil ou obter waiver. Physician NIW pode servir como waiver. Conrad 30 (J-1 waiver via estado) também é alternativa comum. Avaliamos a estratégia conjunta.",
      },
      {
        q: "Physician NIW exige 5 anos em uma única clínica?",
        a: "Não — exige 5 anos cumulativos em prática qualificada em área designada (HPSA, MUA, ou VA). Pode ser dividido entre múltiplas instituições, desde que cada uma esteja em área designada. Mudança fora de área desatendida invalida o compromisso e pode levar a denial do I-485.",
      },
      {
        q: "Pesquisador brasileiro em saúde pública (PhD, sem MD) qualifica para EB-2 NIW?",
        a: "Sim, frequentemente. Pesquisadores em epidemiologia, biologia molecular aplicada, biotech, ou healthcare AI qualificam via NIW Dhanasar. Não usam Physician NIW (que é específico para médicos atendendo pacientes), mas aprovam consistentemente sob o framework geral. Saúde pública é prioridade federal documentada.",
      },
      {
        q: "Enfermeiro especialista (Nurse Practitioner, CRNA) pode fazer EB-2 NIW?",
        a: "Em casos específicos, sim. NPs e CRNAs com mestrado/DNP + experiência substancial + histórico de impacto (pesquisa, papers, treinamento) podem qualificar. Enfermeiros sem mestrado normalmente fazem EB-3 (Schedule A — escassez federal) ao invés de EB-2 NIW. Avaliamos perfil-a-perfil.",
      },
      {
        q: "Quanto tempo o EB-2 NIW leva para médico brasileiro em 2026?",
        a: "Com Premium Processing: I-140 aprovado em 45 dias úteis. Para médico já nos EUA em status válido (J-1 com waiver, H-1B, O-1), I-485 concorrente leva mais 6-14 meses. Para processamento consular no Brasil: 12-18 meses adicionais após I-140. Brasil CURRENT em EB-2 — sem fila adicional.",
      },
    ],
    relatedTitle: "Veja também",
    related: [
      { label: "EB-2 NIW — Visão geral completa", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-2 NIW para profissionais de Tech", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
      { label: "EB-2 NIW vs EB-1A — qual escolher", href: "/immigration/immigrant-visas/eb-2-niw/vs-eb-1a" },
      { label: "EB-1B — Pesquisador Outstanding (alternativa para PhD)", href: "/immigration/immigrant-visas/eb-1" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "EB-2 NIW for Doctors",
    eyebrow: "EB-2 NIW · Vertical: Healthcare",
    h1: "EB-2 NIW for Brazilian Doctors and Healthcare Professionals",
    lede:
      "Brazilian-trained physicians (active CRM), specialized nurses, public health and biomedical researchers. Healthcare is a federal priority under INA §203(b)(2)(B)(ii) — the most favorable EB-2 NIW path for the sector.",
    stats: [
      { value: "80–90%", label: "Approval rate w/ counsel" },
      { value: "CURRENT", label: "Brazil 2026" },
      { value: "Physician NIW", label: "Statutory special" },
      { value: "USMLE/ECFMG", label: "Prerequisites" },
    ],
    meta: {
      title:
        "EB-2 NIW for Brazilian Doctors 2026 — Physician National Interest Waiver | Pinho Law",
      description:
        "Brazilian foreign medical graduates: how to get the green card via EB-2 NIW. Physician NIW (medically underserved areas), public health researchers, USMLE/ECFMG.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Two EB-2 NIW paths for healthcare",
        body: "Brazilian healthcare professionals have two EB-2 NIW lanes: (1) Statutory Physician NIW — INA §203(b)(2)(B)(ii) — for physicians who commit to 5 years of practice in a medically underserved area (HPSA, MUA, or VA hospital); and (2) general NIW via the Dhanasar 3-prong test, for research, public health, or critical-subspecialty profiles that don't require an underserved-area commitment.",
      },
      {
        kind: "table",
        value: {
          heading: "Physician NIW (statutory) vs general NIW (Dhanasar)",
          headers: ["Criterion", "Physician NIW (§203(b)(2)(B)(ii))", "Dhanasar NIW"],
          rows: [
            ["Area commitment", "5 years in HPSA, MUA, or VA hospital", "None"],
            ["Practice type", "Clinical care in primary care or designated subspecialty", "Research, public health, any subspecialty"],
            ["Proof", "Letter from facility + designated-area certification", "Standard Dhanasar framework"],
            ["Premium Processing", "Yes", "Yes"],
            ["Can switch hospital before 5 yrs?", "Only within designated area", "Yes, no restriction"],
            ["I-485 immediately available?", "Yes, can file concurrent", "Yes, if Priority Date current"],
          ],
          note: "For physicians in primary care (general practice, pediatrics, OB/GYN, psychiatry, internal medicine) willing to serve in an underserved area, Physician NIW is usually more predictable. For competitive subspecialties (surgery, interventional cardiology) or research-academic profiles, general Dhanasar NIW.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Medical prerequisites for any EB-2 NIW path",
          intro:
            "Before the immigration filing, the Brazilian physician must satisfy US regulatory requirements:",
          style: "check",
          items: [
            "ECFMG Certification (Educational Commission for Foreign Medical Graduates) — mandatory for all FMGs",
            "USMLE Steps 1, 2 CK, and 2 CS passed (Step 3 typically required by residency or after — varies by state)",
            "Medical degree verified by ECFMG (FCVS — Federation Credentials Verification Service)",
            "Sworn translation of diploma and Brazilian CRM transcript",
            "For Physician NIW: valid job offer in designated HPSA/MUA (letter from hospital, federal clinic, VA, or community network)",
            "English proficiency demonstration — required for subsequent state licensing",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Subspecialties that approve most consistently under Dhanasar NIW",
          intro: "Areas with documented federal shortage or high public-health importance:",
          style: "check",
          items: [
            "Psychiatry and mental health (severe federal shortage post-2020)",
            "Oncology (all subspecialties)",
            "Interventional cardiology and electrophysiology",
            "Infectious diseases (especially post-COVID, public-health focus)",
            "Geriatrics (US population aging)",
            "Healthcare AI / medical informatics research (intersection with federal AI priority)",
            "Public health and epidemiology (research PhD profiles)",
            "Pediatric subspecialties (cardio-peds, onco-peds, neonatology)",
            "Critical-care anesthesiology",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          badgeLabel: "Integrated path",
          tone: "gold",
          heading: "Newly USMLE-passed Brazilian physician — full sequence",
          body: "For Brazilian physicians still doing USMLE in Brazil or in US residency on J-1, the typical sequence is: (1) Complete USMLE + ECFMG · (2) Match into residency (J-1 visa scholar via ECFMG) · (3) Complete residency (3–7 years) · (4) J-1 waiver via Conrad 30 or Physician NIW · (5) EB-2 NIW for permanent green card. Physician NIW can replace traditional J-1 waiver in many cases.",
          recLabel: "If you're on J-1",
          rec: "Physicians on J-1 residency face the 'two-year home residency requirement' (212(e)). Physician NIW is frequently used as alternative J-1 waiver via Conrad 30 or interested-agency waiver — eliminating the need to return to Brazil for 2 years.",
          liveLink: { label: "Discuss your medical case", href: "/consultation" },
        },
      },
    ],
    faqTitle: "Frequently Asked Questions — EB-2 NIW for Doctors",
    faq: [
      {
        q: "Does a Brazilian physician need US residency before EB-2 NIW?",
        a: "Not strictly required. If the Brazilian clinical/research track record is enough to close the Dhanasar 3-prong, EB-2 NIW can be filed without US residency. In practice, physicians without US residency face more difficulty with state licensing — but the green card itself does not require local residency.",
      },
      {
        q: "Can I file EB-2 NIW while on J-1 (residency)?",
        a: "Yes, with nuance. J-1 with 'two-year home residency requirement' (INA §212(e)) blocks I-485 until you complete 2 years in Brazil or obtain a waiver. Physician NIW can serve as the waiver. Conrad 30 (state-based J-1 waiver) is also a common alternative. We assess the joint strategy.",
      },
      {
        q: "Does Physician NIW require 5 years at a single clinic?",
        a: "No — it requires 5 years cumulative practice in a qualified designated area (HPSA, MUA, or VA). It can be split across institutions, as long as each is in a designated area. Moving outside designated area invalidates the commitment and can lead to I-485 denial.",
      },
      {
        q: "Does a Brazilian public-health researcher (PhD, no MD) qualify for EB-2 NIW?",
        a: "Yes, frequently. Researchers in epidemiology, applied molecular biology, biotech, or healthcare AI qualify via Dhanasar NIW. They do not use Physician NIW (which is specific to physicians treating patients), but they approve consistently under the general framework. Public health is a documented federal priority.",
      },
      {
        q: "Can a specialized nurse (Nurse Practitioner, CRNA) file EB-2 NIW?",
        a: "In specific cases, yes. NPs and CRNAs with master's/DNP + substantial experience + impact track record (research, papers, training) can qualify. Nurses without a master's typically pursue EB-3 (Schedule A — federal shortage) instead of EB-2 NIW. We assess profile by profile.",
      },
      {
        q: "How long does EB-2 NIW take for a Brazilian physician in 2026?",
        a: "With Premium Processing: I-140 approved in 45 business days. For physicians already in the US in valid status (J-1 with waiver, H-1B, O-1), concurrent I-485 takes another 6–14 months. For consular processing in Brazil: 12–18 months additional after I-140. Brazil CURRENT in EB-2 — no extra queue.",
      },
    ],
    relatedTitle: "See also",
    related: [
      { label: "EB-2 NIW — Full overview", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-2 NIW for tech professionals", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
      { label: "EB-2 NIW vs EB-1A — which to pick", href: "/immigration/immigrant-visas/eb-2-niw/vs-eb-1a" },
      { label: "EB-1B — Outstanding Researcher (PhD alternative)", href: "/immigration/immigrant-visas/eb-1" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "EB-2 NIW para Médicos",
    eyebrow: "EB-2 NIW · Vertical: Healthcare",
    h1: "EB-2 NIW para Médicos y Profesionales de Salud Brasileños",
    lede:
      "Médicos brasileños (CRM activo), enfermeros especialistas, investigadores en salud pública. Healthcare es prioridad federal — la ruta más favorable de EB-2 NIW.",
    stats: [
      { value: "80–90%", label: "Aprobación con counsel" },
      { value: "CURRENT", label: "Brasil 2026" },
      { value: "Physician NIW", label: "Estatuto especial" },
      { value: "USMLE/ECFMG", label: "Prerrequisitos" },
    ],
    meta: {
      title: "EB-2 NIW para Médicos Brasileños 2026 | Pinho Law",
      description: "Médicos brasileños: cómo obtener green card vía EB-2 NIW. Physician NIW.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Dos rutas EB-2 NIW para healthcare",
        body: "Profesionales de salud brasileños tienen dos vías: (1) Physician NIW estatutario — INA §203(b)(2)(B)(ii) — para médicos comprometidos con 5 años en área desatendida; y (2) NIW general vía Dhanasar 3-prong, para perfiles de investigación o subspecialty crítica.",
      },
      {
        kind: "list",
        value: {
          heading: "Subspecialties más aprobadas en NIW Dhanasar",
          style: "check",
          items: [
            "Psiquiatría y salud mental",
            "Oncología",
            "Cardiología intervencionista",
            "Enfermedades infecciosas",
            "Geriatría",
            "Healthcare AI / informática médica",
            "Salud pública y epidemiología",
          ],
        },
      },
    ],
    faqTitle: "Preguntas Frecuentes — EB-2 NIW para Médicos",
    faq: [
      {
        q: "¿Médico brasileño necesita residencia en EE.UU. antes del EB-2 NIW?",
        a: "No obligatoriamente. Si el historial clínico/de investigación en Brasil es suficiente para Dhanasar 3-prong, EB-2 NIW puede ser presentado sin residencia americana.",
      },
      {
        q: "¿Puedo hacer EB-2 NIW estando en J-1?",
        a: "Sí, con matiz. J-1 con 'two-year home residency requirement' bloquea I-485 hasta cumplir 2 años en Brasil u obtener waiver. Physician NIW puede servir como waiver.",
      },
    ],
    relatedTitle: "Ver también",
    related: [
      { label: "EB-2 NIW — Visión general", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-2 NIW para Tech", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
      { label: "EB-2 NIW vs EB-1A", href: "/immigration/immigrant-visas/eb-2-niw/vs-eb-1a" },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: `/${SLUG}`,
    locale: locale as Locale,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageTemplate content={DATA[locale as L]} />;
}
