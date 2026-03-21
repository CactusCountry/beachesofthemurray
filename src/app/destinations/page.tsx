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
        title="Six towns, six different weekends."
        description="River beaches at Tocumwal and Cobram. A lake with a sunken forest at Yarrawonga. Ancient red gums at Barmah. Farm gates through Numurkah. A boat ramp and a sandbar at Bundalong. Same shire, different trips."
      />
      <ImageCta
        eyebrow="Weekend Ideas"
        title="A beach morning, then something you didn't plan."
        description="Thompsons Beach in the morning, Cactus Country after lunch. A swim at Tocumwal, then chocolate-making at the Chocolate School. The best days here are the ones where the second half surprises you."
        image="/local/beaches/thompsons-beach.jpg"
        primaryHref="/plan"
        primaryLabel="Weekend Inspiration"
        secondaryHref="/see-do"
        secondaryLabel="Explore Experiences"
      />
    </div>
  );
}
