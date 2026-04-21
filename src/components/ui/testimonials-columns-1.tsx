"use client";

import React from "react";
import { motion } from "motion/react";

// 21st.dev testimonials-columns-1 adapted for Pinho Law. Keeps the
// infinite scrolling column animation, swaps the avatar <img> for an
// initials-based gold circle (our Google reviews do not ship avatars).

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  /** Optional image URL; falls back to initials circle when empty. */
  image?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 bg-cream pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, rep) => (
            <React.Fragment key={rep}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="w-full max-w-xs rounded-3xl border border-[#C9A961]/20 bg-white p-8 shadow-lg shadow-[#C9A961]/10 md:p-10"
                  key={`${rep}-${i}`}
                >
                  <div className="text-sm leading-relaxed text-ink md:text-base">
                    &ldquo;{text}&rdquo;
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    {image ? (
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A961] font-heading text-sm font-semibold text-[#0E1B2E]"
                      >
                        {name
                          .split(" ")
                          .slice(0, 2)
                          .map((p) => p[0]?.toUpperCase() ?? "")
                          .join("")}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div className="text-sm font-medium leading-5 tracking-tight text-ink">
                        {name}
                      </div>
                      <div className="text-xs leading-5 tracking-tight text-ink-muted opacity-80">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
