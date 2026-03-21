import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const focusItems = [
  {
    title: "Every season has a story",
    description:
      "Summer beaches, autumn produce trails, winter river walks, spring wildflowers. The Murray doesn't shut down when the temperature drops — it just changes character."
  },
  {
    title: "Start with a place, not a list",
    description:
      "Each town and stretch of river here has its own personality. Browse by destination first, then let the stays, food, events, and experiences unfold from there."
  },
  {
    title: "Stay longer, see more",
    description:
      "Pair a beach day with a produce trail. Add a round of golf to a lake stay. The best trips here layer two or three experiences together — and that's what turns a day trip into a weekend."
  }
];

export function StrategyFocus() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="space-y-12">
        <SectionIntro
          eyebrow="Why The Murray"
          title="More than a summer holiday. More than one town."
          description="The beaches are the starting point, but the region runs deeper — through produce country, red gum forests, lake towns, and local stories that reward the people who stay a little longer."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {focusItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-[1.75rem] border border-ink/10 bg-sand/35 p-6 shadow-glow">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-river">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-display text-3xl leading-none text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-ink/72">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
