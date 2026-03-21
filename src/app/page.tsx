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
    "Sandy river beaches, country produce, and wide open weekends across Moira Shire, Victoria."
});

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow={siteSettings.locationLabel}
        title="Sandy beaches, river towns, and wide open weekends on the Murray."
        description="Real beaches on a real river. Produce trails through farming country. Red gum forests older than memory. This is Moira Shire — and it's worth more than a day trip."
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
        title="Every town tells a different story. Start with the one that calls you."
        description="From sandy river beaches and lake resorts to farm gate trails and ancient red gum forests — each corner of Moira Shire has its own character and its own reasons to stay."
        actionHref="/destinations"
        actionLabel="View All Destinations"
      />
      <StrategyFocus />
      <ExperienceShowcase experiences={experiences} />
      <ItineraryFeature itinerary={getFeaturedItinerary()} />
      <StoryGrid stories={getFeaturedStories(4)} />
      <ImageCta
        eyebrow="Plan"
        title="A weekend on the Murray, any time of year."
        description="Summer beaches, autumn produce trails, winter river walks — there's always a reason to come. Build a trip that fits the season and stay a little longer than planned."
        image="/local/lake/lake-picnic.jpg"
        primaryHref="/plan"
        primaryLabel="Build Your Weekend"
        secondaryHref="/stay"
        secondaryLabel="Find a Stay"
      />
    </>
  );
}
