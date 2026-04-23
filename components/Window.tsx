"use client";

import { useRef, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  initialX?: number;
  initialY?: number;
  width?: number;
  height?: number;
  zIndex: number;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
}

export default function Window({
  id,
  title,
  children,
  initialX = 100,
  initialY = 80,
  width = 480,
  height = 400,
  zIndex,
  onClose,
  onFocus,
}: WindowProps) {
  const dragControls = useDragControls();
  const constraintsRef = useRef<HTMLDivElement>(null);

  // Get the parent container for constraints
  useEffect(() => {
    // constraintsRef is set to the desktop container via prop/context if needed
  }, []);

  return (
    <motion.div
      // Entry animation
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      // Drag settings
      drag
      dragListener={false}         // only drag from titlebar
      dragControls={dragControls}
      dragElastic={0}
      dragMomentum={false}
      // Positioning
      style={{
        position: "absolute",
        left: initialX,
        top: initialY,
        width,
        zIndex,
      }}
      className="os-window section-window"
      onPointerDown={() => onFocus(id)}
    >
      {/* ── Titlebar (drag handle) ── */}
      <div
        className="os-window-titlebar"
        onPointerDown={(e) => {
          e.preventDefault();
          dragControls.start(e);
        }}
      >
        <span className="os-window-title">{title}</span>

        <div className="flex items-center gap-2">
          <button
            className="os-window-close"
            onClick={() => onClose(id)}
            aria-label="Close window"
          >
            <span className="os-window-close-dot" />
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div
        className="os-window-body"
        style={{ maxHeight: height - 44, minHeight: 120 }}
      >
        {children}
      </div>
    </motion.div>
  );
}
