import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: ReactNode;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  action,
  className
}: SectionIntroProps) {
  const centered = align === "center";
  const headingTone = tone === "light" ? "text-white" : "text-ink";
  const bodyTone = tone === "light" ? "text-white/76" : "text-ink/72";
  const eyebrowTone = tone === "light" ? "text-white/62" : "text-river";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.28em]",
            eyebrowTone
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className={cn("font-display text-4xl leading-none sm:text-5xl", headingTone)}>
          {title}
        </h2>
        <p className={cn("max-w-xl text-base leading-7 sm:text-lg", bodyTone)}>
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
