"use client";

import { useState } from "react";

// ─── FAQ Section Content ──────────────────────────────────────────────────────
// Editá este archivo para agregar/quitar preguntas frecuentes
const faqs = [
  {
    q: "what kind of projects do you enjoy building?",
    a: "lately i'm experimenting a lot with personal projects, especially desktop apps with Electron, where i can mix functionality with creative ideas.",
  },
  {
    q: "are you open to work?",
    a: "yes! i'm currently open to freelance projects, internships and part/full-time oportunities :) feel free to reach out",
  },
  {
    q: "where are you based?",
    a: "i'm based in Uruguay, but i'm available for remote work globally.",
  },
];

export default function FaqContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            border: "1px solid var(--border-window)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {/* Question */}
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "12px 16px",
              background: openIndex === i ? "var(--accent-light)" : "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--text-primary)",
              transition: "background 0.2s ease",
            }}
          >
            <span>{faq.q}</span>
            <span
              style={{
                fontSize: "16px",
                color: "var(--accent)",
                transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
                display: "inline-block",
              }}
            >
              +
            </span>
          </button>

          {/* Answer */}
          {openIndex === i && (
            <div
              style={{
                padding: "10px 16px 14px",
                fontSize: "13px",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                borderTop: "1px solid var(--border-window)",
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
