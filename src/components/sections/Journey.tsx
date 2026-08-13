import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";

const journey = [
  {
    phase: "Present",
    title: "Distributed Systems & Infrastructure",
    description:
      "Focusing on architecture, orchestration, caching layers, networking, and understanding how systems behave beneath the application layer.",
    current: true,
  },
  {
    phase: "Evolution",
    title: "Backend Specialization",
    description:
      "Moved deeper into backend engineering — building robust APIs, working with databases, real-time systems, caching, and service architecture.",
    current: false,
  },
  {
    phase: "Origin",
    title: "Full-Stack Development",
    description:
      "Started by building modern web applications with the MERN stack and Next.js while learning the fundamentals of the request-response lifecycle.",
    current: false,
  },
];

export function Journey() {
  return (
    <Section
      id="journey"
      className="max-w-none px-0 py-0 md:py-0"
    >
      {/* Full-width section background */}
      <div
        className="
          w-full
          border-y border-zinc-800/50
          bg-zinc-900/30
          py-16
          md:py-24
        "
      >
        {/* Constrained content */}
        <div className="mx-auto w-full max-w-4xl px-6">
          {/* Heading */}
          <FadeIn>
            <div className="mb-12">
              <h2
                className="
                  flex items-center gap-3
                  text-2xl font-bold
                  text-zinc-100
                "
              >
                <span className="font-mono text-lg text-accent">
                  04.
                </span>

                Engineering Journey
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-relaxed
                  text-zinc-500
                "
              >
                How my interests evolved from building applications
                to understanding the systems behind them.
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div
              className="
                absolute
                bottom-3
                left-[11px]
                top-3
                w-px
                bg-gradient-to-b
                from-accent/60
                via-zinc-700
                to-zinc-800/40
              "
            />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <FadeIn
                  key={item.phase}
                  delay={0.1 * index}
                >
                  <article className="group relative pl-10">
                    {/* Timeline node */}
                    <div
                      className={`
                        absolute
                        left-0
                        top-1
                        flex
                        h-[23px]
                        w-[23px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        bg-[#0d0e12]
                        transition-all
                        duration-300

                        ${
                          item.current
                            ? `
                              border-accent/70
                              shadow-[0_0_16px_rgba(245,158,11,0.25)]
                            `
                            : `
                              border-zinc-700
                              group-hover:border-zinc-500
                            `
                        }
                      `}
                    >
                      {item.current ? (
                        <span
                          className="
                            h-2
                            w-2
                            rounded-full
                            bg-accent
                            shadow-[0_0_8px_rgba(245,158,11,0.8)]
                          "
                        />
                      ) : (
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-zinc-600
                          "
                        />
                      )}
                    </div>

                    {/* Timeline content */}
                    <div
                      className="
                        -ml-5
                        rounded-xl
                        border
                        border-transparent
                        p-5

                        transition-all
                        duration-300

                        group-hover:border-zinc-800/60
                        group-hover:bg-[#0d0e12]/60
                      "
                    >
                      {/* Phase */}
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className={`
                            font-mono
                            text-xs
                            uppercase
                            tracking-wider

                            ${
                              item.current
                                ? "text-accent"
                                : "text-zinc-500"
                            }
                          `}
                        >
                          {item.phase}
                        </span>

                        {item.current && (
                          <span
                            className="
                              rounded-full
                              border
                              border-accent/20
                              bg-accent/5
                              px-2
                              py-0.5
                              font-mono
                              text-[10px]
                              uppercase
                              tracking-wider
                              text-accent
                            "
                          >
                            Current
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className="
                            text-xl
                            font-semibold
                            text-zinc-200
                          "
                        >
                          {item.title}
                        </h3>

                        <ArrowUpRight
                          className="
                            mt-1
                            h-4
                            w-4
                            shrink-0
                            text-zinc-700
                            opacity-0
                            transition-all
                            duration-300

                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-zinc-400
                            group-hover:opacity-100
                          "
                        />
                      </div>

                      {/* Description */}
                      <p
                        className="
                          mt-3
                          max-w-2xl
                          text-sm
                          leading-relaxed
                          text-zinc-500
                          md:text-base
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}