import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import {
  Server,
  Database,
  Container,
  LayoutTemplate,
  Zap,
  ServerCog,
  Network,
  Route,
} from "lucide-react";
import {
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiLinux,
  SiNginx,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend",
    description: "APIs, real-time communication & server-side systems",
    icon: Server,
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#68A063" },
      { name: "Express", Icon: SiExpress, color: "#E4E4E7" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "WebSockets", Icon: Zap, color: "#F59E0B" },
      { name: "Socket.IO", Icon: SiSocketdotio, color: "#E4E4E7" },
    ],
  },
  {
    title: "Databases & Systems",
    description: "Data storage, caching & system architecture",
    icon: Database,
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Redis", Icon: SiRedis, color: "#FF4438" },
      { name: "System Design", Icon: ServerCog, color: "#60A5FA" },
    ],
  },
  {
    title: "Infrastructure",
    description: "Containers, networking & traffic management",
    icon: Container,
    skills: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Nginx", Icon: SiNginx, color: "#009639" },
      { name: "Networking", Icon: Network, color: "#22D3EE" },
      { name: "Reverse Proxies", Icon: Route, color: "#34D399" },
    ],
  },
  {
    title: "Frontend",
    description: "Modern interfaces & component-driven development",
    icon: LayoutTemplate,
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#E4E4E7" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Semantic HTML", Icon: SiHtml5, color: "#E34F26" },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      className="max-w-none px-0 py-0 md:py-0"
    >
      <div className="w-full border-y border-zinc-800/50 bg-zinc-900/30 py-16 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-6">

          <FadeIn>
            <SectionHeading />
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                delay={0.08 * (index + 1)}
              />
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}

function SectionHeading() {
  return (
    <div className="mb-10 flex items-end justify-between">
      <div>
        <h2
          className="
            flex items-center gap-3
            text-2xl font-semibold
            tracking-tight
            text-zinc-100
          "
        >
          <span
            className="
              font-mono
              text-base font-medium
              tracking-normal
              text-accent
            "
          >
            02.
          </span>

          <span>Skills</span>
        </h2>

        <p
          className="
            mt-3 max-w-lg
            text-sm leading-6
            tracking-[-0.005em]
            text-zinc-500
          "
        >
          Technologies and engineering concepts I use to build
          reliable, scalable web systems.
        </p>
      </div>
    </div>
  );
}

type SkillCategory = (typeof skillCategories)[number];

interface SkillCardProps {
  category: SkillCategory;
  delay: number;
}

function SkillCard({
  category,
  delay,
}: SkillCardProps) {
  const Icon = category.icon;

  return (
    <FadeIn delay={delay}>
      <article
        className="
          group relative h-full overflow-hidden rounded-xl
          border border-zinc-800/60
          bg-[#0d0e12]
          p-6

          transition-all duration-300
          ease-out

          hover:-translate-y-0.5
          hover:border-zinc-700
          hover:bg-[#0f1014]
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
        "
      >
        {/* Very subtle top accent */}
        <div
          className="
            pointer-events-none
            absolute inset-x-8 top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-accent/0
            to-transparent
            opacity-0
            transition-all duration-500
            group-hover:inset-x-4
            group-hover:via-accent/60
            group-hover:opacity-100
          "
        />

        {/* Very subtle corner glow */}
        <div
          className="
            pointer-events-none
            absolute -right-16 -top-16
            h-32 w-32
            rounded-full
            bg-accent/5
            blur-3xl
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        {/* Category header */}
        <div className="relative mb-6">
          <div className="flex items-center gap-3">

            {/* Category icon */}
            <div
              className="
                rounded-lg
                border border-zinc-800/80
                bg-zinc-900/80
                p-2.5

                transition-all duration-300 ease-out

                group-hover:border-zinc-700
                group-hover:bg-zinc-800/80
                group-hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]
              "
            >
              <Icon
                className="
                  h-5 w-5
                  text-zinc-500

                  transition-all duration-300 ease-out

                  group-hover:scale-105
                  group-hover:text-accent
                "
              />
            </div>

            <h3
              className="
                text-lg
                font-semibold
                tracking-[-0.015em]
                text-zinc-200

                transition-colors duration-300

                group-hover:text-zinc-100
              "
            >
              {category.title}
            </h3>
          </div>

          <p
            className="
              mt-3
              text-xs
              leading-5
              tracking-[0.005em]
              text-zinc-500
            "
          >
            {category.description}
          </p>
        </div>

        {/* Skills */}
        <ul className="grid gap-1">
          {category.skills.map(
            ({ name, Icon: SkillIcon, color }) => (
              <li
                key={name}
                className="
                  group/skill

                  flex items-center
                  justify-between

                  rounded-lg
                  px-3 py-2.5

                  transition-all duration-200 ease-out

                  hover:bg-zinc-800/40
                "
              >
                <div className="flex items-center gap-3">

                  {/* Technology icon */}
                  <span
                    className="
                      flex h-6 w-6
                      items-center justify-center
                      rounded-md

                      transition-all duration-200
                    "
                  >
                    <SkillIcon
                      aria-hidden="true"
                      className="
                        h-4 w-4 shrink-0

                        transition-all duration-200
                        ease-out

                        group-hover/skill:scale-110
                      "
                      style={{ color }}
                    />
                  </span>

                  {/* Technology name */}
                  <span
                    className="
                      text-sm
                      font-medium
                      tracking-[-0.005em]
                      text-zinc-400

                      transition-all duration-200

                      group-hover/skill:translate-x-0.5
                      group-hover/skill:text-zinc-100
                    "
                  >
                    {name}
                  </span>
                </div>

                {/* Hover indicator */}
                <span
                  className="
                    h-1 w-1
                    rounded-full
                    bg-accent

                    opacity-0
                    scale-0

                    transition-all duration-200

                    group-hover/skill:scale-100
                    group-hover/skill:opacity-100
                  "
                />
              </li>
            )
          )}
        </ul>
      </article>
    </FadeIn>
  );
}