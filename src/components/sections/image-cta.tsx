import { LinkButton } from "@/components/ui/link-button";

type ImageCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function ImageCta({
  eyebrow,
  title,
  description,
  image,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: ImageCtaProps) {
  return (
    <section className="bg-sand/35 px-5 py-10 sm:px-8 sm:py-12">
      <div
        className="mx-auto max-w-shell overflow-hidden rounded-[2rem] border border-white/10 bg-ink px-6 py-14 text-white shadow-glow sm:px-10 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8,18,28,0.32), rgba(8,18,28,0.78)), url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.32em] text-white/68">{eyebrow}</p>
          <h2 className="font-display text-4xl leading-none sm:text-6xl">{title}</h2>
          <p className="max-w-xl text-base leading-7 text-white/76 sm:text-lg">
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href={primaryHref}>{primaryLabel}</LinkButton>
            {secondaryHref && secondaryLabel ? (
              <LinkButton href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </LinkButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
