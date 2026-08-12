import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Languages } from "lucide-react";

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
            <p className="text-[1.1rem] leading-[1.9] tracking-[-0.01em] text-zinc-400 md:text-xl md:leading-[1.85]">
              My engineering journey began with the typical
              frontend-to-full-stack path, building applications with React and
              Node.js. But over time, I became more interested in what happens{" "}
              <span className="font-medium text-zinc-200">
                behind the application
              </span>{" "}
              than what happens on the screen.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[1.1rem] leading-[1.9] tracking-[-0.01em] text-zinc-400 md:text-xl md:leading-[1.85]">
              That curiosity pushed me further down the stack — exploring
              databases, networking, reverse proxies, caching, containers, and
              distributed systems. Today, I focus primarily on{" "}
              <span className="font-medium text-zinc-200">
                backend engineering, infrastructure, and system design
              </span>
              , while still being comfortable building modern frontends when
              needed.
            </p>
          </FadeIn>

          {/* Engineering Philosophy */}
          <FadeIn delay={0.3}>
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

          <FadeIn delay={0.4}>
            <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-zinc-600">
              <Languages className="h-3.5 w-3.5" />
              <span className="text-zinc-500">LANGUAGES</span>
              <span className="text-zinc-800">/</span>
              <span className="text-zinc-600">
                ENGLISH · MALAYALAM · HINDI · TAMIL · PORTUGUESE
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
