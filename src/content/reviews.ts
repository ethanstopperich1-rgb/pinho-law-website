// Curated Google reviews for Pinho Law. Source: reviews.google.com
// for Pinho Law Advocacia Empresarial e Imigração (Orlando, FL),
// captured April 2026. Real public reviews — trimmed to those that
// are substantive (not one-liners), verified, and broadly
// representative of the firm's practice areas.

export type ReviewLang = "en" | "pt";

export interface PinhoReview {
  author: string;
  rating: number;
  monthsAgo: number;
  /** Original language as posted on Google. */
  lang: ReviewLang;
  /** Original review text, as posted. */
  body: string;
  /** Portuguese translation (used when displaying on /pt). */
  bodyPt?: string;
  /** Spanish translation (used when displaying on /es). */
  bodyEs?: string;
  /** Optional practice-area tag. */
  tag?: "immigration" | "business" | "citizenship" | "family";
}

export const REVIEW_STATS = {
  average: 4.6,
  count: 111,
  source: "Google Places",
} as const;

// 24 curated substantive reviews spanning 6 years, immigration + business,
// EN + PT. Ordered most-recent first.
export const REVIEWS: readonly PinhoReview[] = [
  {
    author: "Myosoty Perez",
    rating: 5,
    monthsAgo: 1,
    lang: "en",
    tag: "immigration",
    body: "We're extremely happy and grateful with the services provided at this office! Dr. Pinho and Mrs. Nielsen took time out of their busy schedule to provide helpful advice and information pertinent to our case. Very professional and everyone made us feel welcomed from the very beginning. Highly recommended!",
    bodyPt: "Estamos extremamente felizes e gratos pelos serviços deste escritório! Dra. Pinho e a Sra. Nielsen tiraram tempo de sua agenda corrida para dar conselhos e informações pertinentes ao nosso caso. Muito profissionais — toda a equipe nos fez sentir acolhidos desde o início. Recomendo muito!",
  },
  {
    author: "Caroline Martins",
    rating: 5,
    monthsAgo: 4,
    lang: "pt",
    tag: "immigration",
    body: "Dra. Izi was sent by God. Super dedicated and efficient. I recommend her without hesitation. She was my 'light at the end of the tunnel.'",
  },
  {
    author: "Eduardo Goncalves",
    rating: 5,
    monthsAgo: 5,
    lang: "en",
    body: "I couldn't be happier with the service I received! The team was incredibly helpful, professional, and patient, taking the time to explain everything clearly. They truly care about their clients and go above and beyond to make sure you're well taken care of. I highly recommend them. Honest people, great communication, and excellent customer service!",
    bodyPt: "Não poderia estar mais satisfeito com o atendimento! A equipe foi incrivelmente prestativa, profissional e paciente, tirando tempo para explicar tudo com clareza. Eles realmente se importam com os clientes e vão além para garantir que você seja bem atendido. Recomendo muito. Pessoas honestas, ótima comunicação e atendimento excelente!",
  },
  {
    author: "Tommy Armitage",
    rating: 5,
    monthsAgo: 5,
    lang: "en",
    tag: "immigration",
    body: "You only get one good chance with our government system to get the process started on the right track. I am a partially disabled veteran machine gunner of the USMC. I don't understand the process required for my wife, which is why we hired Pinho Law — and we're grateful we did.",
    bodyPt: "Você só tem uma boa chance no nosso sistema governamental para começar o processo pelo caminho certo. Sou veterano parcialmente incapacitado, atirador de metralhadora da USMC. Não entendo o processo exigido para minha esposa — por isso contratamos a Pinho Law. E estamos gratos por termos feito essa escolha.",
  },
  {
    author: "Patricia Soares",
    rating: 5,
    monthsAgo: 6,
    lang: "en",
    tag: "immigration",
    body: "Dr Izi thank you for your support on my immigration case. Your professionalism made all the difference, and I'm truly grateful for the time and effort you invested in helping me achieve my dream.",
    bodyPt: "Dra. Izi, obrigada pelo seu apoio no meu caso de imigração. Seu profissionalismo fez toda a diferença — sou muito grata pelo tempo e esforço investidos em me ajudar a realizar meu sonho.",
  },
  {
    author: "Cintia Schneider de Menezes",
    rating: 5,
    monthsAgo: 9,
    lang: "en",
    tag: "immigration",
    body: "I would like to express my sincere gratitude to Dr. Izi Pinho, who leads the team at Pinho Law. From the very first contact, I felt supported, well-guided, and confident in her expertise.",
    bodyPt: "Gostaria de expressar minha sincera gratidão à Dra. Izi Pinho, que lidera a equipe da Pinho Law. Desde o primeiro contato, me senti apoiada, bem orientada e confiante na sua expertise.",
  },
  {
    author: "Rosi Alves",
    rating: 5,
    monthsAgo: 5,
    lang: "pt",
    body: "The service at this law firm is extraordinary. Whenever I need help, the service is quick and the answers are clear. I have nothing to complain about. Congratulations to all.",
  },
  {
    author: "Gerard Ciobanu",
    rating: 5,
    monthsAgo: 10,
    lang: "en",
    tag: "immigration",
    body: "The best immigration lawyer in the country — I did my mother's residency with them. The green card came very fast. Izi is very professional.",
    bodyPt: "A melhor advogada de imigração do país — fiz a residência da minha mãe com eles. O green card saiu muito rápido. A Izi é muito profissional.",
  },
  {
    author: "Rubem Souza",
    rating: 5,
    monthsAgo: 9,
    lang: "en",
    tag: "business",
    body: "Izi is a wonderful trustworthy person. As an immigration and corporate lawyer, she has great expertise and knowledge to go over very important details to be successful!",
    bodyPt: "A Izi é uma pessoa maravilhosa e confiável. Como advogada de imigração e direito empresarial, tem grande expertise e conhecimento para examinar detalhes muito importantes — é isso que leva ao sucesso!",
  },
  {
    author: "iMyllena Cristyna",
    rating: 5,
    monthsAgo: 5,
    lang: "pt",
    tag: "immigration",
    body: "They are wonderful! Excellent price and incredible work! Thomaz is sensational (he's been helping me)! I'm already going to miss them when my case is finalized. I highly recommend them!",
  },
  {
    author: "Priscila Spata",
    rating: 5,
    monthsAgo: 5,
    lang: "pt",
    body: "A welcoming and unique office. Augusto's service was very informative. Thank you for all your attention so far.",
  },
  {
    author: "Celio Montenegro",
    rating: 5,
    monthsAgo: 6,
    lang: "pt",
    tag: "immigration",
    body: "I spoke with Dr. Izi Pinho and received a welcoming, humane, kind, and determined response to my case. The service was excellent, with care, spontaneity, and attention that made me know I was (and am) in good hands.",
  },
  {
    author: "Antonio Leuzzi",
    rating: 5,
    monthsAgo: 5,
    lang: "en",
    tag: "immigration",
    body: "Outstanding service and personnel! Everything I needed, any question I had from the beginning until I got my green card — they were there for me! I always refer them to friends!",
    bodyPt: "Atendimento e equipe excepcionais! Tudo que precisei, qualquer dúvida que tive desde o início até receber meu green card — estiveram sempre presentes. Recomendo para amigos o tempo todo!",
  },
  {
    author: "Luciana Loiola",
    rating: 5,
    monthsAgo: 12,
    lang: "en",
    tag: "immigration",
    body: "I'm very grateful for Alessandra Thomas' work on my case. Dr. Izi Pinho and her team are very competent, and being able to speak in our Portuguese language is always good.",
    bodyPt: "Sou muito grata pelo trabalho da Alessandra Thomas no meu caso. A Dra. Izi Pinho e sua equipe são muito competentes, e poder conversar em português é sempre bom.",
  },
  {
    author: "Fernanda Sueishi",
    rating: 5,
    monthsAgo: 24,
    lang: "pt",
    tag: "immigration",
    body: "I am so happy for all the support my family and I received from the entire Pinho Law team! After an RFE (Request for Evidence) and almost having our dream interrupted, Pinho Law, with all its professionalism and transparency, took our case and in less than 30 days we had our visa approved! Immense gratitude!",
  },
  {
    author: "Glaucia Gitti",
    rating: 5,
    monthsAgo: 48,
    lang: "pt",
    tag: "immigration",
    body: "Initially, the EB2-NIW process was handled by another firm. After 2 years and 6 months, we received an RFE, and unfortunately the officer denied our I-140. In that moment of despair, Pinho Law took our case — and reversed the decision with a positive outcome. It was an honor to work with them.",
  },
  {
    author: "Cassio",
    rating: 5,
    monthsAgo: 48,
    lang: "pt",
    tag: "immigration",
    body: "I spent 2 months selecting the firm that would handle my immigration case to the United States. I spoke with a dozen firms, and by far Pinho Law was the one that gave me the most confidence, seriousness, and competence. My EB2 process was approved.",
  },
  {
    author: "Mayra Freitas",
    rating: 5,
    monthsAgo: 24,
    lang: "pt",
    tag: "immigration",
    body: "Best office for changing my immigration status! My application and approval were completed in 4 months. Melqui provided incredible assistance — very efficient, accurate, and easy to work with! Fair price and impeccable work. There wasn't even any questioning from immigration! I highly recommend them!",
  },
  {
    author: "Igor Machado",
    rating: 5,
    monthsAgo: 24,
    lang: "pt",
    tag: "family",
    body: "My wife is American and we found Pinho Law for my adjustment of status process. Melqui helped us a lot, along with Dr. Izi, always giving us the right guidance throughout the whole process.",
  },
  {
    author: "Rubens Lacerda",
    rating: 5,
    monthsAgo: 48,
    lang: "pt",
    tag: "business",
    body: "Pinho Law is a great company with the best professionals. Always sends all details and information that we need. All staff are so polite!",
  },
  {
    author: "ALL GREAT FLOORING",
    rating: 5,
    monthsAgo: 60,
    lang: "en",
    tag: "business",
    body: "An amazing law firm with professionalism and great people. Helped me open my company — we love Pinho Law.",
    bodyPt: "Um escritório incrível, com profissionalismo e pessoas ótimas. Ajudaram a abrir minha empresa — amamos a Pinho Law.",
  },
  {
    author: "Melqui Martins",
    rating: 5,
    monthsAgo: 60,
    lang: "en",
    tag: "citizenship",
    body: "Highly recommend Izi Pinho and their staff. They are very knowledgeable, passionate, and show real dedication and commitment to help immigrants. I wouldn't choose any other. Thank you for everything you've done for me during my journey to becoming an American citizen.",
    bodyPt: "Recomendo muito a Izi Pinho e sua equipe. São extremamente conhecedores, apaixonados, e demonstram real dedicação e compromisso em ajudar imigrantes. Não escolheria nenhum outro. Obrigado por tudo que fizeram por mim na minha jornada até me tornar cidadão americano.",
  },
  {
    author: "Nina Cavalcante",
    rating: 5,
    monthsAgo: 60,
    lang: "en",
    tag: "business",
    body: "Very professional and responsive team. I do all my business contracts with Pinho Law Firm. I also did my husband's immigration process with them. Highly recommended.",
    bodyPt: "Equipe muito profissional e ágil. Faço todos os meus contratos empresariais com a Pinho Law. Também fiz o processo de imigração do meu marido com eles. Recomendo muito.",
  },
  {
    author: "Tatiana Kappel",
    rating: 5,
    monthsAgo: 60,
    lang: "en",
    tag: "immigration",
    body: "I had a great experience with Izi Pinho. I used her services for business and also immigration, and both cases were successful. I definitely recommend her office — everybody is very helpful.",
    bodyPt: "Tive uma ótima experiência com a Izi Pinho. Usei os serviços dela tanto para direito empresarial quanto para imigração — e ambos os casos foram bem-sucedidos. Recomendo o escritório dela com certeza; todo mundo é muito prestativo.",
  },
  {
    author: "Marcio Fonseca",
    rating: 5,
    monthsAgo: 12,
    lang: "pt",
    tag: "immigration",
    body: "We've lived here in Orlando for 7 years, and my only regret is not having known Pinho Law sooner. Everything would have been much easier. Today, I know what a high-standard professional like Pinho means: high-quality immigration consulting.",
  },
  // Legacy testimonials migrated from pinholaw.com (per May 2026 PLwebsite
  // audit, Block 2.13 Step 1). These appeared on the old site but did not
  // carry over to the rebuild — restoring them preserves social proof.
  {
    author: "Jully Lima",
    rating: 5,
    monthsAgo: 24,
    lang: "pt",
    tag: "immigration",
    body: "I had a great experience with the firm. I applied for a change of status to a student visa and received approval in 5 months. Melqui was attentive and resolved every question before and during the process. Extremely satisfied and grateful.",
    bodyPt: "Tive uma ótima experiência com o escritório. Apliquei para mudança de status para visto de estudante e recebi aprovação em 5 meses. Melqui foi atencioso e tirou todas as minhas dúvidas antes e durante o processo. Extremamente satisfeita e grata.",
  },
  {
    author: "Letícia Marques",
    rating: 5,
    monthsAgo: 24,
    lang: "pt",
    tag: "immigration",
    body: "Highly recommend! Very caring team, always available to answer every question. Extremely satisfied with my process from start to finish. Special thanks to Melqui, Greg, and Karina who always helped me and were patient with all my questions.",
    bodyPt: "Recomendo muito! Equipe muito atenciosa, sempre disponível para responder a todas as perguntas. Extremamente satisfeita com meu processo do começo ao fim. Agradecimento especial ao Melqui, Greg e Karina, que sempre me ajudaram e foram pacientes com todas as minhas dúvidas.",
  },
  {
    author: "Renan Rampinelli",
    rating: 5,
    monthsAgo: 24,
    lang: "pt",
    tag: "immigration",
    body: "Great experience with the team, especially with Melqui. Everyone was very attentive and left me with zero doubts about my process. Highly recommended!",
    bodyPt: "Ótima experiência com a equipe, especialmente com Melqui. Todos foram muito atenciosos e me deixaram sem nenhuma dúvida sobre o processo. Recomendo muito!",
  },
  {
    author: "Naiara Filgueiras",
    rating: 5,
    monthsAgo: 24,
    lang: "pt",
    tag: "immigration",
    body: "Attentive professionals — Melqui and Gabriel gave me all the support I needed. The human touch in the service made all the difference when I had to make my decision.",
    bodyPt: "Profissionais atenciosos — Melqui e Gabriel me deram todo o suporte que precisei. O toque humano no atendimento fez toda a diferença na hora de tomar minha decisão.",
  },
  {
    author: "Carla Letícia Nieves",
    rating: 5,
    monthsAgo: 24,
    lang: "en",
    tag: "business",
    body: "Excellent experience with the Pinho Law team. From the very first moment, clear answers, good communication, and a favorable final result. I highly recommend them. Congratulations to the team and their professionalism.",
    bodyPt: "Excelente experiência com a equipe da Pinho Law. Desde o primeiro momento, respostas claras, boa comunicação e um resultado final favorável. Recomendo demais! Parabéns à equipe e à sua profissionalidade.",
  },
];
