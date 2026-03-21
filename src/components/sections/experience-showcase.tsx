import Link from "next/link";

import type { Experience } from "@/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

type ExperienceShowcaseProps = {
  experiences: Experience[];
};

export function ExperienceShowcase({ experiences }: ExperienceShowcaseProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="space-y-12">
        <SectionIntro
          eyebrow="See & Do"
          title="Beaches, produce, lake days, and reasons to come back in winter."
          description="From sandy river swims and farm gate trails to championship golf, ancient forests, and year-round events — there's more here than you'd expect, and more than one season can hold."
        />

        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <Reveal key={experience.slug} delay={index * 0.07}>
              <article className="grid gap-6 overflow-hidden rounded-[2rem] border border-ink/10 bg-sand/25 p-4 shadow-glow sm:p-5 lg:grid-cols-[1.2fr_0.8fr]">
                <div
                  className="min-h-[18rem] rounded-[1.5rem]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.12), rgba(8,18,28,0.42)), url(${experience.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
                <div className="flex flex-col justify-between gap-6 p-2 sm:p-4">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-river">
                      {experience.category}
                    </p>
                    <div className="space-y-3">
                      <h3 className="font-display text-3xl leading-none text-ink sm:text-4xl">
                        {experience.name}
                      </h3>
                      <p className="text-base leading-7 text-ink/72">
                        {experience.summary}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {experience.relatedDestinations.map((slug) => (
                      <Link
                        key={slug}
                        href={`/destinations/${slug}`}
                        className="rounded-full border border-ink/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/80 transition hover:border-ink/28 hover:bg-ink/5"
                      >
                        {slug.replaceAll("-", " ")}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
