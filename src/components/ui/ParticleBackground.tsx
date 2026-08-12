"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
      active: false,
    };

    const colors = [
      "rgba(59, 130, 246,",  // Accent Blue (#3b82f6)
      "rgba(56, 189, 248,",  // Sky Cyan (#38bdf8)
      "rgba(168, 85, 247,",  // Tech Purple (#a855f7)
      "rgba(161, 161, 170,", // Zinc Muted (#a1a1aa)
    ];

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      initParticles(width, height);
    };

    const initParticles = (width: number, height: number) => {
      // Reduced density: ~22-38 particles total
      const area = width * height;
      const count = Math.min(Math.max(Math.floor(area / 34000), 22), 38);

      particles = [];
      for (let i = 0; i < count; i++) {
        // Lower base alpha (subtle floating nodes)
        const baseAlpha = Math.random() * 0.15 + 0.08;
        const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.35,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.35,
          size: Math.random() * 1.2 + 0.8,
          alpha: baseAlpha,
          baseAlpha,
          color: colorPrefix,
        });
      }
    };

    const updateScrollOpacity = () => {
      if (!canvas) return;
      const scrollY = window.scrollY || 0;
      const heroHeight = window.innerHeight * 0.75;

      // Strongest in Hero section (1.0 opacity), fading substantially to 0.12 in content sections
      if (scrollY < heroHeight) {
        const factor = 1 - (scrollY / heroHeight) * 0.85;
        canvas.style.opacity = `${Math.max(0.15, factor)}`;
      } else {
        canvas.style.opacity = "0.12";
      }
    };

    const drawParticles = (width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);

      const maxConnectDistance = 110;

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap edges smoothly
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          // Mouse proximity reaction
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const force = (1 - dist / mouse.radius) * 0.05;
              p.x -= dx * force;
              p.y -= dy * force;
              p.alpha = Math.min(p.baseAlpha + (1 - dist / mouse.radius) * 0.25, 0.5);
            } else {
              p.alpha += (p.baseAlpha - p.alpha) * 0.05;
            }
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.05;
          }
        }

        // Render Particle Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const lineAlpha = (1 - dist / maxConnectDistance) * 0.12 * Math.min(p.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Connect particle to mouse if nearby
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(() => drawParticles(width, height));
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    resizeCanvas();
    updateScrollOpacity();
    drawParticles(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", updateScrollOpacity, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", updateScrollOpacity);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}
