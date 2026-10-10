import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowLeft, ArrowUp } from "lucide-react";

import Link from "next/link";

import {
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiSocketdotio,
  SiVitest,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiGooglecloud,
} from "react-icons/si";

import { Network } from "lucide-react";
import { HeroButton } from "../sections/Hero";
import { Icons } from "../ui/Icons";

const technologies = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#68A063" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Express", Icon: SiExpress, color: "#E4E4E7" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "RabbitMQ", Icon: SiRabbitmq, color: "#FF6600" },
  { name: "gRPC", Icon: Network, color: "#60A5FA" },
  { name: "Socket.IO", Icon: SiSocketdotio, color: "#E4E4E7" },
  { name: "Vitest", Icon: SiVitest, color: "#6E9F18" },
  { name: "Pino", Icon: Network, color: "#A1A1AA" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Docker Compose", Icon: SiDocker, color: "#2496ED" },
  { name: "Nginx", Icon: SiNginx, color: "#009639" },
  {
    name: "GitHub Actions",
    Icon: SiGithubactions,
    color: "#2088FF",
  },
  {
    name: "Google Cloud",
    Icon: SiGooglecloud,
    color: "#4285F4",
  },
];

const architecture = [
  {
    name: "Frontend",
    tech: "Next.js · React · TypeScript",
    description: "User interface for real-time communication.",
  },
  {
    name: "Nginx",
    tech: "Reverse proxy · HTTPS",
    description:
      "Entry point for routing external traffic to application services.",
  },
  {
    name: "Backend services",
    tech: "Node.js · Express · gRPC",
    description:
      "Application logic, authentication, messaging, and inter-service communication.",
  },
  {
    name: "Data and messaging",
    tech: "PostgreSQL · MongoDB · Redis · RabbitMQ",
    description:
      "Persistence, fast-access state, real-time presence, and asynchronous events.",
  },
];

const engineeringDecisions = [
  {
    title: "Service separation",
    decision:
      "Separate authentication and messaging responsibilities instead of putting every concern into a single application module.",
    rationale:
      "Explicit service boundaries make responsibilities easier to reason about and establish clearer interfaces between components.",
  },
  {
    title: "Synchronous and asynchronous communication",
    decision:
      "Use gRPC for service-to-service request/response communication and RabbitMQ for event-driven workflows.",
    rationale:
      "These communication patterns serve different purposes: direct service calls when a response is required, and message-based processing for asynchronous events.",
  },
  {
    title: "Polyglot persistence",
    decision:
      "Use PostgreSQL and MongoDB for different data requirements, with Redis for caching and fast-access state.",
    rationale:
      "Different storage technologies provide different data models and operational characteristics. Their use should follow the needs of each service rather than forcing everything into one database.",
  },
  {
    title: "Externalized runtime configuration",
    decision:
      "Configure services through environment variables and coordinate local services through Docker Compose.",
    rationale:
      "Service configuration must match its execution environment. A container cannot use localhost to reach a different container; it needs the appropriate service hostname and port.",
  },
];

const reliabilityItems = [
  {
    title: "Health checks",
    description:
      "Health-check mechanisms help verify whether application services are responding as expected.",
  },
  {
    title: "Structured error handling",
    description:
      "Consistent error handling makes application failures easier to understand and prevents expected failure paths from becoming opaque debugging problems.",
  },
  {
    title: "Structured logging with Pino",
    description:
      "Pino-based structured logging in the auth service provides machine-readable operational events that are easier to filter and investigate.",
  },
  {
    title: "Metrics endpoint",
    description:
      "The auth service exposes a metrics endpoint to provide an entry point for monitoring service behavior.",
  },
];

const deploymentSteps = [
  {
    number: "01",
    title: "Prepare the production environment",
    description:
      "Provision an Ubuntu virtual machine on Google Cloud and install the required runtime and container tooling.",
  },
  {
    number: "02",
    title: "Containerize the application",
    description:
      "Build service images and define the application infrastructure with Docker Compose, including the relevant supporting services.",
  },
  {
    number: "03",
    title: "Configure traffic routing",
    description:
      "Use Nginx as the reverse proxy and configure domain routing and HTTPS for the deployed application.",
  },
  {
    number: "04",
    title: "Automate releases",
    description:
      "Use the GitHub Actions deployment workflow to automate the production build and release process.",
  },
];

const lessons = [
  {
    title: "A running container is not proof of a healthy application",

    description:
      "Container status, service readiness, application health, and end-to-end functionality are different signals. Each must be verified at the appropriate layer.",
  },
  {
    title: "Configuration is part of the architecture",

    description:
      "Network addresses, environment variables, ports, permissions, and service dependencies can break a deployment even when the application code is correct.",
  },
  {
    title: "Observability should answer operational questions",

    description:
      "Logs and metrics are most useful when they help identify what happened, which component was involved, and where further investigation is needed.",
  },
  {
    title: "Production debugging requires a systematic approach",

    description:
      "Inspect the failing layer, gather evidence, isolate the cause, apply a targeted fix, and verify the result instead of making unrelated configuration changes.",
  },
];

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {number} / {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function ArchitectureCard({
  name,

  tech,

  description,
}: (typeof architecture)[number]) {
  return (
    <div className="relative z-10 rounded-xl border border-zinc-800 bg-[#0d0e12] p-5 md:p-6">
      <h3 className="text-lg font-semibold text-zinc-100">{name}</h3>

      <p className="mt-2 font-mono text-xs leading-6 text-accent">{tech}</p>

      <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
    </div>
  );
}

export default function MeloCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden text-zinc-100">
      {/* Table of contents */}

      <nav
        aria-label="Case study contents"
        className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-[#09090b] backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-6 md:px-10">
          {/* Back navigation */}

          <Link
            href="/#projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              <ArrowLeft className="h-4 w-4" />
            </span>

            <span className="hidden sm:inline">Back to projects</span>

            <span className="sm:hidden">Back</span>
          </Link>

          {/* Divider */}

          <div className="h-5 w-px shrink-0 bg-zinc-800" />

          {/* Section navigation */}

          <div className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <a
              href="#top"
              aria-label="Back to top"
              title="Back to top"
              className="inline-flex shrink-0 items-center gap-2 py-5 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-accent"
            >
              <ArrowUp className="h-4 w-4" />

              <span className="hidden md:inline">Back to top</span>
            </a>

            {[
              ["Overview", "#overview"],
              ["Architecture", "#architecture"],
              ["Engineering", "#engineering"],
              ["Deployment", "#deployment"],
              ["Reliability", "#reliability"],
              ["Testing", "#testing"],
              ["Lessons", "#lessons"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="shrink-0 py-5 text-xs font-medium text-zinc-500 transition-colors duration-200 hover:text-accent"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}

      <section className="relative border-b border-zinc-800/70">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-16">
          <div className="mt-16 max-w-4xl md:mt-24">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 font-mono text-xs text-emerald-300">
                Deployed
              </span>

              <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Engineering Case Study
              </span>
            </div>

            <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
              Melo<span className="text-accent">.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-400 md:text-2xl md:leading-10">
              Engineering a real-time communication platform with distributed
              services, event-driven messaging, and production infrastructure.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <HeroButton
                href="https://melo.adithyanvalloor.com"
                external
                variant="primary"
                icon={<span aria-hidden="true">↗</span>}
              >
                Explore Melo
              </HeroButton>

              <HeroButton
                href="https://github.com/AdithyanValloor/melo"
                external
                variant="secondary"
                icon={<Icons.Github className="h-4 w-4" />}
              >
                Source code
              </HeroButton>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-y border-zinc-800/80 py-8 md:grid-cols-4">
            {[
              ["Role", "Full-stack development"],

              ["Architecture", "Distributed services"],

              ["Backend", "Node.js · TypeScript"],

              ["Infrastructure", "Docker · Google Cloud"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  {label}
                </p>

                <p className="mt-2 text-sm font-medium text-zinc-200">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-500">
            An end-to-end engineering project covering application development,
            backend architecture, service communication, containerization,
            deployment, and operational reliability.
          </p>
        </div>
      </section>

      {/* Overview */}

      <section
        id="overview"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
      >
        <SectionHeading
          number="01"
          eyebrow="Overview"
          title="More than a chat application."
          description="Building the features is only one part of the problem. The rest is designing how the services, data, and infrastructure work together."
        />

        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            <p>
              Melo is a real-time communication platform built with a
              TypeScript-based stack. It supports messaging workflows,
              conversations, group interactions, file sharing, reactions, and
              mentions.
            </p>

            <p>
              The project evolved beyond a single backend application into a
              service-oriented system. Authentication, application
              responsibilities, and messaging are separated, with dedicated
              communication mechanisms and supporting infrastructure.
            </p>

            <p>
              I worked across the application stack, from implementing features
              and data access to containerizing the services, deploying the
              application, troubleshooting production issues, and introducing
              operational visibility.
            </p>
          </div>

          <FadeIn y={12}>
            <div className="relative z-10 rounded-2xl border border-zinc-800 bg-[#0d0e12] p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Project scope
              </p>

              <ul className="mt-6 space-y-5">
                {[
                  ["Application", "Real-time messaging and user interactions"],

                  ["Backend", "TypeScript services and data access"],

                  ["Communication", "gRPC, RabbitMQ, and Socket.IO"],

                  ["Infrastructure", "Docker Compose, Nginx, Google Cloud"],

                  [
                    "Operations",

                    "Health checks, logs, and metrics in auth-service",
                  ],
                ].map(([label, value]) => (
                  <li
                    key={label}
                    className="border-b border-zinc-800/80 pb-4 last:border-0 last:pb-0"
                  >
                    <p className="text-sm font-medium text-zinc-200">{label}</p>

                    <p className="mt-1 text-sm leading-6 text-zinc-500">
                      {value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Architecture */}

      <section
        id="architecture"
        className="border-y border-zinc-800/70 bg-zinc-950/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeading
            number="02"
            eyebrow="System architecture"
            title="Separate responsibilities. Define clear boundaries."
            description="Melo brings together application services, synchronous service communication, asynchronous events, persistent storage, and real-time infrastructure."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {architecture.map((item, index) => (
              <FadeIn key={item.name} delay={index * 0.08} y={12}>
                <ArchitectureCard {...item} />
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 relative z-20 rounded-xl border border-zinc-800 bg-[#0d0e12] p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Communication and data flow
            </p>

            <div className="relative z-10 mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Request / response",

                  technology: "gRPC",

                  detail: "Synchronous communication between services.",
                },

                {
                  title: "Event delivery",

                  technology: "RabbitMQ",

                  detail:
                    "Asynchronous messaging between producers and consumers.",
                },

                {
                  title: "Live interactions",

                  technology: "Socket.IO + Redis",

                  detail: "Real-time communication and distributed presence.",
                },
              ].map((item) => (
                <div
                  key={item.technology}
                  className="relative z-10 rounded-lg border border-zinc-800 bg-[#09090b] p-4"
                >
                  <p className="text-xs text-zinc-500">{item.title}</p>

                  <p className="mt-2 font-semibold text-accent">
                    {item.technology}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-xs leading-6 text-zinc-600">
            Conceptual architecture summary. It describes the principal
            components and communication patterns, not a complete
            deployment-level topology or every request path.
          </p>
        </div>
      </section>

      {/* Engineering decisions */}

      <section
        id="engineering"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
      >
        <SectionHeading
          number="03"
          eyebrow="Engineering decisions"
          title="Why the system is designed this way."
          description="A useful architecture is not just a collection of technologies. Each component should have a clear responsibility and a reason to exist."
        />

        <div className="space-y-4">
          {engineeringDecisions.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06} y={12}>
              <article className="relative z-10 grid gap-5 rounded-xl border border-zinc-800 bg-[#0d0e12] p-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:p-8">
                <div>
                  <p className="font-mono text-xs text-accent">
                    DECISION 0{index + 1}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                      Implementation
                    </p>

                    <p className="mt-2 text-sm leading-7 text-zinc-300">
                      {item.decision}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                      Rationale
                    </p>

                    <p className="mt-2 text-sm leading-7 text-zinc-400">
                      {item.rationale}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold">Data and state management</h3>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
            PostgreSQL and MongoDB serve different persistence requirements.
            Redis supports caching and fast-access state, including distributed
            presence. These components are not interchangeable: durable data,
            cached values, and transient coordination state have different
            consistency and lifecycle requirements.
          </p>
        </div>
      </section>

      {/* Deployment */}

      <section
        id="deployment"
        className="border-y border-zinc-800/70 bg-zinc-950/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeading
            number="04"
            eyebrow="Production deployment"
            title="From local development to a deployed system."
            description="The deployment work connected application code with the infrastructure needed to run it outside the development environment."
          />

          <div className="space-y-0">
            {deploymentSteps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.07} y={10}>
                <div className="grid grid-cols-[48px_1fr] gap-5 md:grid-cols-[64px_1fr] md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center relative z-10 rounded-full border border-zinc-700 bg-[#0d0e12] font-mono text-xs text-accent">
                      {step.number}
                    </div>

                    {index < deploymentSteps.length - 1 && (
                      <div className="my-2 min-h-12 w-px flex-1 bg-zinc-800" />
                    )}
                  </div>

                  <div className="pb-10">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="relative z-10 rounded-xl border border-zinc-800 bg-[#0d0e12] p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Infrastructure stack
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Ubuntu 24.04",

                "Google Cloud VM",

                "Docker",

                "Docker Compose",

                "Nginx",

                "HTTPS",

                "GitHub Actions",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-800 bg-[#09090b] px-3 py-2 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-400">
              Container orchestration, reverse proxy configuration, network
              connectivity, environment variables, permissions, and service
              readiness all influence whether the deployed application works
              correctly. Production verification therefore extends beyond
              successfully building the images or starting the containers.
            </p>
          </div>
        </div>
      </section>

      {/* Reliability */}

      <section
        id="reliability"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
      >
        <SectionHeading
          number="05"
          eyebrow="Reliability and observability"
          title="Making service behavior easier to investigate."
          description="The application needs more than successful requests. When something goes wrong, the system should provide useful signals to support diagnosis."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {reliabilityItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.07} y={12}>
              <article className="relative z-10 rounded-xl border border-zinc-800 bg-[#0d0e12] p-6 md:p-7">
                <p className="font-mono text-xs text-accent">0{index + 1}</p>

                <h3 className="mt-4 text-lg font-semibold text-zinc-100">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={12}>
          <div className="relative z-10 mt-8 rounded-xl border border-zinc-800 bg-[#0d0e12] p-6 md:p-8">
            <h3 className="text-lg font-semibold">
              Current implementation scope
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Pino structured logging and the metrics endpoint have been added
              to the authentication service. Health checks and structured error
              handling are part of the reliability work. This does not imply
              that centralized log aggregation, distributed tracing, alerting,
              or comprehensive metrics instrumentation across every service have
              been implemented.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Testing */}

      <section
        id="testing"
        className="scroll-mt-10 border-y border-zinc-800/70 bg-zinc-950/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeading
            number="06"
            eyebrow="Testing and maintainability"
            title="Designing code that can be verified."
            description="Maintainable backend systems need testable boundaries, explicit dependencies, and predictable failure behavior."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <FadeIn y={12}>
              <article className="relative z-10 rounded-xl border border-zinc-800 bg-[#0d0e12] p-6 md:p-8">
                <p className="font-mono text-xs text-accent">TESTING</p>

                <h3 className="mt-4 text-xl font-semibold">Vitest</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Vitest is used for authentication-service tests, including
                  service logic, authentication middleware, OTP behavior, and
                  controller flows. Mocking external dependencies helps isolate
                  the behavior being tested.
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={0.08} y={12}>
              <article className="relative z-10 rounded-xl border border-zinc-800 bg-[#0d0e12] p-6 md:p-8">
                <p className="font-mono text-xs text-accent">CODE DESIGN</p>

                <h3 className="mt-4 text-xl font-semibold">
                  Repository pattern and dependency injection
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  The authentication module uses repository abstractions and
                  dependency injection to separate application logic from
                  persistence implementations. This makes dependencies more
                  explicit and enables isolated tests.
                </p>
              </article>
            </FadeIn>
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-500">
            Test coverage and passing status should be assessed from the current
            test run. A test suite is valuable only when its assertions are
            meaningful and the failures are understood.
          </p>
        </div>
      </section>

      {/* Lessons learned */}

      <section
        id="lessons"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-20 md:px-10 md:py-28"
      >
        <SectionHeading
          number="07"
          eyebrow="Lessons learned"
          title="What building and operating Melo taught me."
          description="The most valuable part of the project was learning how application code, service boundaries, and infrastructure interact when the system is running."
        />

        <div className="space-y-4">
          {lessons.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-3 border-b border-zinc-800/80 pb-6 pt-2 md:grid-cols-[32px_1fr] md:gap-5"
            >
              <span className="font-mono text-sm text-accent">
                0{index + 1}
              </span>

              <div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technology stack */}

      <section className="border-y border-zinc-800/70 bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <SectionHeading
            number="08"
            eyebrow="Technology stack"
            title="The tools behind Melo."
            description="The stack spans application development, data persistence, inter-service communication, testing, and deployment."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {technologies.map(({ name, Icon, color }, index) => (
              <FadeIn
                key={name}
                delay={Math.min(index * 0.025, 0.3)}
                y={6}
                className="h-full"
              >
                <div className="group flex h-full min-h-14 items-center gap-3 rounded-xl border border-zinc-800 bg-[#0d0e12] px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-[#111217] sm:px-4">
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ color }}
                  />

                  <span className="min-w-0 text-sm font-medium text-zinc-300 transition-colors duration-200 group-hover:text-white">
                    {name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <FadeIn y={14}>
          <div className="relative z-10 rounded-2xl border border-zinc-800 bg-[#0d0e12] p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              End of case study
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Built to understand the entire system, not just the code.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Melo brought together full-stack development, backend
              architecture, asynchronous communication, infrastructure, and
              production troubleshooting in one end-to-end engineering project.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <HeroButton
                href="https://melo.adithyanvalloor.com"
                external
                variant="primary"
                icon={<span aria-hidden="true">↗</span>}
              >
                Explore the application
              </HeroButton>

              <HeroButton
                href="https://github.com/AdithyanValloor/melo"
                external
                variant="secondary"
                icon={<Icons.Github className="h-4 w-4" />}
              >
                View source code
              </HeroButton>

              <HeroButton
                href="/#projects"
                variant="ghost"
                icon={<ArrowLeft className="h-4 w-4" />}
              >
                Back to portfolio
              </HeroButton>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
