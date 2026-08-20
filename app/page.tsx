"use client";

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";

type Portfolio = {
  name: string;
  title: string;
  photo: string;
  hero: {
    badge: string;
    tagline: string;
    stats: { number: string; label: string }[];
  };
  about: {
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  skills: {
    categories: { title: string; skills: { name: string; level: string; proficiency: number }[] }[];
  };
  experience: {
    period: string;
    location: string;
    role: string;
    company: string;
    companyType: string;
    achievements: string[];
  }[];
  education: { degree: string; institution: string; year: string }[];
  certifications: { name: string; org: string }[];
  projects: {
    title: string;
    type: string;
    problem: string;
    approach: string;
    metrics: string[];
    stack: string[];
    year: string;
    github: string;
  }[];
  contact: {
    message: string;
    email: string;
    linkedin: string;
    github: string;
    resume: string;
  };
};

export default function Home() {
  const [data, setData] = useState<Portfolio | null>(null);

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) {
    return (
      <div style={{ background: "var(--ink)", color: "var(--parchment)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)" }}>Loading…</p>
      </div>
    );
  }

  return (
    <main style={{ background: "var(--ink)", minHeight: "100vh" }}>
      <Nav name={data.name} />

      <Hero
        name={data.name}
        title={data.title}
        badge={data.hero.badge}
        tagline={data.hero.tagline}
        stats={data.hero.stats}
        photo={data.photo}
        resumeHref={data.contact.resume}
        linkedinHref={data.contact.linkedin}
        githubHref={data.contact.github}
      />

      <About title={data.about.title} paragraphs={data.about.paragraphs} highlights={data.about.highlights} />

      <Experience items={data.experience} />

      <Skills categories={data.skills.categories} />

      <Projects items={data.projects} />

      <Credentials certifications={data.certifications} education={data.education} />

      <Contact
        message={data.contact.message}
        email={data.contact.email}
        linkedin={data.contact.linkedin}
        github={data.contact.github}
      />
    </main>
  );
}
