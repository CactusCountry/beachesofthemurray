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
  const townOrder = [
    "Barmah",
    "Nathalia",
    "Numurkah",
    "Tocumwal",
    "Cobram / Barooga",
    "Yarrawonga / Mulwala",
    "Bundalong"
  ];

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="space-y-10">
        <Reveal className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
          <div className="order-2 max-w-xl space-y-5 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-river">
              Destinations Map
            </p>
            <h2 className="font-display text-[2.5rem] leading-none text-ink sm:text-6xl">
              See how the towns sit along the river.
            </h2>
            <p className="text-[15px] leading-6 text-ink/72 sm:text-lg sm:leading-7">
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
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton href="/destinations" className="w-full sm:w-auto">
                  Explore Destinations
                </LinkButton>
                <LinkButton href="/plan" variant="ghost" className="w-full sm:w-auto">
                  Plan the Route
                </LinkButton>
              </div>
            ) : null}
          </div>

          <div className="order-1 rounded-[2.25rem] border border-ink/8 bg-[#f8f3eb] p-3 shadow-glow sm:p-5 lg:order-2">
            <div className="overflow-hidden rounded-[1.6rem] bg-[#f3ede2]">
              <div className="overflow-x-auto">
              <Image
                src="/maps/murray-destinations-map.svg"
                alt="Illustrated destinations map showing Barmah, Nathalia, Numurkah, Tocumwal, Cobram and Barooga, Yarrawonga and Mulwala, and Bundalong along a stylised Murray River."
                width={1200}
                height={760}
                className="h-auto w-[56rem] max-w-none sm:w-full sm:max-w-full"
              />
              </div>
            </div>
            <div className="mt-4 space-y-3 sm:hidden">
              <p className="text-xs uppercase tracking-[0.24em] text-ink/54">
                Town order from west to east
              </p>
              <div className="flex flex-wrap gap-2">
                {townOrder.map((town) => (
                  <span
                    key={town}
                    className="rounded-full border border-ink/10 bg-white/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/72"
                  >
                    {town}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
