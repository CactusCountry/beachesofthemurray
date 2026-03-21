import Image from "next/image";
import Link from "next/link";

import type { BrandPoster } from "@/content/posters";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

type CampaignPostersSectionProps = {
  posters: BrandPoster[];
};

export function CampaignPostersSection({
  posters
}: CampaignPostersSectionProps) {
  const [feature, ...supporting] = posters;

  return (
    <section className="bg-[#0e2530] py-24 text-white sm:py-28">
      <Container className="space-y-12">
        <SectionIntro
          eyebrow="Campaign"
          title="A destination brand should feel like a postcard before it feels like a directory."
          description="These Figma campaign frames give the site a stronger branded layer while we keep folding in the full photo library from towns, operators, and beaches."
          tone="light"
        />

        <div className="grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
          <Reveal>
            <Link
              href={feature.href}
              className="group block overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 p-3 shadow-glow transition hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={4096}
                  height={2729}
                  className="h-auto w-full transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-3 p-4 pb-2 sm:p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-gold/82">
                  Featured Poster
                </p>
                <h3 className="font-display text-4xl leading-none text-white">
                  {feature.title}
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-white/72">
                  {feature.caption}
                </p>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {supporting.map((poster, index) => (
              <Reveal key={poster.slug} delay={index * 0.08}>
                <Link
                  href={poster.href}
                  className="group grid gap-4 overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 p-3 shadow-glow transition hover:-translate-y-1 sm:grid-cols-[0.72fr_1fr] lg:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="overflow-hidden rounded-[1.35rem]">
                    <Image
                      src={poster.image}
                      alt={poster.title}
                      width={1080}
                      height={1920}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-4 p-2 sm:py-3">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.28em] text-gold/82">
                        Poster Frame
                      </p>
                      <h3 className="font-display text-3xl leading-none text-white">
                        {poster.title}
                      </h3>
                      <p className="text-sm leading-6 text-white/72">
                        {poster.caption}
                      </p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/62">
                      Open Section
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
