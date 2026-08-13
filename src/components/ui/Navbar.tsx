"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Homemade_Apple } from "next/font/google";
import { Logo } from "./Logo";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export const homemadeApple = Homemade_Apple({
  weight: "400",
  variable: "--font-homemade-apple",
  subsets: ["latin"],
});

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isProgrammaticScroll = useRef(false);
  const scrollResumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /*
   * Determine which section is currently active.
   */
  const updateActiveSection = () => {
    const scrollY = window.scrollY;

    setIsScrolled(scrollY > 20);

    /*
     * Home is active near the top of the page.
     */
    if (scrollY < 100) {
      setActiveSection("home");
      return;
    }

    /*
     * Detect a section once its top reaches
     * roughly 25% of the viewport.
     */
    const detectionPoint = scrollY + window.innerHeight * 0.25;

    let currentSection = "home";

    navItems.forEach((item) => {
      if (item.href === "#") return;

      const sectionId = item.href.substring(1);
      const section = document.getElementById(sectionId);

      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + scrollY;

      if (sectionTop <= detectionPoint) {
        currentSection = sectionId;
      }
    });

    setActiveSection(currentSection);
  };

  /*
   * Scroll spy.
   */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      if (!ticking) {
        ticking = true;

        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
      }
    };

    const handleResize = () => {
      if (!isProgrammaticScroll.current) {
        updateActiveSection();
      }
    };

    const initialFrame = requestAnimationFrame(() => {
      updateActiveSection();
    });

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(initialFrame);

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Close mobile menu with Escape.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
   * Smooth navigation.
   */
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const targetId = href.substring(1);

    if (scrollResumeTimer.current) {
      clearTimeout(scrollResumeTimer.current);
    }

    /*
     * Home
     */
    if (!targetId) {
      isProgrammaticScroll.current = true;

      setActiveSection("home");
      setIsMobileMenuOpen(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      scrollResumeTimer.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
        updateActiveSection();
      }, 800);

      return;
    }

    const element = document.getElementById(targetId);

    if (!element) return;

    /*
     * Temporarily disable scroll spy while
     * smooth navigation is happening.
     */
    isProgrammaticScroll.current = true;

    setActiveSection(targetId);
    setIsMobileMenuOpen(false);

    /*
     * Account for the fixed navbar.
     */
    const navbarOffset = 60;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    const targetPosition = Math.max(0, elementPosition - navbarOffset);

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    scrollResumeTimer.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
      updateActiveSection();
    }, 900);
  };

  /*
   * Cleanup navigation timer.
   */
  useEffect(() => {
    return () => {
      if (scrollResumeTimer.current) {
        clearTimeout(scrollResumeTimer.current);
      }
    };
  }, []);

  return (
    <header
      className={`
    fixed inset-x-0 top-0 z-50
    transition-all duration-300
    ${isScrolled ? "bg-[#09090b]/95 backdrop-blur-md" : "bg-transparent"}
  `}
    >
      {isScrolled && (
        <div
          className="
        pointer-events-none
        absolute inset-x-0 bottom-0
        h-px
        bg-zinc-800/40
      "
        />
      )}

      <nav
        className="
      mx-auto flex h-15 max-w-6xl
      items-center justify-between
      px-6 lg:px-8
    "
      >
        {/* ───────────────── Logo ───────────────── */}

        <Logo handleNavClick={handleNavClick}/>

        {/* ───────────────── Desktop Navigation ───────────────── */}

        <ul
          className="
            hidden items-center
            gap-7 md:flex
          "
        >
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);

            const isActive =
              item.href === "#"
                ? activeSection === "home"
                : activeSection === sectionId;

            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={`
                    group/nav relative
                    inline-flex items-center
                    py-2
                    text-[13px]
                    font-medium
                    tracking-[-0.005em]
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "text-zinc-100"
                        : "text-zinc-500 hover:text-zinc-200"
                    }
                  `}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="
                        absolute
                        -bottom-0.5
                        left-0 right-0
                        mx-auto
                        h-px
                        bg-accent
                      "
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ───────────────── Mobile Button ───────────────── */}

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="
            rounded-lg
            border border-transparent
            p-2
            text-zinc-500

            transition-all
            duration-200

            hover:border-zinc-800
            hover:bg-zinc-900/60
            hover:text-zinc-100

            active:scale-95

            md:hidden
          "
          aria-expanded={isMobileMenuOpen}
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.span
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.8,
                }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.8,
                }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ───────────────── Mobile Navigation ───────────────── */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
            }}
            className="
              border-t border-zinc-800/50
              bg-[#09090b]/95
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              md:hidden
            "
          >
            <nav
              className="
                mx-auto
                max-w-6xl
                px-6
                py-3
              "
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col">
                {navItems.map((item, index) => {
                  const sectionId = item.href.substring(1);

                  const isActive =
                    item.href === "#"
                      ? activeSection === "home"
                      : activeSection === sectionId;

                  return (
                    <motion.li
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: -6,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.025,
                        duration: 0.18,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={(event) => handleNavClick(event, item.href)}
                        className={`
                          flex items-center
                          justify-between
                          rounded-lg
                          px-3 py-3
                          text-sm
                          font-medium
                          transition-colors
                          duration-200

                          ${
                            isActive
                              ? "bg-zinc-900/70 text-zinc-100"
                              : "text-zinc-500 hover:bg-zinc-900/40 hover:text-zinc-200"
                          }
                        `}
                      >
                        <span>{item.name}</span>

                        {isActive && (
                          <span
                            className="
                              h-1.5 w-1.5
                              rounded-full
                              bg-accent
                            "
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
