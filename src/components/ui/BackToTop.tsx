"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const halfwayPoint = scrollableHeight * 0.45;

      setVisible(window.scrollY >= halfwayPoint);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#"
          onClick={handleClick}
          aria-label="Back to top"
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 12,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="
            fixed
            bottom-6
            right-6
            z-40

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full
            border
            border-zinc-800
            bg-[#09090b]/90
            text-zinc-500

            shadow-lg
            shadow-black/20
            backdrop-blur-md

            transition-all
            duration-200

            hover:border-accent/40
            hover:bg-zinc-900
            hover:text-accent

            active:scale-95
          "
        >
          <ArrowUp
            className="
              h-4
              w-4
              transition-transform
              duration-200
              group-hover:-translate-y-0.5
            "
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}