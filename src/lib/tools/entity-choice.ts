// LLC-vs-Corp Decision Tool — scores LLC / S-Corp / C-Corp / B-Corp
// against the user's inputs and returns a ranked recommendation.
// Focused on Brazilian founders setting up a FL entity. Tax assumptions
// reflect 2026 IRS rules (21% federal corporate, SE tax 15.3% on first
// $168,600 2024 base, adjusted). Not tax advice.

export type EntityType = "LLC" | "S-Corp" | "C-Corp" | "B-Corp";

export type OwnerStatus = "usc_lpr" | "nonresident" | "mixed";
export type CapitalNeed = "bootstrap" | "angel_seed" | "vc_scale";
export type IncomeTier = "under_100k" | "100k_250k" | "250k_1m" | "over_1m";
export type OwnerCount = "solo" | "2_5" | "6_plus";

export interface EntityChoiceInput {
  ownerStatus: OwnerStatus;
  capitalNeed: CapitalNeed;
  incomeTier: IncomeTier;
  ownerCount: OwnerCount;
  /** Mission-driven business (public benefit purpose)? */
  missionDriven: boolean;
  /** Plan to raise priced equity / VC rounds? */
  plansVcRaise: boolean;
  /** Hold appreciating real estate or IP? */
  holdsAppreciatingAssets: boolean;
}

interface EntityScore {
  entity: EntityType;
  score: number;
  pros: { pt: string[]; en: string[]; es: string[] };
  cons: { pt: string[]; en: string[]; es: string[] };
}

export interface EntityChoiceResult {
  ranked: EntityScore[];
  top: EntityType;
  blockers: { pt: string[]; en: string[]; es: string[] };
}

function addPro(s: EntityScore, pt: string, en: string, es: string) {
  s.pros.pt.push(pt);
  s.pros.en.push(en);
  s.pros.es.push(es);
}

function addCon(s: EntityScore, pt: string, en: string, es: string) {
  s.cons.pt.push(pt);
  s.cons.en.push(en);
  s.cons.es.push(es);
}

export function computeEntityChoice(input: EntityChoiceInput): EntityChoiceResult {
  const scores: Record<EntityType, EntityScore> = {
    LLC: empty("LLC"),
    "S-Corp": empty("S-Corp"),
    "C-Corp": empty("C-Corp"),
    "B-Corp": empty("B-Corp"),
  };

  const blockers = { pt: [] as string[], en: [] as string[], es: [] as string[] };

  // --- HARD BLOCKERS ---
  if (input.ownerStatus !== "usc_lpr") {
    scores["S-Corp"].score -= 100;
    addCon(
      scores["S-Corp"],
      "BLOQUEIO: S-Corp exige que TODOS os sócios sejam USC ou LPR. Proprietário não-residente = inelegível.",
      "BLOCKER: S-Corp requires ALL owners be USC or LPR. Non-resident owner = ineligible.",
      "BLOQUEADO: S-Corp requiere que todos los socios sean USC o LPR.",
    );
    blockers.pt.push("S-Corp não é opção enquanto houver sócio não-residente.");
    blockers.en.push("S-Corp is not available while any owner is non-resident.");
    blockers.es.push("S-Corp no es opción con socios no residentes.");
  }

  // --- LLC SCORING ---
  addPro(
    scores.LLC,
    "Flexibilidade máxima — 1 ou mais sócios, qualquer status migratório, pass-through por default.",
    "Maximum flexibility — 1+ owners, any immigration status, pass-through by default.",
    "Máxima flexibilidad — 1+ socios, cualquier estatus.",
  );
  addPro(
    scores.LLC,
    "Sem dupla tributação. Lucros passam direto para o IRS Form dos sócios.",
    "No double taxation. Profits flow to owners' IRS forms.",
    "Sin doble tributación.",
  );
  if (input.ownerStatus === "nonresident") {
    scores.LLC.score += 20;
    addPro(
      scores.LLC,
      "Para brasileiro não-residente: LLC single-member é a estrutura mais simples. Atenção ao Form 5472.",
      "For Brazilian non-resident: single-member LLC is the cleanest structure. Watch Form 5472 filing.",
      "Para brasileño no residente: LLC single-member es la estructura más simple.",
    );
  }
  if (input.plansVcRaise) {
    scores.LLC.score -= 15;
    addCon(
      scores.LLC,
      "VCs institucionais raramente investem em LLC. Se for levantar Série A+, C-Corp é praticamente obrigatória.",
      "Institutional VCs rarely invest in LLCs. Series A+ effectively requires C-Corp conversion.",
      "VCs institucionales raramente invierten en LLC.",
    );
  }
  if (input.holdsAppreciatingAssets) {
    scores.LLC.score += 15;
    addPro(
      scores.LLC,
      "LLC é ideal para imóveis e IP — sem dupla tributação na venda + step-up basis na sucessão.",
      "LLC ideal for real estate and IP — no double tax on sale + step-up basis at death.",
      "LLC ideal para inmuebles e IP.",
    );
  }
  if (input.ownerCount === "solo") {
    scores.LLC.score += 10;
  }

  // --- S-CORP SCORING ---
  if (input.ownerStatus === "usc_lpr") {
    addPro(
      scores["S-Corp"],
      "Economia SE tax: salário razoável + distribuições. Pode economizar 10–15% em imposto sobre serviços.",
      "SE tax savings: reasonable salary + distributions. Can save 10–15% on service-income tax.",
      "Ahorro SE tax: salario razonable + distribuciones.",
    );
    if (input.incomeTier === "250k_1m" || input.incomeTier === "100k_250k") {
      scores["S-Corp"].score += 25;
    }
    if (input.incomeTier === "under_100k") {
      scores["S-Corp"].score -= 5;
      addCon(
        scores["S-Corp"],
        "Abaixo de $100K, burocracia extra (folha, 1120-S) frequentemente anula o ganho SE tax.",
        "Under $100K, payroll + 1120-S overhead often cancels SE tax savings.",
        "Bajo $100K, overhead cancela ahorros.",
      );
    }
    if (input.plansVcRaise) {
      scores["S-Corp"].score -= 30;
      addCon(
        scores["S-Corp"],
        "S-Corp proíbe sócios estrangeiros, múltiplas classes de ações e holdings — incompatível com rodadas.",
        "S-Corp prohibits foreign owners, multiple stock classes, and holdings — incompatible with rounds.",
        "S-Corp prohíbe socios extranjeros y múltiples clases.",
      );
    }
    if (input.ownerCount === "6_plus") {
      scores["S-Corp"].score -= 5;
    }
  }

  // --- C-CORP SCORING ---
  addPro(
    scores["C-Corp"],
    "Estrutura padrão para VCs. Permite sócios estrangeiros, múltiplas classes, pool de opções, conversões.",
    "VC standard. Allows foreign owners, multiple stock classes, option pools, conversions.",
    "Estándar para VCs.",
  );
  if (input.plansVcRaise) {
    scores["C-Corp"].score += 40;
  }
  if (input.capitalNeed === "vc_scale") {
    scores["C-Corp"].score += 25;
  }
  if (input.capitalNeed === "angel_seed") {
    scores["C-Corp"].score += 10;
  }
  if (input.capitalNeed === "bootstrap" && !input.plansVcRaise) {
    scores["C-Corp"].score -= 15;
    addCon(
      scores["C-Corp"],
      "Dupla tributação: 21% corporate + dividend tax no sócio. Desvantagem se bootstrap e paga dividendos.",
      "Double taxation: 21% corporate + dividend tax on owner. Disadvantage if bootstrapping and paying dividends.",
      "Doble tributación: 21% + dividend.",
    );
  }
  if (input.ownerStatus === "nonresident" && input.plansVcRaise) {
    addPro(
      scores["C-Corp"],
      "Delaware C-Corp é a estrutura obrigatória para founders brasileiros que pretendem levantar VC nos EUA.",
      "Delaware C-Corp is mandatory structure for Brazilian founders raising VC in the US.",
      "Delaware C-Corp obligatoria para raising VC.",
    );
  }
  addCon(
    scores["C-Corp"],
    "Mais burocracia: board, bylaws, minutes anuais, 1120 federal + state.",
    "More overhead: board, bylaws, annual minutes, Form 1120 federal + state.",
    "Más burocracia.",
  );

  // --- B-CORP SCORING ---
  if (input.missionDriven) {
    scores["B-Corp"].score += 40;
    addPro(
      scores["B-Corp"],
      "Public Benefit Corp (FL Statute §607.501+): protege a missão legalmente. Pinho Law é autoridade citada por Harvard neste tema.",
      "Public Benefit Corp (FL §607.501+): legally protects mission. Pinho Law is a Harvard-cited authority on this.",
      "Public Benefit Corp: protege misión legalmente.",
    );
  } else {
    scores["B-Corp"].score -= 20;
    addCon(
      scores["B-Corp"],
      "B-Corp só faz sentido se há missão pública legítima. Sem missão, é burocracia extra sem benefício.",
      "B-Corp only makes sense with legitimate public mission. Without it, it's just extra paperwork.",
      "B-Corp solo si hay misión pública.",
    );
  }
  if (input.plansVcRaise && input.missionDriven) {
    scores["B-Corp"].score += 10;
    addPro(
      scores["B-Corp"],
      "Impact VCs (ex: Emerald, DBL) preferem PBC. Compatível com fundraising quando a missão é central.",
      "Impact VCs (e.g., Emerald, DBL) prefer PBCs. Compatible with fundraising when mission is core.",
      "Impact VCs prefieren PBC.",
    );
  }

  // Rank
  const ranked = Object.values(scores).sort((a, b) => b.score - a.score);
  return {
    ranked,
    top: ranked[0].entity,
    blockers,
  };
}

function empty(e: EntityType): EntityScore {
  return {
    entity: e,
    score: 0,
    pros: { pt: [], en: [], es: [] },
    cons: { pt: [], en: [], es: [] },
  };
}
