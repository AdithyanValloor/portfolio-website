import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight, BadgeCheck, FileText, Languages } from "lucide-react";

export function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-14">
            <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
              <span className="font-mono text-base font-medium tracking-normal text-accent">
                01.
              </span>
              About
            </h2>

            <p className="mt-3 text-sm tracking-wide text-zinc-500">
              A little about how I approach engineering.
            </p>
          </div>
        </FadeIn>

        {/* About Content */}
        <div className="max-w-3xl space-y-9">
          <FadeIn delay={0.1}>
            <div>
              <p className="text-[1.1rem] leading-[1.9] tracking-[-0.01em] text-zinc-400 md:text-xl md:leading-[1.85]">
                My journey into software development started with{" "}
                <a
                  href="https://entri.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-300 transition-colors hover:text-accent"
                >
                  Entri Elevate
                </a>
                , where I learned the foundations of full-stack development and
                started building applications with the MERN stack and Next.js.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href="/certificates/entri-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>View Certificate</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <span className="h-3 w-px bg-zinc-800" />

                <a
                  href="https://www.credly.com/badges/e7cc7472-d4f3-4cbe-bd3d-3170e388ff8d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
                >
                  <BadgeCheck className="h-3.5 w-3.5" />
                  <span>View Credly Badge</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[1.1rem] leading-[1.9] tracking-[-0.01em] text-zinc-400 md:text-xl md:leading-[1.85]">
              As I built more applications, I became increasingly curious about
              what happens{" "}
              <span className="font-medium text-zinc-200">
                behind the application
              </span>
              . That curiosity led me deeper into backend engineering,
              databases, networking, caching, reverse proxies, and real-time
              systems.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-[1.1rem] leading-[1.9] tracking-[-0.01em] text-zinc-400 md:text-xl md:leading-[1.85]">
              Today, I focus primarily on{" "}
              <span className="font-medium text-zinc-200">
                backend engineering, infrastructure, and system design
              </span>
              , while still being comfortable building modern frontends when
              needed. I'm especially interested in understanding how services
              communicate, how systems behave under load, and what makes
              software reliable in production.
            </p>
          </FadeIn>

          {/* Engineering Philosophy */}
          <FadeIn delay={0.4}>
            <div className="relative mt-12 border-l border-accent/40 pl-6 md:pl-8">
              <span className="absolute -left-[3px] top-1 h-1.5 w-1.5 rounded-full bg-accent" />

              <p className="text-base leading-[1.8] tracking-[-0.005em] text-zinc-500 md:text-lg">
                I believe good software engineering goes beyond writing code.
                Understanding the systems underneath an application helps me
                build software that is{" "}
                <span className="text-zinc-300">
                  reliable, observable, and designed to scale.
                </span>
              </p>
            </div>
          </FadeIn>

          {/* Languages */}
          <FadeIn delay={0.5}>
            <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-zinc-600">
              <Languages className="h-3.5 w-3.5" />
              <span className="text-zinc-500">LANGUAGES</span>
              <span className="text-zinc-800">/</span>
              <span className="text-zinc-600">
                ENGLISH · MALAYALAM · HINDI · TAMIL
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
