import { experiences } from "@/content";
import { ExperienceShowcase } from "@/components/sections/experience-showcase";
import { ImageCta } from "@/components/sections/image-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "See & Do | Beaches of The Murray",
  description:
    "Browse strategy-led experiences across Beaches of The Murray, from beaches and produce to golf, events, and red gum country."
});

export default function SeeDoPage() {
  return (
    <div className="pt-28">
      <ExperienceShowcase experiences={experiences} />
      <ImageCta
        eyebrow="Stay Longer"
        title="The best itineraries mix a hero water stop with a second layer."
        description="That second layer might be produce, a golf round, a winter event, or a red gum detour. The strategy is clear that broader reasons to visit matter."
        image="/local/experiences/cactus-country.jpg"
        primaryHref="/plan"
        primaryLabel="Plan the Route"
        secondaryHref="/destinations"
        secondaryLabel="Choose a Base"
      />
    </div>
  );
}
