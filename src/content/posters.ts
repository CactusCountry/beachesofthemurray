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
    caption: "Aerial campaign artwork that makes the inland-beach idea feel iconic at a glance.",
    image: "/campaign/thompsons-beach-poster.png",
    href: "/destinations/thompsons-beach-cobram-barooga"
  },
  {
    slug: "river-play-campaign",
    title: "River Play",
    caption: "Tall social-style artwork that brings energy and movement into the brand system.",
    image: "/campaign/river-play-poster.png",
    href: "/see-do"
  },
  {
    slug: "family-river-campaign",
    title: "Family Beach Days",
    caption: "A lighter family moment that helps the site feel warm, local, and holiday-led.",
    image: "/campaign/family-river-poster.png",
    href: "/plan"
  }
];
