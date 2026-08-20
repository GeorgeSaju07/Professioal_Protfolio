"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        background: scrolled ? "rgba(20,24,29,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <a
        href="#top"
        style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, color: "var(--parchment)", textDecoration: "none" }}
      >
        {name}
      </a>
      <div style={{ display: "flex", gap: 28 }}>
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.04em",
              color: "var(--muted)",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}
      </div>
      <style>{`
        .nav-link:hover { color: var(--trace); }
        @media (max-width: 768px) {
          nav div:last-child { display: none; }
        }
      `}</style>
    </nav>
  );
}
