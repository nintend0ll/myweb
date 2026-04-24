"use client";

// ─── Projects Section Content ─────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    name: "for u my love player",
    description:
      "A cute desktop music player I built with Electron as a personal gift, with custom window controls, soft pastel UI, and local playlist playback.",
    tags: ["Electron", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/nintend0ll/for-u-my-love-player",
  },
  {
    id: 2,
    name: "wicked website",
    description:
      "A Wicked-themed personal website with custom visuals, typography, and styling inspired by the musical's aesthetic.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/nintend0ll/WickedWeb",
  },
];

export default function ProjectsContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.link}
          className="project-card"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "4px",
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                  marginBottom: "8px",
                }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="pill" style={{ fontSize: "11px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
