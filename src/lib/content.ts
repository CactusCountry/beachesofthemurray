import { destinations, experiences, itineraries, stories } from "@/content";

export function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getRelatedExperiences(destinationSlug: string) {
  return experiences.filter((experience) =>
    experience.relatedDestinations.includes(destinationSlug)
  );
}

export function getFeaturedStories(limit = 4) {
  return stories.slice(0, limit);
}

export function getFeaturedDestinations(limit = 4) {
  return destinations.slice(0, limit);
}

export function getFeaturedItinerary() {
  return itineraries[0];
}
