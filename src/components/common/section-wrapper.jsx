"use client";

import { cn } from "../../lib/utils.js";

// interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
//   id: string;
//   children: React.ReactNode;
//   className?: string;
// }

export function SectionWrapper({ id, children, className, ...props }) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen py-16 md:py-24 overflow-hidden", 
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
