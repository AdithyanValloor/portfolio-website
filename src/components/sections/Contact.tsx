import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const contactLinks = [
  {
    label: "Email",
    value: "vallooradithyan@gmail.com",
    href: "mailto:vallooradithyan@gmail.com",
    icon: Mail,
    hoverClass: "group-hover:text-[#EA4335]",
  },
  {
    label: "WhatsApp",
    value: "+91 90744 82514",
    href: "https://wa.me/919074482514",
    icon: SiWhatsapp,
    hoverClass: "group-hover:text-[#25D366]",
  },
  {
    label: "Instagram",
    value: "@adithyan_valloor",
    href: "https://instagram.com/adithyan_valloor",
    icon: SiInstagram,
    hoverClass: "group-hover:text-[#E4405F]",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      className="flex min-h-screen items-center justify-center"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Heading */}
        <FadeIn className="text-center">
          <span
            className="
              mb-4 block
              font-mono text-xs font-medium
              uppercase tracking-[0.22em]
              text-accent
            "
          >
            05. What's Next?
          </span>

          <h2
            className="
              font-display
              text-5xl
              font-normal
              leading-[1.05]
              tracking-[-0.035em]
              text-zinc-100
              md:text-6xl
            "
          >
            Let's connect<span className="text-accent">.</span>
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-xl
              text-base
              leading-7
              tracking-[-0.005em]
              text-zinc-500
              md:text-lg md:leading-8
            "
          >
            Open to engineering opportunities, collaborations,
            and conversations about building great systems.
          </p>
        </FadeIn>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <FadeIn
                key={contact.label}
                delay={0.1 * (index + 1)}
              >
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group relative
                    flex h-full min-w-0
                    flex-col overflow-hidden
                    rounded-xl
                    border border-zinc-800/60
                    bg-[#0d0e12]
                    p-6

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-0.5
                    hover:border-zinc-700
                    hover:bg-[#0f1014]
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
                  "
                >
                  {/* Subtle top accent */}
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

                  {/* Subtle corner glow */}
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

                  {/* Icon + Arrow */}
                  <div className="relative mb-8 flex items-start justify-between">
                    <div
                      className="
                        rounded-lg
                        border border-zinc-800/80
                        bg-zinc-900/80
                        p-3

                        transition-all
                        duration-300
                        ease-out

                        group-hover:border-zinc-700
                        group-hover:bg-zinc-800/80
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        className={`
                          h-5 w-5
                          text-zinc-500
                          transition-all
                          duration-300
                          ease-out

                          group-hover:scale-105
                          ${contact.hoverClass}
                        `}
                      />
                    </div>

                    <ArrowUpRight
                      className="
                        h-4 w-4
                        text-zinc-700

                        transition-all
                        duration-300
                        ease-out

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-accent
                      "
                    />
                  </div>

                  {/* Contact information */}
                  <div className="relative mt-auto min-w-0">
                    <p
                      className="
                        mb-2
                        font-mono
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-zinc-600

                        transition-colors
                        duration-200

                        group-hover:text-zinc-500
                      "
                    >
                      {contact.label}
                    </p>

                    <p
                      className="
                        whitespace-nowrap
                        text-sm
                        font-medium
                        leading-5
                        tracking-[-0.01em]
                        text-zinc-400

                        transition-colors
                        duration-200

                        group-hover:text-zinc-100
                      "
                    >
                      {contact.value}
                    </p>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}