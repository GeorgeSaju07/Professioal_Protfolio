"use client";

import { motion } from "framer-motion";

type Skill = { name: string; level: string; proficiency: number };
type Category = { title: string; skills: Skill[] };

export default function Skills({ categories }: { categories: Category[] }) {
  return (
    <section id="skills" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px 40px 100px", borderTop: "1px solid var(--border)" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", color: "var(--trace)", textTransform: "uppercase", marginBottom: 18 }}>
        Skills
      </p>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(26px, 3.2vw, 34px)", color: "var(--parchment)", margin: "0 0 40px" }}>
        Technical toolkit
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }} className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--signal)", letterSpacing: "0.04em", marginBottom: 18 }}>
              {cat.title}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {cat.skills.map((s) => (
                <div key={s.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 14, color: "var(--parchment)" }}>{s.name}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>{s.level}</span>
                  </div>
                  <div style={{ height: 4, background: "var(--paper)", borderRadius: 2, overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.proficiency * 100}%` }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      style={{ height: "100%", background: "var(--trace)", borderRadius: 2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          #skills { padding-left: 60px !important; }
        }
      `}</style>
    </section>
  );
}
