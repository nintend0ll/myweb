"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Window from "@/components/Window";
import AboutContent from "@/components/sections/AboutContent";
import ProjectsContent from "@/components/sections/ProjectsContent";
import ContactContent from "@/components/sections/ContactContent";
import LinksContent from "@/components/sections/LinksContent";
import FaqContent from "@/components/sections/FaqContent";

// ─── Types ────────────────────────────────────────────────────────────────────
type WindowId = "about" | "links" | "projects" | "faq" | "contact";

interface OpenWindow {
  id: WindowId;
  zIndex: number;
}

// ─── Nav items ────────────────────────────────────────────────────────────────
const NAV_ITEMS: { id: WindowId; label: string; icon: string }[] = [
  { id: "about", label: "about", icon: "/assets/about.png" },
  { id: "links", label: "links", icon: "/assets/links.png" },
  { id: "projects", label: "work", icon: "/assets/work.png" },
  { id: "faq", label: "faq", icon: "/assets/faq.png" },
  { id: "contact", label: "contact", icon: "/assets/contact.png" },
];

// ─── Window configs ───────────────────────────────────────────────────────────
const WINDOW_CONFIG: Record<
  WindowId,
  { title: string; initialX: number; initialY: number; width: number; height: number }
> = {
  about: { title: "about.txt", initialX: 60, initialY: 60, width: 460, height: 420 },
  links: { title: "links.md", initialX: 120, initialY: 90, width: 380, height: 360 },
  projects: { title: "projects/", initialX: 180, initialY: 80, width: 520, height: 480 },
  faq: { title: "faq.txt", initialX: 240, initialY: 110, width: 440, height: 400 },
  contact: { title: "contact.md", initialX: 160, initialY: 70, width: 420, height: 380 },
};

// ─── Dock social links ────────────────────────────────────────────────────────
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/nintend0ll", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/agustina-sanchez-montoro", icon: LinkedInIcon },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [maxZ, setMaxZ] = useState(10);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [viewport, setViewport] = useState({ width: 1280, height: 720 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // Toggle dark mode on <html>
  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
      return next;
    });
  };

  // Open or bring to front
  const openWindow = useCallback(
    (id: WindowId) => {
      setOpenWindows((prev) => {
        const exists = prev.find((w) => w.id === id);

        if (exists) {
          const newZ = maxZ + 1;
          setMaxZ(newZ);
          return prev.map((w) =>
            w.id === id ? { ...w, zIndex: newZ } : w
          );
        }

        const newZ = maxZ + 1;
        setMaxZ(newZ);

        // efecto cascada
        const offset = (prev.length % 5) * 30;

        return [
          ...prev,
          {
            id,
            zIndex: newZ,
            offsetX: offset,
            offsetY: offset,
          },
        ];
      });
    },
    [maxZ]
  );

  // Close window
  const closeWindow = useCallback((id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  // Bring clicked window to front
  const focusWindow = useCallback(
    (id: string) => {
      setOpenWindows((prev) => {
        const newZ = maxZ + 1;
        setMaxZ(newZ);
        return prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w));
      });
    },
    [maxZ]
  );

  return (
    // ── Desktop wrapper ──
    <div
      id="desktop"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-desktop)",
      }}
    >
      {/* ── Theme toggle (top-left) ── */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "12px" : "20px",
          left: isMobile ? "12px" : "20px",
          zIndex: 5,
          display: "flex",
          gap: "8px",
        }}
      >
        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <img
            src={darkMode ? "/assets/sun.png" : "/assets/moon.png"}
            alt={darkMode ? "sun icon" : "moon icon"}
            style={{
              width: "18px",
              height: "18px",
              objectFit: "contain",
            }}
          />
        </button>
      </div>

      {/* ── Floating decoration (bottom-right corner) ── */}
      <img
        src="/assets/hachiware.png"
        alt=""
        className="animate-bob"
        style={{
          position: "absolute",
          bottom: isMobile ? "92px" : "20px",
          right: isMobile ? "8px" : "20px",
          width: isMobile ? "120px" : "260px",
          height: isMobile ? "120px" : "260px",
          objectFit: "contain",
          zIndex: isMobile ? 1 : 4,
          opacity: isMobile ? 0.75 : 1,
          pointerEvents: "none",
        }}
      />

      {/* ── HOME WINDOW (static, not draggable) ── */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "46%" : "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: isMobile ? "100%" : "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="os-window"
          style={{
            width: isMobile ? "92vw" : "min(600px, 92vw)",
            minWidth: 0,
          }}
        >
          {/* Titlebar */}
          <div
            className="os-window-titlebar"
            style={{ cursor: "default" }} // static — no drag
          >
            <span className="os-window-title">home</span>

            {/* Traffic lights (decorative) */}
            <div style={{ display: "flex", gap: "6px" }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: color,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Body */}
          <div
            className="os-window-body"
            style={{ padding: isMobile ? "34px 18px" : "85px 48px", textAlign: "center" }}
          >
            {/* Greeting */}
            <h1
              style={{
                fontSize: isMobile ? "44px" : "75px",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "var(--text-primary)" }}>hi! </span>
              <span style={{ color: "var(--accent)" }}>i&apos;m agu</span>
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: isMobile ? "18px" : "26px",
                marginBottom: isMobile ? "20px" : "36px",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              fullstack dev
            </p>

            {/* Nav icons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: isMobile ? "8px" : "15px",
                flexWrap: "wrap",
              }}
            >
              {NAV_ITEMS.map(({ id, label, icon }) => (
                <button
                  key={id}
                  className="nav-icon-btn"
                  onClick={() => openWindow(id)}
                  id={`nav-${id}`}
                  aria-label={`Open ${label}`}
                >
                  <img
                    src={icon}
                    alt={label}
                    style={{
                      width: isMobile ? "36px" : "45px",
                      height: isMobile ? "42px" : "55px",
                      objectFit: "contain",
                    }}
                  />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Draggable Windows ── */}
      <AnimatePresence>
        {openWindows.map((win) => {
          const cfg = WINDOW_CONFIG[win.id];
          return (
            <Window
              key={win.id}
              id={win.id}
              title={cfg.title}
              initialX={isMobile ? 8 : cfg.initialX}
              initialY={isMobile ? 54 : cfg.initialY}
              width={isMobile ? Math.max(280, viewport.width - 16) : cfg.width}
              height={isMobile ? Math.max(300, viewport.height - 120) : cfg.height}
              zIndex={win.zIndex}
              onClose={closeWindow}
              onFocus={focusWindow}
            >
              {win.id === "about" && <AboutContent />}
              {win.id === "links" && <LinksContent />}
              {win.id === "projects" && <ProjectsContent />}
              {win.id === "faq" && <FaqContent />}
              {win.id === "contact" && <ContactContent />}
            </Window>
          );
        })}
      </AnimatePresence>

      {/* ── Dock (bottom center) ── */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "12px" : "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 6,
          width: "auto",
          maxWidth: isMobile ? "92vw" : "none",
        }}
      >
        <div className="dock">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="dock-icon"
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          ))}
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: "var(--text-secondary)",
            marginTop: "8px",
            fontFamily: "'JetBrains Mono', monospace",
            width: "100%",
          }}
        >
          © 2026 Agustina
        </p>
      </div>
    </div>
  );
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

