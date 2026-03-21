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
    title: "Beaches & the Farm Gate Trail",
    duration: "2 nights",
    summary:
      "Day one: Thompsons Beach, then across to Cobram for dinner. Day two: the Farm Gate Trail through Numurkah, stopping for olive oil at Rich Glen and whatever's ripe at the roadside stalls. Stay near Cobram or Tocumwal.",
    stops: ["Thompsons Beach", "Cobram", "Numurkah Farm Gate Trail"]
  },
  {
    slug: "winter-river-reset",
    title: "Winter on the Lake",
    duration: "3 nights",
    summary:
      "Check into a lakefront stay at Yarrawonga. Drive to Barmah when the fog lifts and walk the red gum forest while it's empty. Play the Black Bull course. Eat well without a booking queue. This is the Murray nobody talks about.",
    stops: ["Yarrawonga", "Lake Mulwala", "Barmah"]
  },
  {
    slug: "culture-and-red-gum-loop",
    title: "The Back Road Loop",
    duration: "Full day",
    summary:
      "Nathalia for a pub lunch. Barmah National Park and the Dharnya Centre. Then down through the river flats to Bundalong for a swim at the junction. A day for people who like to stop when something looks interesting.",
    stops: ["Nathalia", "Barmah", "Bundalong"]
  }
];
