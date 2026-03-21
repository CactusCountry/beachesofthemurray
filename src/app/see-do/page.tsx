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
        title="Morning on the sand. Afternoon somewhere you didn't expect."
        description="A swim at Thompsons Beach, then twelve acres of cacti at Cactus Country. A round at the Black Bull course, then Lake Mulwala's sunken forest at sunset. A walk through Barmah, then a pub lunch in Nathalia. Two things in one day, and suddenly you're staying the weekend."
        image="/local/experiences/cactus-country.jpg"
        primaryHref="/plan"
        primaryLabel="Explore Weekends"
        secondaryHref="/destinations"
        secondaryLabel="Pick a Destination"
      />
    </div>
  );
}
