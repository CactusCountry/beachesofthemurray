import { destinations } from "@/content";
import { DestinationGrid } from "@/components/sections/destination-grid";
import { ImageCta } from "@/components/sections/image-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Destinations | Beaches of The Murray",
  description:
    "River beaches, lake towns, produce country, and red gum forests — explore the destinations of Moira Shire."
});

export default function DestinationsPage() {
  return (
    <div className="pt-28">
      <DestinationGrid
        destinations={destinations}
        eyebrow="Destinations"
        title="Pick a place, then let the region unfold from there."
        description="Inland beaches, lake towns, produce country, red gum forests — each part of Moira Shire has its own mood and its own reasons to linger."
      />
      <ImageCta
        eyebrow="Weekend Planning"
        title="Start with the beach, then add a second reason to stay."
        description="The best weekends here combine a day on the sand with something unexpected — a produce trail, a round of golf, a red gum walk, or a local event you didn't know about."
        image="/local/beaches/thompsons-beach.jpg"
        primaryHref="/plan"
        primaryLabel="See Itineraries"
        secondaryHref="/see-do"
        secondaryLabel="Explore Experiences"
      />
    </div>
  );
}
