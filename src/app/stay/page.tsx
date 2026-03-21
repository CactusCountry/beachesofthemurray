import Link from "next/link";

import { destinations, stayCategories } from "@/content";
import { Container } from "@/components/ui/container";
import { ImageCta } from "@/components/sections/image-cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Stay | Beaches of The Murray",
  description:
    "Find stay styles for Beaches of The Murray, from family beach bases to lakefront resorts and nature-led escapes."
});

export default function StayPage() {
  return (
    <div className="bg-white pt-28">
      <section className="py-24 sm:py-32">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Stay"
            title="Pick the style of stay that helps the trip run longer."
            description="The tourism strategy calls out both premium river-view accommodation and family-friendly holiday product. This page makes room for both."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {stayCategories.map((category, index) => (
              <Reveal key={category.slug} delay={index * 0.08}>
                <article className="overflow-hidden rounded-[2rem] border border-ink/10 bg-sand/25 shadow-glow">
                  <div
                    className="min-h-[18rem]"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.06), rgba(8,18,28,0.44)), url(${category.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="space-y-4 p-6 sm:p-8">
                    <h2 className="font-display text-3xl leading-none text-ink sm:text-4xl">
                      {category.name}
                    </h2>
                    <p className="text-base leading-7 text-ink/72">{category.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand/35 py-24 sm:py-28">
        <Container className="space-y-10">
          <SectionIntro
            eyebrow="Where To Base Yourself"
            title="Match the stay style to the destination strategy."
            description="Each hub can now support a slightly different audience mix, from family beach holidays to lake leisure and quieter nature-led breaks."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <Reveal key={destination.slug} delay={index * 0.06}>
                <Link
                  href={`/destinations/${destination.slug}`}
                  className="rounded-[1.5rem] border border-ink/10 bg-white px-5 py-6 transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <p className="text-xs uppercase tracking-[0.26em] text-river">
                    {destination.mapLabel}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-none text-ink">
                    {destination.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink/72">{destination.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ImageCta
        eyebrow="Next"
        title="Pair the stay with beaches, produce, events, or golf."
        description="Accommodation works harder when it is connected to the wider destination story, not left as a dead-end booking category."
        image="/local/lake/sebel-lake.jpg"
        primaryHref="/plan"
        primaryLabel="Go To Planning"
      />
    </div>
  );
}
