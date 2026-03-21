import { itineraries } from "@/content";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Plan | Beaches of The Murray",
  description:
    "Weekend itineraries, seasonal guides, and practical tips for planning your Beaches of The Murray trip."
});

const travelNotes = [
  "The easiest way to build a trip is to pick one beach or lake town as your base, then add a produce stop, a nature walk, or a local event as your second reason to stay.",
  "The towns here are close enough to link together — a beach morning in Tocumwal pairs naturally with an afternoon on the Numurkah farm gate trail, or a lake day at Yarrawonga with a drive through Barmah.",
  "Local visitor information centres in Cobram, Yarrawonga, and Tocumwal can help with maps, conditions, and recommendations once you arrive."
];

const seasonalNotes = [
  "Summer brings the classic river holiday — sandy beaches, long swims, and family days on the water that stretch until the light fades.",
  "Autumn is for the food lovers and the wanderers. Produce trails, quieter towns, golden light through the red gums, and weekends that feel unhurried.",
  "Winter is the region's best-kept secret. Fog on the river, empty beaches, warm pubs, great golf, and Barmah at its most atmospheric."
];

export default function PlanPage() {
  return (
    <div className="bg-sand/25 pt-28">
      <section className="py-24 sm:py-32">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="Plan"
            title="Turn a beach stop into a proper weekend away."
            description="Ready-made itineraries, seasonal tips, and practical notes to help you get more out of every visit — whatever the time of year."
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
              title="A few things worth knowing before you go."
              description="Practical notes to help you navigate the region, link destinations together, and make the most of your time on the Murray."
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
              description="Every season brings a different version of this place. Here's what to expect."
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
              Pick your beach, then build the weekend around it.
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
