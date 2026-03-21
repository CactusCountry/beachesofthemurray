export type BrandPoster = {
  slug: string;
  title: string;
  caption: string;
  image: string;
  href: string;
};

export const brandPosters: BrandPoster[] = [
  {
    slug: "thompsons-beach-campaign",
    title: "Thompsons Beach",
    caption: "Golden sand, blue river, red gums — the inland beach from above.",
    image: "/campaign/thompsons-beach-poster.png",
    href: "/destinations/thompsons-beach-cobram-barooga"
  },
  {
    slug: "river-play-campaign",
    title: "River Play",
    caption: "The energy of a summer afternoon on the Murray, captured in a single frame.",
    image: "/campaign/river-play-poster.png",
    href: "/see-do"
  },
  {
    slug: "family-river-campaign",
    title: "Family Beach Days",
    caption: "Warm light, bare feet, and nowhere else to be. That's the feeling.",
    image: "/campaign/family-river-poster.png",
    href: "/plan"
  }
];
