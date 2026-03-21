import Image from "next/image";
import Link from "next/link";

import type { BeachHighlight } from "@/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

type FeaturedBeachesSectionProps = {
  beaches: BeachHighlight[];
};

export function FeaturedBeachesSection({
  beaches
}: FeaturedBeachesSectionProps) {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="space-y-12">
        <SectionIntro
          eyebrow="Beach Highlights"
          title="The first real beach imagery is in, and it changes the page immediately."
          description="These four named beaches now give the brand something concrete to stand on. This section is also the scaffold we can keep extending as you feed through more towns, beaches, and operator images."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {beaches.map((beach, index) => (
            <Reveal key={beach.slug} delay={index * 0.06}>
              <Link
                href={beach.href}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-[#f8f3eb] shadow-glow transition hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={beach.image}
                    alt={beach.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex h-full flex-col gap-4 p-5">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-river">
                      {beach.region}
                    </p>
                    <h3 className="font-display text-3xl leading-none text-ink">
                      {beach.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-ink/72">
                    {beach.description}
                  </p>
                  <p className="mt-auto text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">
                    Explore More
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
