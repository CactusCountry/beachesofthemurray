import { stories } from "@/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Stories | Beaches of The Murray",
  description:
    "Local stories, seasonal guides, and weekend inspiration from the Beaches of The Murray."
});

export default function StoriesPage() {
  return (
    <div className="bg-white pt-28">
      <section className="py-24 sm:py-32">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Stories"
            title="What a weekend here actually looks like."
            description="Itineraries, seasonal guides, and honest accounts of the places worth visiting, the food worth stopping for, and the drives worth taking the long way."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story, index) => (
              <Reveal key={story.slug} delay={index * 0.06}>
                <article className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-sand/25 shadow-glow">
                  <div
                    className="min-h-[16rem]"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.06), rgba(8,18,28,0.42)), url(${story.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="space-y-4 p-6">
                    <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.22em] text-river">
                      <span>{story.theme}</span>
                      <span>{story.readTime}</span>
                    </div>
                    <h2 className="font-display text-3xl leading-none text-ink">
                      {story.title}
                    </h2>
                    <p className="text-sm leading-6 text-ink/72">{story.excerpt}</p>
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
