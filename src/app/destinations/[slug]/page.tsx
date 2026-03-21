import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { destinations } from "@/content";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/metadata";
import { getDestinationBySlug, getRelatedExperiences } from "@/lib/content";

type DestinationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug
  }));
}

export async function generateMetadata({
  params
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return buildMetadata({
      title: "Destination Not Found | Beaches of The Murray",
      description: "This destination could not be found."
    });
  }

  return buildMetadata({
    title: `${destination.name} | Beaches of The Murray`,
    description: destination.summary,
    path: `/destinations/${destination.slug}`,
    image: destination.heroImage
  });
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedExperiences = getRelatedExperiences(destination.slug);

  return (
    <div className="pt-24">
      <section
        className="relative overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.28), rgba(8,18,28,0.82)), url(${destination.heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-grain opacity-70" />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-white/68">
              {destination.mapLabel}
            </p>
            <div className="space-y-4">
              <h1 className="font-display text-5xl leading-none sm:text-7xl">
                {destination.name}
              </h1>
              <p className="text-lg leading-8 text-white/78">{destination.tagline}</p>
              <p className="max-w-2xl text-base leading-7 text-white/74 sm:text-lg">
                {destination.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/plan">Plan a Weekend Here</LinkButton>
              <LinkButton href="/see-do" variant="secondary">
                Explore Nearby Experiences
              </LinkButton>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-white/12 bg-white/10 p-5 backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/56">Best For</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {destination.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/88"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-white/12 pt-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/56">Highlights</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/76">
                {destination.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand/30 py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-river">
              Gallery
            </p>
            <h2 className="font-display text-4xl leading-none text-ink sm:text-5xl">
              The textures of the place matter.
            </h2>
            <p className="max-w-lg text-base leading-7 text-ink/72">
              The light on the water, the colour of the sand, the shape of the
              gum trees — every stretch of river here looks and feels a little
              different.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {destination.gallery.map((image, index) => (
              <Reveal key={image} delay={index * 0.08}>
                <div
                  className={`rounded-[1.75rem] ${
                    index === 0 ? "sm:col-span-2 min-h-[18rem]" : "min-h-[14rem]"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.08), rgba(8,18,28,0.2)), url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-river">
                Nearby Experiences
              </p>
              <h2 className="font-display text-4xl leading-none text-ink sm:text-5xl">
                Start here, then shape the rest of the day around it.
              </h2>
            </div>
            <Link href="/see-do" className="text-sm uppercase tracking-[0.24em] text-ink/72">
              Browse all experiences
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {relatedExperiences.map((experience, index) => (
              <Reveal key={experience.slug} delay={index * 0.08}>
                <article className="grid gap-5 rounded-[1.75rem] border border-ink/10 bg-sand/25 p-4 sm:grid-cols-[0.7fr_1fr]">
                  <div
                    className="min-h-[12rem] rounded-[1.25rem]"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.12), rgba(8,18,28,0.42)), url(${experience.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="space-y-3 py-2">
                    <p className="text-xs uppercase tracking-[0.28em] text-river">
                      {experience.category}
                    </p>
                    <h3 className="font-display text-3xl leading-none text-ink">
                      {experience.name}
                    </h3>
                    <p className="text-sm leading-6 text-ink/72">{experience.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
