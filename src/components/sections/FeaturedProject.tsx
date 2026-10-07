import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Server,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

export function FeaturedProject() {
  const stack = [
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "RabbitMQ",
    "gRPC",
    "Socket.IO",
    "Docker",
    "Nginx",
    "GitHub Actions",
    "GCP",
  ];

  return (
    <Section id="projects">
      <FadeIn>
        <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-zinc-100">
          <span className="font-mono text-lg text-accent">03.</span>
          Featured Project
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#0d0e12]">
          {/* Top accent */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent via-amber-400 to-cyan-400 opacity-60" />

          {/* Corner glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl transition-opacity duration-500 group-hover:bg-accent/10" />

          <div className="relative p-8 md:p-12">
            {/* Header */}
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    Featured Project
                  </span>

                  <span className="h-px w-8 bg-zinc-800" />

                  <span className="font-mono text-xs text-zinc-600">
                    Production
                  </span>
                </div>

                <h3 className="mb-4 text-4xl font-bold tracking-tight text-zinc-100">
                  Melo
                </h3>

                <p className="max-w-xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                  A production-ready real-time communication platform built
                  around scalable backend architecture, distributed services,
                  and infrastructure designed for reliability.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="https://github.com/AdithyanValloor/melo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Melo on GitHub"
                  className="
                    group/icon
                    rounded-lg
                    border border-zinc-800
                    bg-zinc-900/70
                    p-2.5
                    text-zinc-400
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-zinc-700
                    hover:bg-zinc-800
                    hover:text-white
                  "
                >
                  <Icons.Github className="h-5 w-5 transition-transform duration-200 group-hover/icon:scale-110" />
                </Link>

                <Link
                  href="https://melo.adithyanvalloor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Melo"
                  className="
                    group/icon
                    rounded-lg
                    border border-zinc-800
                    bg-zinc-900/70
                    p-2.5
                    text-zinc-400
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-accent/40
                    hover:bg-accent/5
                    hover:text-accent
                  "
                >
                  <ExternalLink className="h-5 w-5 transition-transform duration-200 group-hover/icon:scale-110" />
                </Link>
              </div>
            </div>

            {/* Architecture */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <h4 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  <Layers className="h-4 w-4 text-accent" />
                  Architecture
                </h4>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <strong className="text-zinc-200">
                        Service Architecture:
                      </strong>{" "}
                      Separated authentication and messaging responsibilities
                      with gRPC-based service communication.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <strong className="text-zinc-200">
                        Event-Driven Communication:
                      </strong>{" "}
                      RabbitMQ handles asynchronous communication between
                      backend services.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <strong className="text-zinc-200">
                        Real-Time Systems:
                      </strong>{" "}
                      Socket.IO and Redis support real-time messaging and
                      distributed presence handling.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <strong className="text-zinc-200">
                        Polyglot Persistence:
                      </strong>{" "}
                      PostgreSQL and MongoDB are used for different data and
                      service requirements, with Redis providing caching and
                      fast-access state.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Infrastructure */}
              <div>
                <h4 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  <Server className="h-4 w-4 text-accent" />
                  Infrastructure
                </h4>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <strong className="text-zinc-200">
                        Containerized:
                      </strong>{" "}
                      Backend services, frontend, Redis, RabbitMQ, and Nginx
                      run through Docker Compose.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <strong className="text-zinc-200">
                        Production Infrastructure:
                      </strong>{" "}
                      Deployed to a Google Cloud VM with Nginx handling traffic
                      routing and HTTPS.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <strong className="text-zinc-200">
                        CI/CD:
                      </strong>{" "}
                      Automated build and deployment pipeline for production
                      releases.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <strong className="text-zinc-200">
                        Reliability:
                      </strong>{" "}
                      Health checks, structured error handling, and observability
                      are being built into the production workflow.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stack */}
            <div className="mt-10 border-t border-zinc-800/50 pt-6">
              <div className="mb-4 flex items-center gap-2">
                <Workflow className="h-4 w-4 text-zinc-600" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                  Technology Stack
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <Badge
                    key={tech}
                    className="border border-zinc-800 bg-zinc-900 text-zinc-400"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Case study */}
            <div className="mt-8">
              <Link
                href="#"
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-medium
                  text-accent
                  transition-all
                  duration-200
                  hover:gap-3
                  hover:text-white
                "
              >
                Read the engineering case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}