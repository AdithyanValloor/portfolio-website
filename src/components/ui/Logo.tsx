"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type LogoProps = {
  handleNavClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
};

export function Logo({ handleNavClick }:LogoProps) {
  return (
    <a
      href="#"
      onClick={(event) => handleNavClick(event, "#")}
      className="
    group flex items-center gap-2.5
    select-none
  "
      aria-label="Adithyan Valloor - Home"
    >
      {/* Profile image */}
      <span
        className="
            relative block h-8 w-8
            shrink-0 overflow-hidden
            rounded-full
            bg-zinc-900

            transition-transform
            duration-300
            ease-out

            group-hover:scale-110
            group-active:scale-95
        "
      >
        {/* Original border, rotating */}
        <motion.span
          className="
            absolute inset-0
            z-10
            rounded-full
            border-y border-accent/70
            pointer-events-none
            "
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Image */}
        <Image
          src="/me.jpg"
          alt="Adithyan Valloor"
          fill
          sizes="32px"
          className="
            z-0
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
            "
          priority
        />
      </span>
      {/* Wordmark */}
      <span
        className="
      whitespace-nowrap
      font-display
      text-[15px]
      font-medium
      tracking-[-0.01em]
      leading-none
    "
      >
        <span
          className="
        text-zinc-200
        transition-colors
        duration-200
        group-hover:text-white
      "
        >
          adithyan
        </span>

        <span className="text-accent">.</span>

        <span
          className="
        text-zinc-500
        transition-colors
        duration-200
        group-hover:text-zinc-300
      "
        >
          valloor
        </span>
      </span>
    </a>
  );
}
