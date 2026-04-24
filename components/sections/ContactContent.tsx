"use client";

// ─── Contact Section Content ──────────────────────────────────────────────────
const contactLinks = [
  {
    label: "email",
    value: "agustinasanchezmontoro@gmail.com",
    href: "mailto:agustinasanchezmontoro@gmail.com",
    emoji: "/assets/mail.png",
  },
];

export default function ContactContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h2
          style={{
            fontSize: "30px",
            fontFamily: "'Pixeboy', monospace",
            fontWeight: 200,
            color: "var(--text-primary)",
            marginBottom: "8px",
          }}
        >
          let&apos;s work together!
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            fontSize: "14px",
          }}
        >
          i&apos;m always open to new projects, collaborations, or just a chat.
          feel free to reach out :&#41;
        </p>
      </div>

      {/* Contact links */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1px solid var(--border-window)",
              textDecoration: "none",
              transition: "transform 0.15s ease, background 0.15s ease",
              background: "transparent",
              color: "#a2d2ff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(162, 210, 255, 0.18)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateX(0)";
            }}
          >
            <span style={{ fontSize: "20px" }}>
              {link.emoji.startsWith("/") ? (
                <img
                  src={link.emoji}
                  alt={link.label}
                  style={{
                    width: "65px",
                    height: "65px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                link.emoji
              )}
            </span>
            <div>
              <p
                style={{
                  fontFamily: "'Pixeboy', monospace",
                  fontSize: "17px",
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "2px",
                }}
              >
                {link.label}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#a2d2ff",
                  fontWeight: 500,
                }}
              >
                {link.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <p
        style={{
          fontSize: "13px",
          color: "var(--text-secondary)",
          fontStyle: "italic",
        }}
      >
        response time: usually within 24 hours :&#41;
      </p>
    </div>
  );
}
