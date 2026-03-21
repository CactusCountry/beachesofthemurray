import { experiences } from "@/content";
import { ExperienceShowcase } from "@/components/sections/experience-showcase";
import { ImageCta } from "@/components/sections/image-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "See & Do | Beaches of The Murray",
  description:
    "River beaches, farm gate trails, lake leisure, golf, nature walks, and events across Moira Shire."
});

export default function SeeDoPage() {
  return (
    <div className="pt-28">
      <ExperienceShowcase experiences={experiences} />
      <ImageCta
        eyebrow="Stay Longer"
        title="The best days here have two chapters."
        description="A morning on the beach followed by a produce trail. A lake swim then a round of golf. A river walk and a winter event. Layer two experiences together and a day trip becomes a weekend."
        image="/local/experiences/cactus-country.jpg"
        primaryHref="/plan"
        primaryLabel="Plan the Route"
        secondaryHref="/destinations"
        secondaryLabel="Choose a Base"
      />
    </div>
  );
}
