import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ 
  children, 
  id, 
  className 
}: { 
  children: ReactNode; 
  id?: string; 
  className?: string 
}) {
  return (
    <section 
      id={id} 
      className={cn("w-full max-w-3xl mx-auto px-6 py-20 md:py-32", className)}
    >
      {children}
    </section>
  );
}
