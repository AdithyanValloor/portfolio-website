"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUp, Menu, X } from "lucide-react";
import Link from "next/link";

const sections = [
  ["Overview", "#overview"],
  ["Architecture", "#architecture"],
  ["Engineering", "#engineering"],
  ["Deployment", "#deployment"],
  ["Reliability", "#reliability"],
  ["Testing", "#testing"],
  ["Lessons", "#lessons"],
];

export default function CaseStudyNav() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "shrink-0 py-5 text-xs font-medium text-zinc-500 transition-colors duration-200 hover:text-accent";

  return (
    <nav
      aria-label="Case study navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-[#09090b]"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6 md:gap-6 md:px-10">
        {/* Back navigation */}
        <Link
          href="/#projects"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
          />

          <span className="hidden sm:inline">Back to projects</span>
          <span className="sm:hidden">Back</span>
        </Link>

        <div className="h-5 w-px shrink-0 bg-zinc-800" />

        {/* Desktop navigation */}
        <div className="hidden min-w-0 flex-1 items-center gap-5 overflow-x-auto whitespace-nowrap md:flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a href="#top" className={linkClass} aria-label="Back to top">
            <span className="inline-flex items-center gap-2">#</span>
          </a>

          {sections.map(([label, href]) => (
            <a key={href} href={href} className={linkClass}>
              {label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="case-study-mobile-menu"
          className="ml-auto inline-flex items-center justify-center rounded-lg border border-zinc-800 p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="case-study-mobile-menu"
          className="border-t border-zinc-800/80 bg-[#09090b] px-6 py-3 shadow-2xl md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            <a
              href="#top"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </a>

            {sections.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
