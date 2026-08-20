"use client";

import { motion } from "framer-motion";

type Certification = { name: string; org: string };
type EducationEntry = { degree: string; institution: string; year: string };

type CredentialsProps = {
  certifications: Certification[];
  education: EducationEntry[];
};

export default function Credentials({ certifications, education }: CredentialsProps) {
  return (
    <section id="certifications" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px 40px 100px", borderTop: "1px solid var(--border)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="credentials-grid">
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", color: "var(--trace)", textTransform: "uppercase", marginBottom: 18 }}>
            Certifications
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 8, padding: "14px 16px" }}
              >
                <p style={{ fontSize: 14.5, color: "var(--parchment)", margin: "0 0 3px" }}>{c.name}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", margin: 0 }}>{c.org}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", color: "var(--trace)", textTransform: "uppercase", marginBottom: 18 }}>
            Education
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 8, padding: "14px 16px" }}
              >
                <p style={{ fontSize: 14.5, color: "var(--parchment)", margin: "0 0 3px" }}>{e.degree}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", margin: 0 }}>{e.institution} · {e.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .credentials-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          #certifications { padding-left: 60px !important; }
        }
      `}</style>
    </section>
  );
}
