import { type ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  align = "left",
  id,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="container-max">
        {(eyebrow || title || description) && (
          <div className={`max-w-3xl mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-lemon">
                <span className="h-1.5 w-1.5 rounded-full bg-lemon animate-pulse" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-black text-balance leading-[1.02]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg text-muted-foreground text-pretty">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
