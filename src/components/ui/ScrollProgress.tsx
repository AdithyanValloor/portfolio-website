"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  const target = useRef(0);
  const current = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const updateTarget = () => {
      const scrollTop = window.scrollY;

      const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (scrollableHeight <= 0) {
        target.current = 0;
        return;
      }

      target.current = Math.min(
        1,
        Math.max(0, scrollTop / scrollableHeight),
      );
    };

    const animate = () => {
      /*
       * Smooth interpolation.
       */
      current.current +=
        (target.current - current.current) * 0.12;

      /*
       * Stop tiny floating-point movement.
       */
      if (
        Math.abs(target.current - current.current) < 0.0001
      ) {
        current.current = target.current;
      }

      if (progressRef.current) {
        progressRef.current.style.width =
          `${current.current * 100}%`;
      }

      frame.current = requestAnimationFrame(animate);
    };

    updateTarget();

    frame.current = requestAnimationFrame(animate);

    window.addEventListener("scroll", updateTarget, {
      passive: true,
    });

    window.addEventListener("resize", updateTarget, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);

      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        left-0
        right-0
        top-0
        z-[9999]
        h-[2px]
      "
      aria-hidden="true"
    >
      <div
        ref={progressRef}
        className="
          h-full
          bg-accent
        "
        style={{
          width: "0%",
        }}
      />
    </div>
  );
}