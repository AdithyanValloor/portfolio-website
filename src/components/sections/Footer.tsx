import { Icons } from "@/components/ui/Icons";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AdithyanValloor",
    icon: Icons.Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adithyan-valloor-6a90a82aa/",
    icon: Icons.Linkedin,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-[#09090b]">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-display text-lg text-zinc-300">
              Adithyan Valloor
            </span>

            <Link
              href="/"
              className="
      w-fit
      font-mono
      text-[11px]
      text-zinc-600
      transition-colors
      duration-200
      hover:text-accent
    "
            >
              adithyanvalloor.com
            </Link>
          </div>

          <div className="flex items-center gap-1">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${label}`}
                className="
                    group
                    flex items-center gap-2
                    rounded-md
                    px-3 py-2
                    text-zinc-500
                    transition-colors
                    hover:bg-zinc-900
                    hover:text-zinc-200
                  "
              >
                <Icon className="h-4 w-4" />

                <span className="hidden text-xs sm:inline">{label}</span>

                <ArrowUpRight
                  className="
                      h-3 w-3
                      opacity-0
                      transition-all
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                />
              </a>
            ))}
          </div>

          <a
            href="#home"
            className="
              group
              flex items-center gap-2
              self-center
              rounded-md
              px-3 py-2
              text-xs
              text-zinc-600
              transition-colors
              hover:bg-zinc-900
              hover:text-zinc-300
              md:self-auto
            "
          >
            Back to top
            <ArrowUp
              className="
                h-3.5 w-3.5
                transition-transform
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>

        <div
          className="
            flex flex-col gap-2
            border-t border-zinc-800/40
            py-5
            text-xs text-zinc-600
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>© {new Date().getFullYear()} Adithyan Valloor</span>

          <span className="font-mono">Designed & Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
