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
import { StoryGrid } from "@/components/sections/story-grid";
import { StrategyFocus } from "@/components/sections/strategy-focus";
import {
  getFeaturedDestinations,
  getFeaturedItinerary,
  getFeaturedStories
} from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Beaches of The Murray | River Country with Salt in the Air",
  description:
    "Discover inland beaches, year-round river escapes, produce trails, and destination-led travel across Moira Shire."
});

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow={siteSettings.locationLabel}
        title="Inland beaches, river towns, and year-round escapes across Moira."
        description="Beaches of The Murray now follows the local strategy more closely: destination-led discovery, stronger non-summer appeal, and clearer links between beaches, produce, events, and operators."
        image={destinations[0].heroImage}
        logoSrc="/brand/beaches-of-the-murray-logo.svg"
        primaryCta={siteSettings.primaryCta}
        secondaryCta={siteSettings.secondaryCta}
      />
      <BeachesMapSection />
      <CampaignPostersSection posters={brandPosters} />
      <FeaturedBeachesSection beaches={beachHighlights} />
      <DestinationGrid
        destinations={getFeaturedDestinations(4)}
        eyebrow="Destinations"
        title="Browse the shire by place, not just by activity."
        description="The tourism strategy calls for clearer destination segmentation. This gives each hub and smaller town room to carry a distinct story while still feeling part of one Beaches of the Murray network."
        actionHref="/destinations"
        actionLabel="View All Destinations"
      />
      <StrategyFocus />
      <ExperienceShowcase experiences={experiences} />
      <ItineraryFeature itinerary={getFeaturedItinerary()} />
      <StoryGrid stories={getFeaturedStories(4)} />
      <ImageCta
        eyebrow="Plan"
        title="Plan a visit that works in more than one season."
        description="The planning layer now leans into one of the strategy's biggest opportunities: helping visitors stay longer, spend more locally, and return outside peak summer."
        image="/local/lake/lake-picnic.jpg"
        primaryHref="/plan"
        primaryLabel="Build Your Weekend"
        secondaryHref="/stay"
        secondaryLabel="Find a Stay"
      />
    </>
  );
}
