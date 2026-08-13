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
  depth: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];

    let width = window.innerWidth;
    let height = window.innerHeight;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isTouchDevice =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 150,
      active: false,
    };

    const scroll = {
      current: window.scrollY,
      target: window.scrollY,
    };

    const colors = [
      "rgba(59, 130, 246,",
      "rgba(56, 189, 248,",
      "rgba(168, 85, 247,",
      "rgba(161, 161, 170,",
    ];

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Important:
      // setTransform prevents scale() from accumulating
      // every time the window is resized.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles();
    };

    const initParticles = () => {
      const area = width * height;

      const density = isTouchDevice ? 50000 : 38000;

      const minParticles = isTouchDevice ? 18 : 24;
      const maxParticles = isTouchDevice ? 28 : 42;

      const count = Math.min(
        Math.max(Math.floor(area / density), minParticles),
        maxParticles
      );

      particles = Array.from({ length: count }, () => {
        const depth = Math.random();

        const baseAlpha =
          (0.07 + Math.random() * 0.11) *
          (0.65 + depth * 0.35);

        const color =
          colors[Math.floor(Math.random() * colors.length)];

        return {
          x: Math.random() * width,
          y: Math.random() * height,

          vx: prefersReducedMotion
            ? 0
            : (Math.random() - 0.5) * (0.12 + depth * 0.28),

          vy: prefersReducedMotion
            ? 0
            : (Math.random() - 0.5) * (0.12 + depth * 0.28),

          size: 0.7 + depth * 1.1,

          alpha: baseAlpha,
          baseAlpha,

          color,

          // 0 = background
          // 1 = foreground
          depth,
        };
      });
    };

    const updateScrollOpacity = () => {
      scroll.target = window.scrollY || 0;

      const heroHeight = window.innerHeight * 0.8;

      let opacity: number;

      if (scroll.target < heroHeight) {
        const progress = scroll.target / heroHeight;

        opacity = 1 - progress * 0.82;
      } else {
        opacity = 0.18;
      }

      canvas.style.opacity = `${Math.max(0.12, opacity)}`;
    };

    const updateMouse = () => {
      // Smooth mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
    };

    const updateParticles = () => {
      if (prefersReducedMotion) return;

      for (const p of particles) {
        // Subtle depth-based parallax
        const depthFactor = 0.6 + p.depth * 0.8;

        p.x += p.vx * depthFactor;
        p.y += p.vy * depthFactor;

        // Wrap around edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse interaction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const influence =
              1 - distance / mouse.radius;

            // Gentle repulsion
            const force = influence * 0.025;

            p.x -= dx * force;
            p.y -= dy * force;

            // Brighten nearby particles
            const targetAlpha =
              p.baseAlpha + influence * 0.22;

            p.alpha +=
              (Math.min(targetAlpha, 0.45) - p.alpha) *
              0.12;
          } else {
            p.alpha +=
              (p.baseAlpha - p.alpha) * 0.05;
          }
        } else {
          p.alpha +=
            (p.baseAlpha - p.alpha) * 0.05;
        }
      }
    };

    const drawParticle = (p: Particle) => {
      // Subtle glow only for larger/foreground particles
      if (p.depth > 0.65 && p.alpha > p.baseAlpha + 0.02) {
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 5
        );

        gradient.addColorStop(
          0,
          `${p.color}${p.alpha * 0.45})`
        );

        gradient.addColorStop(
          1,
          `${p.color}0)`
        );

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(
          p.x,
          p.y,
          p.size * 5,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      // Core particle
      ctx.beginPath();
      ctx.arc(
        p.x,
        p.y,
        p.size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.fill();
    };

    const drawConnections = () => {
      const maxDistance = isTouchDevice ? 95 : 115;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distanceSquared =
            dx * dx + dy * dy;

          // Avoid expensive sqrt when particles are far apart
          if (distanceSquared > maxDistance * maxDistance) {
            continue;
          }

          const distance = Math.sqrt(distanceSquared);

          const strength =
            1 - distance / maxDistance;

          const alpha =
            strength *
            Math.min(p1.alpha, p2.alpha) *
            0.45;

          if (alpha <= 0.002) continue;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;

          ctx.lineWidth = 0.55 + strength * 0.35;

          ctx.stroke();
        }
      }
    };

    const drawMouseConnections = () => {
      if (!mouse.active || isTouchDevice) return;

      const radius = mouse.radius;

      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (distance >= radius) continue;

        const strength =
          1 - distance / radius;

        const alpha = strength * 0.16;

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);

        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.lineWidth = 0.6;

        ctx.stroke();
      }
    };

    const draw = () => {
      // Smooth scroll value
      scroll.current +=
        (scroll.target - scroll.current) * 0.08;

      updateMouse();
      updateParticles();

      ctx.clearRect(0, 0, width, height);

      // Draw connections first
      drawConnections();

      // Then particles
      for (const particle of particles) {
        drawParticle(particle);
      }

      // Mouse interaction on top
      drawMouseConnections();

      animationFrameId =
        requestAnimationFrame(draw);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = event.clientX;
      mouse.targetY = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;

      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    resizeCanvas();
    updateScrollOpacity();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "scroll",
      updateScrollOpacity,
      { passive: true }
    );

    if (!isTouchDevice) {
      window.addEventListener(
        "mousemove",
        handleMouseMove,
        { passive: true }
      );

      document.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
    }

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    animationFrameId =
      requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "scroll",
        updateScrollOpacity
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
      aria-hidden="true"
    />
  );
}