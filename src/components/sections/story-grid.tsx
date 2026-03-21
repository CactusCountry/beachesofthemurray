import type { Story } from "@/content";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

type StoryGridProps = {
  stories: Story[];
};

export function StoryGrid({ stories }: StoryGridProps) {
  const [feature, ...secondary] = stories;

  return (
    <section className="bg-[#f5efe6] py-24 sm:py-32">
      <Container className="space-y-12">
        <SectionIntro
          eyebrow="Stories"
          title="Stories that help the region feel bigger than one summer holiday."
          description="Editorial content is doing strategy work here: building non-summer appeal, packaging local produce, and helping smaller destinations shine through itineraries and features."
          action={
            <LinkButton href="/stories" variant="ghost">
              Browse All Stories
            </LinkButton>
          }
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <article className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-glow">
              <div
                className="min-h-[24rem]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.06), rgba(8,18,28,0.56)), url(${feature.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              />
              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-river">
                  <span>{feature.theme}</span>
                  <span>{feature.readTime}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-4xl leading-none text-ink">
                    {feature.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-7 text-ink/72">
                    {feature.excerpt}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {secondary.map((story, index) => (
              <Reveal key={story.slug} delay={index * 0.08}>
                <article className="grid gap-4 rounded-[1.75rem] border border-ink/10 bg-white p-4 shadow-glow sm:grid-cols-[0.7fr_1fr]">
                  <div
                    className="min-h-[12rem] rounded-[1.25rem]"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.08), rgba(8,18,28,0.38)), url(${story.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="space-y-3 py-2">
                    <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.22em] text-river">
                      <span>{story.theme}</span>
                      <span>{story.readTime}</span>
                    </div>
                    <h3 className="font-display text-2xl leading-none text-ink">
                      {story.title}
                    </h3>
                    <p className="text-sm leading-6 text-ink/72">{story.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
