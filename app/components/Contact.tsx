"use client";

import { motion } from "framer-motion";

type ContactProps = {
  message: string;
  email: string;
  linkedin: string;
  github: string;
};

export default function Contact({ message, email, linkedin, github }: ContactProps) {
  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "100px 40px",
        textAlign: "center",
        background: "var(--paper)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(28px, 4vw, 40px)", color: "var(--parchment)", margin: "0 0 16px" }}
      >
        Let&apos;s build something meaningful
      </motion.h2>
      <p style={{ fontSize: 15.5, color: "var(--muted)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.65 }}>
        {message}
      </p>

      <a
        href={`mailto:${email}?subject=Hiring%20Opportunity`}
        style={{
          display: "inline-block",
          fontFamily: "var(--font-body)",
          fontSize: 14,
          fontWeight: 500,
          padding: "13px 28px",
          background: "var(--signal)",
          color: "var(--ink)",
          borderRadius: 4,
          textDecoration: "none",
          marginBottom: 32,
        }}
      >
        Email me
      </a>

      <div style={{ display: "flex", justifyContent: "center", gap: 28 }}>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--trace)", textDecoration: "none" }}>
          LinkedIn
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--trace)", textDecoration: "none" }}>
          GitHub
        </a>
      </div>
    </section>
  );
}
