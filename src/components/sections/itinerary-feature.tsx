import type { Itinerary } from "@/content";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";

type ItineraryFeatureProps = {
  itinerary: Itinerary;
};

export function ItineraryFeature({ itinerary }: ItineraryFeatureProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-ink/10 bg-[#0f2732] p-6 text-white shadow-glow sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Featured Itinerary
              </p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl">
                {itinerary.title}
              </h2>
              <p className="text-sm uppercase tracking-[0.2em] text-white/68">
                {itinerary.duration}
              </p>
            </div>
            <div className="space-y-6">
              <p className="max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                {itinerary.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                {itinerary.stops.map((stop) => (
                  <span
                    key={stop}
                    className="rounded-full border border-white/16 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/85"
                  >
                    {stop}
                  </span>
                ))}
              </div>
              <LinkButton href="/plan">See Planning Guide</LinkButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
