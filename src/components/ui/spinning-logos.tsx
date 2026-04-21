"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { REVIEWS, REVIEW_STATS } from "@/content/reviews";

// 21st.dev spinning-logos adapted to Pinho Law: the orbit shows real
// client initials pulled from our curated Google review pool, and the
// center badge shows the firm's Google rating. Slow clockwise spin on
// the ring; counter-rotating each chip keeps initials upright.

export interface SpinningLogosProps {
  className?: string;
  /** Number of initials to orbit. Default 9 for good spacing. */
  count?: number;
  /** Orbit radius in pixels. Default 180. Responsive scale below. */
  radius?: number;
  /** Icon wrapper diameter. Default 56. */
  iconSize?: number;
  /** Outer ring padding. Default 40. */
  ringPadding?: number;
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");

export const SpinningLogos: React.FC<SpinningLogosProps> = ({
  className,
  count = 9,
  radius = 180,
  iconSize = 56,
  ringPadding = 40,
}) => {
  const toRadians = (d: number) => (Math.PI / 180) * d;
  const chips = REVIEWS.slice(0, count).map((r) => ({
    label: initials(r.author),
    full: r.author,
  }));

  const dim = radius * 2 + iconSize + ringPadding;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div
        style={{ width: dim, height: dim }}
        className="relative rounded-full border border-[#C9A961]/30 bg-gradient-to-br from-[#C9A961]/5 to-transparent shadow-[0_20px_60px_-20px_rgba(201,169,97,0.3)]"
      >
        {/* Rotating ring with orbiting initial chips */}
        <div className="absolute inset-0 animate-spin-slow">
          {chips.map((chip, index) => {
            const angle = (360 / chips.length) * index;
            return (
              <div
                key={`${chip.full}-${index}`}
                style={{
                  top: `calc(50% - ${iconSize / 2}px + ${radius * Math.sin(toRadians(angle))}px)`,
                  left: `calc(50% - ${iconSize / 2}px + ${radius * Math.cos(toRadians(angle))}px)`,
                  width: iconSize,
                  height: iconSize,
                }}
                className="absolute flex animate-spin-reverse items-center justify-center rounded-full border-2 border-white bg-[#C9A961] text-[#0E1B2E] shadow-lg"
                aria-label={`Pinho Law client ${chip.full}`}
                title={chip.full}
              >
                <span className="font-heading text-sm font-semibold">
                  {chip.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Center trust badge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-3/5 w-3/5 flex-col items-center justify-center rounded-full border-4 border-[#C9A961]/30 bg-[#0E1B2E] shadow-inner">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4 md:h-5 md:w-5",
                    i < Math.round(REVIEW_STATS.average)
                      ? "fill-[#C9A961] text-[#C9A961]"
                      : "text-[#C9A961]/40",
                  )}
                />
              ))}
            </div>
            <div className="mt-2 font-heading text-3xl font-semibold text-[#C9A961] md:text-4xl">
              {REVIEW_STATS.average.toFixed(1)}
            </div>
            <div className="mt-0.5 text-center text-xs font-medium uppercase tracking-wider text-white/70 md:text-sm">
              {REVIEW_STATS.count} Google Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
