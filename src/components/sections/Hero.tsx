import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import {
  FileText,
  Terminal,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section
      id="home"
      className="
        mx-auto flex min-h-screen w-full max-w-6xl
        flex-col justify-center
        px-6 pb-24 pt-32
        lg:px-8
      "
    >
      <div className="max-w-4xl">
        {/* Availability */}
        <FadeIn y={10}>
          <div className="mb-8 flex items-center gap-3">
            <Terminal className="h-4 w-4 text-accent" />

            <Badge>
              Available for Engineering Opportunities
            </Badge>
          </div>
        </FadeIn>

        {/* Name */}
        <FadeIn delay={0.1} y={12}>
          <h1
            className="
              font-display
              text-6xl
              leading-[0.9]
              tracking-[-0.035em]
              text-zinc-100
              sm:text-7xl
              md:text-8xl
              lg:text-[7rem]
            "
          >
            Adithyan Valloor
          </h1>
        </FadeIn>

        {/* Role */}
        <FadeIn delay={0.2} y={10}>
          <div className="mb-5 mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-accent/70" />

            <h2
              className="
                text-sm
                font-medium
                tracking-wide
                text-zinc-400
                md:text-base
              "
            >
              Backend-focused Full-Stack Engineer
            </h2>
          </div>
        </FadeIn>

       

        {/* Description */}
        <FadeIn delay={0.3} y={10}>
          <p
            className="
              mb-10
              max-w-xl
              text-base
              leading-7
              tracking-[-0.005em]
              text-zinc-500
              md:text-lg
              md:leading-8
            "
          >
            I build reliable web systems with a focus on
            backend architecture, infrastructure, and what
            happens beneath the application layer.
          </p>
        </FadeIn>

        {/* Actions */}
        <FadeIn
          delay={0.4}
          y={10}
          className="flex flex-wrap items-center gap-3"
        >
          <HeroButton
            href="https://github.com/AdithyanValloor"
            external
            variant="primary"
            icon={<Icons.Github className="h-4 w-4" />}
          >
            GitHub
          </HeroButton>

          <HeroButton
            href="https://www.linkedin.com/in/adithyan-valloor-6a90a82aa/"
            external
            variant="secondary"
            icon={<Icons.Linkedin className="h-4 w-4" />}
          >
            LinkedIn
          </HeroButton>

          <HeroButton
            href="/resume.pdf"
            external
            variant="ghost"
            icon={<FileText className="h-4 w-4" />}
          >
            Resume
          </HeroButton>
        </FadeIn>
         {/* Location / Availability */}
        <FadeIn delay={0.25} y={8}>
          <div
            className="
              mb-7
              flex flex-wrap
              items-center
              gap-x-5
              gap-y-2
              font-mono
              text-[10px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-zinc-500
              md:text-[11px]
              py-8
            "
          >
            <span className="flex items-center gap-2">
              <MapPin
                aria-hidden="true"
                className="h-3.5 w-3.5 text-accent"
              />

              <span>Idukki, Kerala, India</span>
            </span>

            <span
              aria-hidden="true"
              className="text-zinc-700"
            >
              /
            </span>

            <span>Remote · Worldwide</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function HeroButton({
  href,
  children,
  icon,
  variant,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  variant: "primary" | "secondary" | "ghost";
  external?: boolean;
}) {
  const classes = {
    primary: `
      bg-zinc-100
      text-zinc-950
      hover:bg-white
      hover:shadow-lg
      hover:shadow-white/5
    `,

    secondary: `
      border border-zinc-800
      bg-zinc-900/70
      text-zinc-200
      hover:border-zinc-700
      hover:bg-zinc-800
      hover:text-white
    `,

    ghost: `
      border border-zinc-800
      bg-transparent
      text-zinc-400
      hover:border-accent/40
      hover:bg-accent/5
      hover:text-zinc-100
    `,
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        group
        inline-flex
        items-center
        gap-2
        rounded-md
        px-4
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200
        hover:-translate-y-0.5
        active:translate-y-0
        ${classes[variant]}
      `}
    >
      <span className="transition-transform duration-200 group-hover:scale-110">
        {icon}
      </span>

      <span>{children}</span>

      {external && (
        <ArrowUpRight
          className="
            h-3.5 w-3.5
            -translate-x-1 translate-y-1
            opacity-0
            transition-all
            duration-200
            group-hover:translate-x-0
            group-hover:translate-y-0
            group-hover:opacity-60
          "
        />
      )}
    </Link>
  );
}