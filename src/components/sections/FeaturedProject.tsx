import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

export function FeaturedProject() {
  const stack = ["Node.js", "TypeScript", "Redis", "Socket.IO", "MongoDB", "Docker", "Nginx"];

  return (
    <Section id="projects">
      <FadeIn>
        <h2 className="text-2xl font-bold text-zinc-100 mb-10 flex items-center gap-3">
          <span className="text-accent text-lg font-mono">03.</span> Featured Architecture
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="relative rounded-2xl bg-[#0d0e12] border border-zinc-800/60 overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-emerald-500 opacity-50" />
          
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-zinc-100 mb-3">Whisp</h3>
                <p className="text-zinc-400 text-lg max-w-xl">
                  A real-time communication platform engineered for high-concurrency event broadcasting and resilient connection handling.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link href="#" className="p-2 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 text-zinc-300 transition-colors">
                  <Icons.Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-2 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 text-zinc-300 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Architectural Highlights
                </h4>
                <ul className="space-y-3">
                  <li className="text-zinc-300 flex items-start gap-2 before:content-['▹'] before:text-accent before:pt-1">
                    <span><strong>Modular Monolith:</strong> Designed with domain barriers allowing future service extraction.</span>
                  </li>
                  <li className="text-zinc-300 flex items-start gap-2 before:content-['▹'] before:text-accent before:pt-1">
                    <span><strong>Real-time Layer:</strong> WebSockets orchestrated via Socket.IO with Redis pub/sub for distributed event bus capabilities.</span>
                  </li>
                  <li className="text-zinc-300 flex items-start gap-2 before:content-['▹'] before:text-accent before:pt-1">
                    <span><strong>Infrastructure:</strong> Containerized via Docker and load balanced through Nginx.</span>
                  </li>
                  <li className="text-zinc-300 flex items-start gap-2 before:content-['▹'] before:text-accent before:pt-1">
                    <span><strong>Data Management:</strong> MongoDB for transactional state and Redis for session cache and pub/sub.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-zinc-800/50">
              {stack.map((tech) => (
                <Badge key={tech} className="bg-zinc-900 text-zinc-400">{tech}</Badge>
              ))}
            </div>
            
            <div className="mt-8">
               <Link href="#" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-medium">
                 Read the detailed engineering case study <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
