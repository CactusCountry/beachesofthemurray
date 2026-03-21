"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { LinkButton } from "@/components/ui/link-button";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  logoSrc?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export function HeroSection({
  eyebrow,
  title,
  description,
  image,
  logoSrc,
  primaryCta,
  secondaryCta
}: HeroSectionProps) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 120]);
  const backgroundScale = useTransform(scrollY, [0, 600], [1, 1.12]);

  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink pt-20 text-white sm:min-h-[100svh] sm:pt-24">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          y: backgroundY,
          scale: backgroundScale,
          backgroundImage: `linear-gradient(180deg, rgba(9,20,31,0.25) 0%, rgba(9,20,31,0.5) 35%, rgba(9,20,31,0.88) 100%), url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />
      <div className="absolute inset-0 bg-grain opacity-80" />

      <div className="relative z-10 mx-auto flex w-full max-w-shell px-5 pb-12 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/88 sm:mb-5 sm:text-xs sm:tracking-[0.34em]"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl font-display text-[clamp(2.95rem,13vw,5.4rem)] leading-[0.92] tracking-[-0.04em] sm:text-[clamp(3.5rem,9vw,8rem)] sm:leading-[0.9]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 max-w-xl text-[15px] leading-6 text-white/76 sm:mt-6 sm:text-lg sm:leading-7"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap"
          >
            <LinkButton href={primaryCta.href} className="w-full sm:w-auto">
              {primaryCta.label}
            </LinkButton>
            <LinkButton href={secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {secondaryCta.label}
            </LinkButton>
          </motion.div>
        </div>
        {logoSrc ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden justify-self-end lg:block"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <Image
                src={logoSrc}
                alt="Beaches of The Murray brand mark"
                width={577}
                height={172}
                className="h-auto w-[20rem] drop-shadow-[0_18px_42px_rgba(0,0,0,0.28)]"
              />
            </div>
          </motion.div>
        ) : null}
        </div>
      </div>
    </section>
  );
}
