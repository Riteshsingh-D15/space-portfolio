"use client";

import React, { useEffect, useState, useRef } from "react";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export const SpaceCursor = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<TrailParticle[]>([]);
  const particleIdRef = useRef(0);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    // Only run on non-touch devices with fine pointer
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Spawn a trailing star particle every 45ms when moving
      const now = Date.now();
      if (now - lastSpawnRef.current > 45) {
        lastSpawnRef.current = now;
        const colors = ["#7042f8", "#ba9cff", "#00f2fe", "#f72585", "#c084fc"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const newParticle: TrailParticle = {
          id: ++particleIdRef.current,
          x: e.clientX + (Math.random() * 8 - 4),
          y: e.clientY + (Math.random() * 8 - 4),
          size: Math.random() * 4 + 2,
          color: randomColor,
        };

        setParticles((prev) => [...prev.slice(-18), newParticle]);
      }

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, [role='button'], input, textarea, select")
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Fade out particles over time
    const interval = setInterval(() => {
      setParticles((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 45);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(interval);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Floating Stardust Trail */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full transition-opacity duration-500 ease-out"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            transform: "translate(-50%, -50%)",
            opacity: 0.75,
          }}
        />
      ))}

      {/* Cosmic Follower Ring */}
      <div
        className="absolute rounded-full transition-transform duration-75 ease-out border border-purple-500/60 shadow-[0_0_12px_rgba(112,66,248,0.5)]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? "42px" : "26px",
          height: isHovered ? "42px" : "26px",
          transform: "translate(-50%, -50%)",
          backgroundColor: isHovered ? "rgba(112, 66, 248, 0.15)" : "transparent",
          transition: "width 0.2s, height 0.2s, background-color 0.2s",
        }}
      />
    </div>
  );
};
