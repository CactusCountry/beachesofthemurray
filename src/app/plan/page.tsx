import { itineraries } from "@/content";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Plan | Beaches of The Murray",
  description:
    "Use itineraries, travel notes, events thinking, and seasonal guidance to plan a Beaches of The Murray trip."
});

const travelNotes = [
  "Most visits work best as a drive-market itinerary linking one beach or lake hub with one produce, culture, or nature stop.",
  "Longer stays are easiest to win when planning content clearly packages destinations together instead of treating each town in isolation.",
  "Wayfinding, town maps, and clear visitor information remain part of the strategy, so planning pages should eventually connect to stronger local orientation tools."
];

const seasonalNotes = [
  "Summer is the hero season for beaches, family water play, and active river itineraries.",
  "Autumn is ideal for produce trails, slower weekends, and road-trip dispersal into smaller towns.",
  "Winter is the biggest growth opportunity: low-season stays, events, golf, and red gum country can all carry the trip."
];

export default function PlanPage() {
  return (
    <div className="bg-sand/25 pt-28">
      <section className="py-24 sm:py-32">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="Plan"
            title="Everything you need to turn a beach stop into a fuller regional trip."
            description="This page is now closer to the strategy: itinerary packaging, seasonality, visitor information thinking, and clearer reasons to stay longer."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {itineraries.map((itinerary, index) => (
              <Reveal key={itinerary.slug} delay={index * 0.08}>
                <article className="flex h-full flex-col gap-5 rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-glow">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.26em] text-river">
                      {itinerary.duration}
                    </p>
                    <h2 className="font-display text-3xl leading-none text-ink">
                      {itinerary.title}
                    </h2>
                    <p className="text-sm leading-6 text-ink/72">{itinerary.summary}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3">
                    {itinerary.stops.map((stop) => (
                      <span
                        key={stop}
                        className="rounded-full border border-ink/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink/75"
                      >
                        {stop}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="travel-notes" className="bg-white py-24 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionIntro
              eyebrow="Travel Notes"
              title="A few practical cues help the whole region feel easier to navigate."
              description="These notes intentionally echo the strategy's focus on visitor servicing, wayfinding, and helping destinations work together rather than in silos."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="space-y-4 rounded-[2rem] border border-ink/10 bg-sand/35 p-6 sm:p-8">
              {travelNotes.map((note) => (
                <p key={note} className="border-b border-ink/8 pb-4 text-base leading-7 text-ink/72 last:border-b-0 last:pb-0">
                  {note}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="seasonal-notes" className="bg-[#0f2732] py-24 text-white sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Seasonal Notes"
              title="The region shifts in mood with the light."
              description="Seasonality is a structural part of the strategy, especially for building a stronger non-summer proposition."
              tone="light"
              className="max-w-xl"
            />
          </Reveal>
          <div className="grid gap-4">
            {seasonalNotes.map((note, index) => (
              <Reveal key={note} delay={index * 0.08}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 text-base leading-7 text-white/76">
                  {note}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand/35 py-20 sm:py-24">
        <Container className="flex flex-wrap items-center justify-between gap-6 rounded-[2rem] border border-ink/10 bg-white p-6 shadow-glow sm:p-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-river">Next Step</p>
            <h2 className="font-display text-4xl leading-none text-ink sm:text-5xl">
              Choose the beach or hub first, then layer in the second reason to stay.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="/destinations" variant="ghost">
              Browse Destinations
            </LinkButton>
            <LinkButton href="/stay">Find a Stay</LinkButton>
          </div>
        </Container>
      </section>
    </div>
  );
}
