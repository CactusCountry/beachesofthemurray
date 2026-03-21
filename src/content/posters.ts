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
    caption: "One of Australia's best beaches. It just happens to be on a river.",
    image: "/campaign/thompsons-beach-poster.png",
    href: "/destinations/thompsons-beach-cobram-barooga"
  },
  {
    slug: "river-play-campaign",
    title: "River Play",
    caption: "A summer afternoon on the Murray. No further context required.",
    image: "/campaign/river-play-poster.png",
    href: "/see-do"
  },
  {
    slug: "family-river-campaign",
    title: "Family Beach Days",
    caption: "Bare feet, warm sand, nowhere to be. The Murray in one frame.",
    image: "/campaign/family-river-poster.png",
    href: "/plan"
  }
];
