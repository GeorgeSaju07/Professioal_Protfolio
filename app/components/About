"use client";

import { motion } from "framer-motion";
import TraceLine from "./TraceLine";

type AboutProps = {
  title: string;
  paragraphs: string[];
  highlights: string[];
};

export default function About({ title, paragraphs, highlights }: AboutProps) {
  return (
    <section
      id="about"
      style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "80px 40px 40px 100px", borderTop: "1px solid var(--border)" }}
    >
      <TraceLine color="signal" className="section-trace" />
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", color: "var(--trace)", textTransform: "uppercase", marginBottom: 18 }}>
        About
      </p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.2, color: "var(--parchment)", maxWidth: 700, margin: "0 0 36px" }}
      >
        {title}
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48 }} className="about-grid">
        <div>
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--muted)", marginBottom: 18 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 14 }}>
            Focus areas
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                style={{
                  fontSize: 14,
                  color: "var(--parchment)",
                  padding: "10px 14px",
                  background: "var(--paper)",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                }}
              >
                {h}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
          #about { padding-left: 60px !important; }
        }
      `}</style>
    </section>
  );
}
