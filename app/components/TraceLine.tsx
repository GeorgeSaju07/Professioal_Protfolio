"use client";

import { motion, useReducedMotion } from "framer-motion";

type TraceLineProps = {
  color?: "signal" | "trace";
  peak?: boolean;
  className?: string;
};

/**
 * The signature chromatogram-trace spine used throughout the page.
 * A straight run with an optional "peak" bump, drawn on scroll-into-view.
 */
export default function TraceLine({
  color = "signal",
  peak = false,
  className = "",
}: TraceLineProps) {
  const stroke = color === "signal" ? "var(--signal)" : "var(--trace)";
  const reduceMotion = useReducedMotion();

  const path = peak
    ? "M20,0 L20,60 Q20,74 32,79 Q44,84 44,98 Q44,112 20,117 L20,200"
    : "M20,0 L20,200";

  return (
    <svg
      className={className}
      viewBox="0 0 44 200"
      preserveAspectRatio="none"
      style={{ position: "absolute", left: 0, top: 0, width: 40, height: "100%" }}
      aria-hidden="true"
    >
      <motion.path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </svg>
  );
}
