// import { ReactNode } from "react";
// import { cn } from "@/lib/utils";

// export function Badge({ children, className }: { children: ReactNode; className?: string }) {
//   return (
//     <span className={cn(
//       "inline-flex items-center rounded-md bg-zinc-800/60 px-3 py-1 text-xs font-mono font-medium text-zinc-300 border border-zinc-700/50",
//       className
//     )}>
//       {children}
//     </span>
//   );
// }


"use client";

import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  typing?: boolean;
  speed?: number;
};

export function Badge({
  children,
  className,
  typing = false,
  speed = 70,
}: BadgeProps) {
  const text = typeof children === "string" ? children : "";
  const [displayedText, setDisplayedText] = useState(
    typing ? "" : text
  );

  useEffect(() => {
    if (!typing || !text) return;

    let index = 0;
    let deleting = false;
    let timeout: NodeJS.Timeout;

    const animate = () => {
      if (!deleting) {
        // Typing
        if (index < text.length) {
          index++;
          setDisplayedText(text.slice(0, index));

          timeout = setTimeout(animate, speed);
        } else {
          // Finished typing → wait 5 seconds
          timeout = setTimeout(() => {
            deleting = true;
            animate();
          }, 5000);
        }
      } else {
        // Deleting
        if (index > 0) {
          index--;
          setDisplayedText(text.slice(0, index));

          timeout = setTimeout(animate, speed / 2);
        } else {
          // Finished deleting → wait 1 second before typing again
          timeout = setTimeout(() => {
            deleting = false;
            animate();
          }, 1000);
        }
      }
    };

    animate();

    return () => clearTimeout(timeout);
  }, [text, typing, speed]);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded bg-zinc-800/60 px-3 h-7 text-xs font-mono font-medium text-zinc-300 border border-zinc-700/50",
        className
      )}
    >
      {typing ? displayedText : children}

      {typing && (
        <span
          className="
            ml-[2px]
            inline-block
            h-[1em]
            w-[1px]
            bg-zinc-300
            animate-[blink_1s_step-end_infinite]
          "
        />
      )}
    </span>
  );
}