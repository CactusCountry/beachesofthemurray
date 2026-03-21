import { destinations } from "@/content";
import { DestinationGrid } from "@/components/sections/destination-grid";
import { ImageCta } from "@/components/sections/image-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Destinations | Beaches of The Murray",
  description:
    "Explore the distinct hubs and smaller towns that make up Beaches of The Murray across Moira Shire."
});

export default function DestinationsPage() {
  return (
    <div className="pt-28">
      <DestinationGrid
        destinations={destinations}
        eyebrow="Destinations"
        title="Choose a destination story, then let the region unfold from there."
        description="This page now mirrors the strategy's push to break the shire into clearer destination identities, from inland beaches and lake hubs to produce country and red gum nature escapes."
      />
      <ImageCta
        eyebrow="Weekend Planning"
        title="Pair a beach hero with a second reason to stay."
        description="The strongest itineraries combine a hero beach or lake stop with produce, culture, golf, or events so visitors disperse and spend more locally."
        image="/local/beaches/thompsons-beach.jpg"
        primaryHref="/plan"
        primaryLabel="See Itineraries"
        secondaryHref="/see-do"
        secondaryLabel="Explore Experiences"
      />
    </div>
  );
}
