import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const focusItems = [
  {
    title: "Not just a summer place",
    description:
      "Summer is the obvious season, and the beaches are brilliant. But autumn on the Farm Gate Trail, winter in Barmah, and spring on the golf courses are all worth the drive. The locals will tell you winter is their favourite."
  },
  {
    title: "Every town is different",
    description:
      "Tocumwal has twenty-four beaches and a chocolate school. Cobram has nationally ranked sand and championship golf. Yarrawonga has the lake and the sunken forest. They're all within an hour of each other, but they don't feel alike."
  },
  {
    title: "One night becomes three",
    description:
      "You come for the beach. Then someone mentions the Farm Gate Trail, or Cactus Country, or the Dharnya Centre, and you add a day. That's how it works here. The region rewards the people who stay."
  }
];

export function StrategyFocus() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="space-y-12">
        <SectionIntro
          eyebrow="Why The Murray"
          title="Beaches first. Then the rest unfolds."
          description="Most people come for the river and the sand. Then they find the food, the forest, the golf, the lake, the towns. That's when a day trip becomes a weekend."
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
