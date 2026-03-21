import Image from "next/image";

import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";

type RiverDestinationsMapSectionProps = {
  showActions?: boolean;
};

export function RiverDestinationsMapSection({
  showActions = true
}: RiverDestinationsMapSectionProps) {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="space-y-10">
        <Reveal className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
          <div className="max-w-xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-river">
              Destinations Map
            </p>
            <h2 className="font-display text-4xl leading-none text-ink sm:text-6xl">
              See how the towns sit along the river.
            </h2>
            <p className="text-base leading-7 text-ink/72 sm:text-lg">
              The beaches may be the hook, but each base along the Murray plays a
              different role. Some sit right on the water, others pull you inland
              for produce, red gums, and slower country detours.
            </p>
            <p className="max-w-md text-sm leading-6 text-ink/58">
              This is a stylised orientation map, built from the real order of
              the towns along the Murray so visitors can understand the region in
              one glance before they start choosing a base.
            </p>
            {showActions ? (
              <div className="flex flex-wrap gap-3">
                <LinkButton href="/destinations">Explore Destinations</LinkButton>
                <LinkButton href="/plan" variant="ghost">
                  Plan the Route
                </LinkButton>
              </div>
            ) : null}
          </div>

          <div className="rounded-[2.25rem] border border-ink/8 bg-[#f8f3eb] p-3 shadow-glow sm:p-5">
            <div className="overflow-hidden rounded-[1.6rem] bg-[#f3ede2]">
              <Image
                src="/maps/murray-destinations-map.svg"
                alt="Illustrated destinations map showing Barmah, Nathalia, Numurkah, Tocumwal, Cobram and Barooga, Yarrawonga and Mulwala, and Bundalong along a stylised Murray River."
                width={1200}
                height={760}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
