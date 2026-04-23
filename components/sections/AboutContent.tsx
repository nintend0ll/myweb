"use client";

// ─── About Section Content ───────────────────────────────────────────────────
export default function AboutContent() {
  const skills = [
    "React", "Next.js", "JavaScript", "Node.js", "HTML", "CSS", "Ionic Framework",
    "C# .NET", "Java", "Entity Framework", "Linq", "SQL",
    "WebApi", "Swagger", "Postman"
  ];
  const otherInterests = [
    "desktop apps",
    "music",
    "puzzle/cozy games",
    "anime"
  ];
  const languageProficiency = ["Spanish (Native)", "English (Intermediate)"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Greeting */}
      <div>
        <h2
          style={{
            fontFamily: "'Pixeboy', monospace",
            fontSize: "35px",
            fontWeight: 100,
            color: "var(--text-primary)",
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="/assets/decor2.png"
            alt=""
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
          Agustina Sanchez
        </h2>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "14px" }}>
          hi! soy agustina :&#41; estoy en mi ultimo año de analista programadora en la ORT!!
          en github comparto algunos de mis obligatorios (proyectos) de la uni y actualmente me encuentro
          explorando y experimentando el desarrollo de proyectos creativos con Electron.
        </p>
      </div>

      <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "14px" }}>

      </p>

      {/* Skills */}
      <div>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "'Pixeboy', monospace",
            color: "var(--text-secondary)",
            marginBottom: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          technologies I work with
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {skills.map((skill) => (
            <span key={skill} className="pill">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Other Interests */}
      <div>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "'Pixeboy', monospace",
            color: "var(--text-secondary)",
            marginBottom: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          other interests
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {otherInterests.map((interest) => (
            <span key={interest} className="pill">
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Language Proficiency */}
      <div>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "'Pixeboy', monospace",
            color: "var(--text-secondary)",
            marginBottom: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          language proficiency
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {languageProficiency.map((language) => (
            <span key={language} className="pill">
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
