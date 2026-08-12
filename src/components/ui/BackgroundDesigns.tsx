"use client";

import { motion } from "framer-motion";

export function BackgroundDesigns() {
  const floatingAccents = [
    { text: "{ }", top: "12%", left: "6%", delay: 0 },
    { text: "01001", top: "28%", right: "8%", delay: 1.2 },
    { text: "</>", top: "45%", left: "4%", delay: 0.6 },
    { text: "SYS_OK", top: "68%", right: "6%", delay: 1.8 },
    { text: "PORT:8080", top: "85%", left: "7%", delay: 2.4 },
    { text: "DB_NODE", top: "92%", right: "9%", delay: 0.9 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Tech Blueprint Grid Matrix with Radial Mask Fade */}
      <div 
        className="absolute inset-0 opacity-[0.018] bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 60%, transparent 100%)",
        }}
      />

      {/* 2. Soft Ambient Glowing Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]" />
      <div className="absolute top-[35%] -right-40 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute top-[70%] -left-40 w-[650px] h-[650px] bg-indigo-500/5 rounded-full blur-[160px]" />

      {/* 3. Subtle Floating Technical Glyphs in Margins */}
      {floatingAccents.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden lg:block font-mono text-xs text-zinc-600/40 select-none tracking-wider"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          initial={{ y: 0, opacity: 0.2 }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
}
