import Image from "next/image";

import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";

export function BeachesMapSection() {
  const mobileLabels = [
    "Tocumwal beaches",
    "Ulupna",
    "Cobram / Thompsons Beach",
    "Yarrawonga / Bundalong"
  ];

  return (
    <section className="bg-[#f8f3eb] py-24 sm:py-28">
      <Container className="space-y-10">
        <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="order-2 max-w-xl space-y-5 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-river">
              Explore the Beaches
            </p>
            <h2 className="font-display text-[2.5rem] leading-none text-ink sm:text-6xl">
              Find your stretch of river before you choose your town.
            </h2>
            <p className="text-[15px] leading-6 text-ink/72 sm:text-lg sm:leading-7">
              From Tocumwal&apos;s sandy banks to Bundalong&apos;s river junction,
              the beaches here stretch across the shire. Find the one closest to
              where you want to be, then start building the trip around it.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton href="/destinations" className="w-full sm:w-auto">
                Browse Destinations
              </LinkButton>
              <LinkButton href="/plan" variant="ghost" className="w-full sm:w-auto">
                Plan the Route
              </LinkButton>
            </div>
          </div>

          <div className="order-1 rounded-[2rem] border border-ink/8 bg-white/70 p-3 shadow-glow sm:p-5 lg:order-2">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <div className="overflow-x-auto">
              <Image
                src="/maps/beaches-of-the-murray-map.svg"
                alt="Illustrated Beaches of The Murray map showing named river beaches from Ulupna through Cobram and beyond."
                width={962}
                height={787}
                className="h-auto w-[54rem] max-w-none sm:w-full sm:max-w-full"
              />
              </div>
            </div>
            <div className="mt-4 space-y-3 sm:hidden">
              <p className="text-xs uppercase tracking-[0.24em] text-ink/54">
                Scroll map sideways on mobile
              </p>
              <div className="flex flex-wrap gap-2">
                {mobileLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-ink/10 bg-sand/40 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/72"
                  >
                    {label}
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
