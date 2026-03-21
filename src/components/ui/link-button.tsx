import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-gold text-ink shadow-glow hover:bg-gold/90 focus-visible:outline-gold",
  secondary:
    "border border-white/40 bg-white/10 text-white hover:bg-white/16 focus-visible:outline-white",
  ghost:
    "border border-ink/15 bg-transparent text-ink hover:border-gold/60 hover:bg-gold/8 focus-visible:outline-river"
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
