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
            title="Four ways to wake up on the Murray."
            description="A balcony over Lake Mulwala. A cabin with a path to the river. A holiday park where the kids disappear on bikes until dinner. A lodge in the bush near Barmah where you hear birds instead of traffic. Pick the one that sounds like your kind of morning."
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
            title="The town makes the trip."
            description="Cobram and Tocumwal for the beaches. Yarrawonga for the lake and the golf. Barmah for the bush. Numurkah for the food. Each one puts you close to different things."
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
        title="You've got the stay. Now fill the days."
        description="Thompsons Beach is ten minutes from most Cobram stays. The Farm Gate Trail starts twenty minutes from Yarrawonga. Barmah's forest is a half-hour drive from just about anywhere."
        image="/local/lake/sebel-lake.jpg"
        primaryHref="/plan"
        primaryLabel="Explore Weekends"
      />
    </div>
  );
}
