import {
  beachHighlights,
  brandPosters,
  destinations,
  experiences,
  siteSettings
} from "@/content";
import { BeachesMapSection } from "@/components/sections/beaches-map-section";
import { CampaignPostersSection } from "@/components/sections/campaign-posters-section";
import { DestinationGrid } from "@/components/sections/destination-grid";
import { ExperienceShowcase } from "@/components/sections/experience-showcase";
import { FeaturedBeachesSection } from "@/components/sections/featured-beaches-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ImageCta } from "@/components/sections/image-cta";
import { ItineraryFeature } from "@/components/sections/itinerary-feature";
import { RiverDestinationsMapSection } from "@/components/sections/river-destinations-map-section";
import { StoryGrid } from "@/components/sections/story-grid";
import { StrategyFocus } from "@/components/sections/strategy-focus";
import {
  getFeaturedDestinations,
  getFeaturedItinerary,
  getFeaturedStories
} from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Beaches of The Murray | The Best River Beaches in Australia",
  description:
    "Sandy river beaches, farm gate trails, and country towns worth staying for. On the Murray, between Tocumwal and Yarrawonga."
});

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow={siteSettings.locationLabel}
        title="The best river beaches in Australia. And a dozen reasons to stay."
        description="Sandy river beaches you can drive to from Melbourne. Farm gates selling what they grew that morning. Red gum forests older than the colony. Chocolate-making classes on the riverbank. Championship golf courses through the bush. This is the Murray, and one night here has a habit of turning into three."
        image={destinations[0].heroImage}
        logoSrc="/brand/beaches-of-the-murray-logo.svg"
        primaryCta={siteSettings.primaryCta}
        secondaryCta={siteSettings.secondaryCta}
      />
      <BeachesMapSection />
      <RiverDestinationsMapSection />
      <CampaignPostersSection posters={brandPosters} />
      <FeaturedBeachesSection beaches={beachHighlights} />
      <DestinationGrid
        destinations={getFeaturedDestinations(4)}
        eyebrow="Destinations"
        title="Six destinations. Each one a different kind of weekend."
        description="Tocumwal has twenty-four river beaches and a chocolate school. Cobram has nationally ranked sand and championship golf. Yarrawonga has the lake and the sunken forest. Barmah has ancient red gums and Yorta Yorta heritage. Numurkah has the farm gates and the Silo Art Trail. Bundalong has the junction."
        actionHref="/destinations"
        actionLabel="View All Destinations"
      />
      <StrategyFocus />
      <ExperienceShowcase experiences={experiences} />
      <ItineraryFeature itinerary={getFeaturedItinerary()} />
      <StoryGrid stories={getFeaturedStories(4)} />
      <ImageCta
        eyebrow="Plan"
        title="The Murray changes with the season. Every version is worth the drive."
        description="Summer is for the beaches. Autumn is for the Farm Gate Trail. Winter is for Barmah, empty sand, and long lunches without a wait. Pick your season."
        image="/local/lake/lake-picnic.jpg"
        primaryHref="/plan"
        primaryLabel="Explore Weekends"
        secondaryHref="/stay"
        secondaryLabel="Find a Stay"
      />
    </>
  );
}
