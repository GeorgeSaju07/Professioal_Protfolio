"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import StatCounter from "./StatCounter";

type HeroProps = {
  name: string;
  title: string;
  badge: string;
  tagline: string;
  stats: { number: string; label: string }[];
  photo: string;
  resumeHref: string;
  linkedinHref: string;
  githubHref: string;
};

export default function Hero({
  name,
  title,
  badge,
  tagline,
  stats,
  photo,
  resumeHref,
  linkedinHref,
  githubHref,
}: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      style={{
        position: "relative",
        maxWidth: 1100,
        margin: "0 auto",
        padding: "160px 40px 100px",
        display: "grid",
        gridTemplateColumns: "1.3fr 0.7fr",
        gap: 48,
        alignItems: "center",
      }}
      className="hero-grid"
    >
      {/* animated trace background */}
      <svg
        viewBox="0 0 1100 500"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.5 }}
      >
        <motion.path
          d="M0,420 L260,420 Q300,420 320,380 Q340,340 380,340 Q420,340 430,300 L460,180 Q470,140 510,140 L1100,140"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,300 L180,300 Q220,300 230,260 L250,120"
          fill="none"
          stroke="var(--trace)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={reduceMotion ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--signal)", letterSpacing: "0.06em", marginBottom: 18, textTransform: "uppercase" }}
        >
          {badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(38px, 5.5vw, 62px)", lineHeight: 1.05, color: "var(--parchment)", margin: "0 0 14px" }}
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontSize: 18, color: "var(--trace)", margin: "0 0 20px" }}
        >
          {title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", maxWidth: 560, margin: "0 0 32px" }}
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}
        >
          <a href={resumeHref} download className="btn-primary">Download resume</a>
          <a href={linkedinHref} target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
          <a href={githubHref} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: 32 }} className="stats-row">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.number} label={s.label} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ position: "relative", zIndex: 1, borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}
        className="hero-photo"
      >
        <Image src={photo} alt={`Portrait of ${name}`} width={420} height={520} style={{ width: "100%", height: "auto", display: "block" }} priority />
      </motion.div>

      <style>{`
        .btn-primary { font-family: var(--font-body); font-size: 14px; font-weight: 500; padding: 12px 22px; background: var(--signal); color: var(--ink); border-radius: 4px; text-decoration: none; transition: opacity 0.2s ease; }
        .btn-primary:hover { opacity: 0.85; }
        .btn-secondary { font-family: var(--font-body); font-size: 14px; font-weight: 500; padding: 12px 22px; border: 1px solid var(--border); color: var(--parchment); border-radius: 4px; text-decoration: none; transition: border-color 0.2s ease, color 0.2s ease; }
        .btn-secondary:hover { border-color: var(--trace); color: var(--trace); }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 130px 24px 60px !important; }
          .hero-photo { max-width: 260px; }
          .stats-row { grid-template-columns: repeat(2, auto) !important; row-gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
