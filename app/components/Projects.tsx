"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  type: string;
  problem: string;
  approach: string;
  metrics: string[];
  stack: string[];
  year: string;
  github: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
      style={{
        background: "var(--paper)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: "24px 26px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--trace)", letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase" }}>
            {project.type} · {project.year}
          </p>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 21, color: "var(--parchment)", margin: 0 }}>
            {project.title}
          </h3>
        </div>
      </div>

      <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--muted)", margin: "14px 0 16px" }}>
        {project.problem}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              padding: "4px 10px",
              borderRadius: 4,
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--signal)",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          {open ? "Hide case study −" : "View case study +"}
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: "var(--trace)", textDecoration: "none" }}
        >
          View on GitHub →
        </a>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                Approach
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--muted)", marginBottom: 18 }}>{project.approach}</p>

              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                Result
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                {project.metrics.map((m, i) => (
                  <li key={i} style={{ fontSize: 14, color: "var(--parchment)" }}>{m}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects({ items }: { items: Project[] }) {
  return (
    <section id="projects" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px 40px 100px", borderTop: "1px solid var(--border)" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", color: "var(--trace)", textTransform: "uppercase", marginBottom: 18 }}>
        Featured projects
      </p>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(26px, 3.2vw, 34px)", color: "var(--parchment)", margin: "0 0 40px" }}>
        Things I&apos;ve built
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }} className="projects-grid">
        {items.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          #projects { padding-left: 60px !important; }
        }
      `}</style>
    </section>
  );
}
