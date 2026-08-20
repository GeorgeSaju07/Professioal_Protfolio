import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "George Saju — Data Scientist & AI/ML Specialist",
  description:
    "Portfolio of George Saju, a Data Scientist and Senior Support Engineer specializing in Python, machine learning, Generative AI, LLM applications, and scientific data processing.",
  openGraph: {
    title: "George Saju — Data Scientist & AI/ML Specialist",
    description:
      "3+ years across data science, scientific data processing, and AI-powered solutions. Python, ML, Generative AI, LLM applications, and API development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ background: "#14181d" }}>
        {children}
      </body>
    </html>
  );
}
