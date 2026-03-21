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
            title="Choose how you want to wake up on the Murray."
            description="Lakefront resorts with water views, riverside cabins with character, family holiday parks by the beach, or quiet nature lodges surrounded by bush. The right stay turns a visit into a proper escape."
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
            title="Match your stay to the destination."
            description="Each part of Moira Shire has its own rhythm — family beach towns, polished lake resorts, produce country pit stops, and quieter nature retreats. Find the one that fits."
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
        title="Now pair your stay with something to do."
        description="A beach day, a produce trail, a golf round, a river walk — the best trips here weave the stay and the experience together."
        image="/local/lake/sebel-lake.jpg"
        primaryHref="/plan"
        primaryLabel="Plan Your Trip"
      />
    </div>
  );
}
