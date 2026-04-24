"use client";

// ─── Links Section Content ────────────────────────────────────────────────────
const links = [
  {
    label: "linkedin",
    url: "https://linkedin.com/in/agustina-sanchez-montoro/",
    icon: "🐦",
  },
  {
    label: "github",
    url: "https://github.com/nintend0ll",
    icon: "/assets/PC.png",
  },
];

export default function LinksContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "22px 14px",
          justifyItems: "center",
          alignItems: "start",
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "var(--text-primary)",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            <span
              style={{
                width: "62px",
                height: "62px",
                border: "2px solid rgba(0, 0, 0, 0.35)",
                borderRadius: "16px",
                display: "grid",
                placeItems: "center",
                fontSize: "28px",
                filter: "grayscale(1)",
                background: "rgba(255,255,255,0.5)",
                boxShadow: "0 2px 0 rgba(0,0,0,0.12)",
              }}
            >
              {link.icon.startsWith("/") ? (
                <img
                  src={link.icon}
                  alt={link.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                link.icon
              )}
            </span>
            <span
              style={{
                fontSize: "17px",
                fontFamily: "'Pixeboy', monospace",
                color: "rgba(0,0,0,0.75)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textAlign: "center",
                lineHeight: 1.1,
                minHeight: "14px",
              }}
            >
              {link.label}
            </span>
          </a>
        ))}
      </div>

      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "6px",
          padding: "12px 14px",
          textAlign: "center",
          color: "var(--text-secondary)",
          fontSize: "13px",
          background: "rgba(255,255,255,0.35)",
        }}
      >
        clicking any of the links will open a new tab!
      </div>
    </div>
  );
}
