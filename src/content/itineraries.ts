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
      "Base yourself near Cobram or Tocumwal, spend one day on the sand, and fill the other with farm gates, olive groves, and a long lunch from the region's best producers.",
    stops: ["Tocumwal Beaches", "Thompsons Beach", "Numurkah Farm Gate Trail"]
  },
  {
    slug: "winter-river-reset",
    title: "Winter River Reset",
    duration: "3 nights",
    summary:
      "Settle into a lakefront stay at Yarrawonga, explore Barmah's red gum forests, and eat well without a booking queue. The Murray in winter is a different kind of beautiful.",
    stops: ["Yarrawonga", "Lake Mulwala", "Barmah"]
  },
  {
    slug: "culture-and-red-gum-loop",
    title: "Culture & Red Gum Loop",
    duration: "Full day",
    summary:
      "A day loop through heritage towns and ancient red gum country for travellers who'd rather take the back road and stop when something catches their eye.",
    stops: ["Nathalia", "Barmah", "Bundalong"]
  }
];
