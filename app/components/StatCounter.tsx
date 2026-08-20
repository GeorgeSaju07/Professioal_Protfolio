"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type StatCounterProps = {
  value: string;
  label: string;
};

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState("0");

  const numericMatch = value.match(/\d+/);
  const numeric = numericMatch ? parseInt(numericMatch[0], 10) : null;
  const suffix = numeric !== null ? value.replace(String(numeric), "") : "";

  useEffect(() => {
    if (!inView || numeric === null) {
      if (inView) setDisplay(value);
      return;
    }
    let frame = 0;
    const totalFrames = 30;
    const step = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setDisplay(String(Math.round(numeric * progress)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, numeric, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <p style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 500, color: "var(--parchment)", margin: 0 }}>
        {numeric !== null ? `${display}${suffix}` : value}
      </p>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", margin: "4px 0 0", textTransform: "uppercase" }}>
        {label}
      </p>
    </motion.div>
  );
}
