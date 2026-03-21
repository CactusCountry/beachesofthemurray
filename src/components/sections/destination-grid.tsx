import Link from "next/link";

import type { Destination } from "@/content";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

type DestinationGridProps = {
  destinations: Destination[];
  eyebrow: string;
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
};

export function DestinationGrid({
  destinations,
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel
}: DestinationGridProps) {
  return (
    <section className="bg-sand/35 py-24 sm:py-32">
      <Container className="space-y-12">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          description={description}
          action={
            actionHref && actionLabel ? (
              <LinkButton href={actionHref} variant="ghost">
                {actionLabel}
              </LinkButton>
            ) : null
          }
        />

        <div className="grid gap-5 lg:grid-cols-12">
          {destinations.map((destination, index) => {
            const isFeature = index === 0 || index === 3;
            const spotlight = destination.bestFor.slice(0, 2).join(" / ");

            return (
              <Reveal
                key={destination.slug}
                delay={index * 0.08}
                className={isFeature ? "lg:col-span-7" : "lg:col-span-5"}
              >
                <Link
                  href={`/destinations/${destination.slug}`}
                  className="group relative flex min-h-[23rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-ink shadow-glow sm:min-h-[27rem]"
                >
                  <div
                    className="absolute inset-0 scale-100 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.02) 0%, rgba(8,18,28,0.12) 44%, rgba(8,18,28,0.42) 72%, rgba(8,18,28,0.78) 100%), url(${destination.heroImage})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="relative mt-auto flex w-full flex-col gap-3 p-5 text-white sm:gap-4 sm:p-8">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/68">
                      {destination.mapLabel}
                    </p>
                    <div className="max-w-[34rem] space-y-3">
                      <h3 className="font-display text-[2.2rem] leading-[0.95] sm:text-4xl">
                        {destination.name}
                      </h3>
                      <p className="max-w-xl text-[15px] leading-6 text-white/82 sm:text-base sm:leading-7">
                        {destination.tagline}
                      </p>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                        {spotlight}
                      </p>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/88">
                      Discover Destination
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
