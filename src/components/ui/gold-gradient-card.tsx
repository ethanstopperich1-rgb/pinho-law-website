"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

// Premium hover-gradient card in Pinho's cream/gold palette.
// Inspiration: 21st.dev's hover-border-gradient concept, rebuilt
// for a light editorial surface (our primary style) instead of dark.
// The border tracks mouse movement with a faint gold glow; on hover,
// a soft inner halo fades in behind the content.

export function GoldGradientCard({
  children,
  className,
  as: Element = "div",
  href,
  beam = true,
  beamDuration = 22,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  href?: string;
  /** Show the animated BorderBeam (21st.dev) traveling edge. Default true. */
  beam?: boolean;
  /** BorderBeam traversal duration in seconds. Default 22 (slow, calm). */
  beamDuration?: number;
}) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  // Stagger the beam across multiple cards so they don't all tick in
  // lockstep. Random delay per instance, pinned on first render.
  const [beamDelay] = useState(() => Math.random() * beamDuration);

  const handleMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const content = (
    <Element
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-xl md:p-8",
        className,
      )}
      style={
        {
          "--mx": `${pos.x}%`,
          "--my": `${pos.y}%`,
        } as React.CSSProperties
      }
    >
      {/* Mouse-tracked gold halo — visible only on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx) var(--my), rgba(184,148,79,0.12), transparent 60%)",
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
      />
      {/* Subtle top-edge gold accent on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {/* 21st.dev BorderBeam — traveling gold→cream edge, default on */}
      {beam && (
        <BorderBeam
          size={180}
          duration={beamDuration}
          delay={beamDelay}
          colorFrom="#C9A961"
          colorTo="#F5F1E8"
        />
      )}
      <div className="relative z-10">{children}</div>
    </Element>
  );

  if (href) {
    return (
      <a href={href} className="block focus:outline-none">
        {content}
      </a>
    );
  }
  return content;
}
