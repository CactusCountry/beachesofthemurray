import Image from "next/image";

import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";

export function BeachesMapSection() {
  return (
    <section className="bg-[#f8f3eb] py-24 sm:py-28">
      <Container className="space-y-10">
        <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="max-w-xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-river">
              Explore the Beaches
            </p>
            <h2 className="font-display text-4xl leading-none text-ink sm:text-6xl">
              Find your stretch of river before you choose your town.
            </h2>
            <p className="text-base leading-7 text-ink/72 sm:text-lg">
              This branded map works as the site&apos;s orientation layer: it shows
              the breadth of Beaches of the Murray in one glance and gives us a
              clear place to start attaching beach, town, and operator imagery as
              the build grows.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/destinations">Browse Destinations</LinkButton>
              <LinkButton href="/plan" variant="ghost">
                Plan the Route
              </LinkButton>
            </div>
          </div>

          <div className="rounded-[2rem] border border-ink/8 bg-white/70 p-3 shadow-glow sm:p-5">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <Image
                src="/maps/beaches-of-the-murray-map.svg"
                alt="Illustrated Beaches of The Murray map showing named river beaches from Ulupna through Cobram and beyond."
                width={962}
                height={787}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
