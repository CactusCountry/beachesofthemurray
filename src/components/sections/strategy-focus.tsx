import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const focusItems = [
  {
    title: "Year-round visitation",
    description:
      "Use non-summer content, winter stays, and shoulder-season reasons to visit so the region is not defined by one peak season."
  },
  {
    title: "Destination-led discovery",
    description:
      "Break the shire into memorable places so visitors can browse by place first, then deepen into stays, events, produce, and local operators."
  },
  {
    title: "Longer stays, higher spend",
    description:
      "Link beaches with produce, lake leisure, events, and culture to move visitors beyond a single-stop day trip."
  }
];

export function StrategyFocus() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="space-y-12">
        <SectionIntro
          eyebrow="Strategy Lens"
          title="Built around the priorities in the local tourism strategy."
          description="This revision shifts the site toward the structure in the strategy document: year-round reasons to visit, clearer destination segmentation, and stronger links between beaches, produce, events, and operators."
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
