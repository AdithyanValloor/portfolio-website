import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Icons } from "@/components/ui/Icons";
import { FolderGit2 } from "lucide-react";
import Link from "next/link";

export function OtherProjects() {
  const projects = [
    {
      title: "Distributed Cache Service",
      description: "An experimental consistent-hashing based distributed caching layer written in Go to understand Memcached internals.",
      tech: ["Go", "TCP/IP", "Concurrency", "Raft"],
      github: "#"
    },
    {
      title: "Rate Limiting Middleware",
      description: "A highly concurrent rate limiting proxy exploiting Redis Lua scripts to maintain accurate sliding window counters.",
      tech: ["Node.js", "Redis", "Lua", "High Throughput"],
      github: "#"
    },
    {
      title: "Container Orchestrator Micro",
      description: "A minimalistic process manager inspired by Docker and Kubernetes orchestration, utilizing Linux namespaces and cgroups.",
      tech: ["Linux", "Bash", "System Programming"],
      github: "#"
    }
  ];

  return (
    <Section id="other-projects" className="pt-0 md:pt-0">
      <FadeIn>
        <h3 className="text-xl font-bold text-zinc-100 mb-8">Other Engineering Work</h3>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <FadeIn key={project.title} delay={0.1 * (idx + 1)}>
            <div className="p-6 h-full flex flex-col bg-zinc-900/40 border border-zinc-800/60 rounded-xl hover:bg-zinc-900/60 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <FolderGit2 className="w-8 h-8 text-accent" />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <Link href={project.github} className="text-zinc-500 hover:text-zinc-300 transition-colors">
                      <Icons.Github className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-zinc-200 mb-3">{project.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap items-center gap-2 mt-auto">
                {project.tech.map(tech => (
                  <li key={tech} className="text-xs font-mono text-zinc-500">{tech}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
