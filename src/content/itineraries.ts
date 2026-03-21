export type Itinerary = {
  slug: string;
  title: string;
  duration: string;
  summary: string;
  stops: string[];
};

export const itineraries: Itinerary[] = [
  {
    slug: "classic-beaches-and-produce-weekend",
    title: "Classic Beaches & Produce Weekend",
    duration: "2 nights",
    summary:
      "Stay near Cobram or Tocumwal, spend one day on the sand, and layer in a produce-driven inland stop to lift spend and stay length.",
    stops: ["Tocumwal Beaches", "Thompsons Beach", "Numurkah Farm Gate Trail"]
  },
  {
    slug: "winter-river-reset",
    title: "Winter River Reset",
    duration: "3 nights",
    summary:
      "A low-season itinerary designed around lake stays, local dining, and the quieter landscapes the strategy wants to promote year-round.",
    stops: ["Yarrawonga", "Lake Mulwala", "Barmah"]
  },
  {
    slug: "culture-and-red-gum-loop",
    title: "Culture & Red Gum Loop",
    duration: "Full day",
    summary:
      "A day route through heritage towns, red gum country, and the slower edges of the region for travellers chasing authenticity over speed.",
    stops: ["Nathalia", "Barmah", "Bundalong"]
  }
];
