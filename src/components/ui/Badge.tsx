import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-md bg-zinc-800/60 px-2 py-1 text-xs font-mono font-medium text-zinc-300 border border-zinc-700/50",
      className
    )}>
      {children}
    </span>
  );
}
