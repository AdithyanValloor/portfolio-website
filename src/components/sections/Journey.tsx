import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight, BadgeCheck, FileText } from "lucide-react";

const journey = [
  {
    phase: "Present",
    title: "Distributed Systems & Infrastructure",
    description:
      "Today, I'm going deeper into the systems behind modern applications — exploring distributed architecture, networking, caching, infrastructure, and how different services work together at scale.",
    current: true,
  },
  {
    phase: "Evolution",
    title: "Backend Specialization",
    description:
      "As I built more applications, I became more interested in what happens behind the scenes — leading me deeper into backend engineering, databases, real-time systems, caching, and service architecture.",
    current: false,
  },
  {
    phase: "Origin",
    title: "Full-Stack Development",
    description: (
      <>
        Started my full-stack development journey under the mentorship of{" "}
        <a
          href="https://entri.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 transition-colors hover:text-accent"
        >
          Entri Elevate
        </a>
        , building modern web applications with the MERN stack and Next.js while
        learning the fundamentals of the request-response lifecycle.
      </>
    ),
    current: false,
    certificate: {
      label: "View Certificate",
      href: "/certificates/entri-certificate.pdf",
    },
  },
];

export function Journey() {
  return (
    <Section id="journey" className="max-w-none px-0 py-0 md:py-0">
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
                <span className="font-mono text-lg text-accent">04.</span>
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
                How my interests evolved from building applications to
                understanding the systems behind them.
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
                <FadeIn key={item.phase} delay={0.1 * index}>
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

                            ${item.current ? "text-accent" : "text-zinc-500"}
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
                      {item.certificate && (
                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                          <a
                            href="/certificates/entri-certificate.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/certificate inline-flex items-center gap-2 font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
                          >
                            <FileText className="h-3.5 w-3.5" />

                            <span>View Certificate</span>

                            <ArrowUpRight
                              className="
      h-3 w-3
      opacity-60
      transition-transform
      duration-200
      group-hover/certificate:translate-x-0.5
      group-hover/certificate:-translate-y-0.5
    "
                            />
                          </a>

                          <span className="h-3 w-px bg-zinc-800" />

                          <a
                            href="https://www.credly.com/badges/e7cc7472-d4f3-4cbe-bd3d-3170e388ff8d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/credly inline-flex items-center gap-2 font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
                          >
                            <BadgeCheck className="h-3.5 w-3.5" />

                            <span>View Credly Badge</span>

                            <ArrowUpRight
                              className="
      h-3 w-3
      opacity-60
      transition-transform
      duration-200
      group-hover/credly:translate-x-0.5
      group-hover/credly:-translate-y-0.5
    "
                            />
                          </a>
                        </div>
                      )}
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
