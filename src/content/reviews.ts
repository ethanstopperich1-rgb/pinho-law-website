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
  lang: ReviewLang;
  body: string;
  /** Optional practice-area tag. */
  tag?: "immigration" | "business" | "citizenship" | "family";
}

export const REVIEW_STATS = {
  average: 5.0,
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
  },
  {
    author: "Tommy Armitage",
    rating: 5,
    monthsAgo: 5,
    lang: "en",
    tag: "immigration",
    body: "You only get one good chance with our government system to get the process started on the right track. I am a partially disabled veteran machine gunner of the USMC. I don't understand the process required for my wife, which is why we hired Pinho Law — and we're grateful we did.",
  },
  {
    author: "Patricia Soares",
    rating: 5,
    monthsAgo: 6,
    lang: "en",
    tag: "immigration",
    body: "Dr Izi thank you for your support on my immigration case. Your professionalism made all the difference, and I'm truly grateful for the time and effort you invested in helping me achieve my dream.",
  },
  {
    author: "Cintia Schneider de Menezes",
    rating: 5,
    monthsAgo: 9,
    lang: "en",
    tag: "immigration",
    body: "I would like to express my sincere gratitude to Dr. Izi Pinho, who leads the team at Pinho Law. From the very first contact, I felt supported, well-guided, and confident in her expertise.",
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
  },
  {
    author: "Rubem Souza",
    rating: 5,
    monthsAgo: 9,
    lang: "en",
    tag: "business",
    body: "Izi is a wonderful trustworthy person. As an immigration and corporate lawyer, she has great expertise and knowledge to go over very important details to be successful!",
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
  },
  {
    author: "Luciana Loiola",
    rating: 5,
    monthsAgo: 12,
    lang: "en",
    tag: "immigration",
    body: "I'm very grateful for Alessandra Thomas' work on my case. Dr. Izi Pinho and her team are very competent, and being able to speak in our Portuguese language is always good.",
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
  },
  {
    author: "Melqui Martins",
    rating: 5,
    monthsAgo: 60,
    lang: "en",
    tag: "citizenship",
    body: "Highly recommend Izi Pinho and their staff. They are very knowledgeable, passionate, and show real dedication and commitment to help immigrants. I wouldn't choose any other. Thank you for everything you've done for me during my journey to becoming an American citizen.",
  },
  {
    author: "Nina Cavalcante",
    rating: 5,
    monthsAgo: 60,
    lang: "en",
    tag: "business",
    body: "Very professional and responsive team. I do all my business contracts with Pinho Law Firm. I also did my husband's immigration process with them. Highly recommended.",
  },
  {
    author: "Tatiana Kappel",
    rating: 5,
    monthsAgo: 60,
    lang: "en",
    tag: "immigration",
    body: "I had a great experience with Izi Pinho. I used her services for business and also immigration, and both cases were successful. I definitely recommend her office — everybody is very helpful.",
  },
  {
    author: "Marcio Fonseca",
    rating: 5,
    monthsAgo: 12,
    lang: "pt",
    tag: "immigration",
    body: "We've lived here in Orlando for 7 years, and my only regret is not having known Pinho Law sooner. Everything would have been much easier. Today, I know what a high-standard professional like Pinho means: high-quality immigration consulting.",
  },
];
