"use client";

import { motion } from "framer-motion";
import TraceLine from "./TraceLine";

type ExperienceEntry = {
  period: string;
  location: string;
  role: string;
  company: string;
  companyType: string;
  achievements: string[];
};

export default function Experience({ items }: { items: ExperienceEntry[] }) {
  return (
    <section id="experience" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px 40px", borderTop: "1px solid var(--border)" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", color: "var(--trace)", textTransform: "uppercase", marginBottom: 18, paddingLeft: 60 }}>
        Experience
      </p>

      {items.map((item, i) => (
        <div key={i} style={{ position: "relative", paddingLeft: 100, paddingBottom: 48 }}>
          <TraceLine color={i === 0 ? "signal" : "trace"} peak />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.45 }}
          >
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--trace)", marginBottom: 6 }}>
              {item.period.toUpperCase()} · {item.location}
            </p>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24, color: "var(--parchment)", margin: "0 0 4px" }}>
              {item.role}
            </h3>
            <p style={{ fontSize: 14, color: "var(--muted)", margin: "0 0 18px" }}>
              {item.company} · {item.companyType}
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 8 }}>
              {item.achievements.map((a, idx) => (
                <li key={idx} style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>
                  <span style={{ color: "var(--parchment)" }}>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
