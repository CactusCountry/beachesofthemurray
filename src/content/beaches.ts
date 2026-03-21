export type BeachHighlight = {
  slug: string;
  name: string;
  region: string;
  image: string;
  description: string;
  href: string;
};

export const beachHighlights: BeachHighlight[] = [
  {
    slug: "tocumwal-town-beach",
    name: "Tocumwal Town Beach",
    region: "Tocumwal",
    image: "/beaches/tocumwal-town-beach.jpg",
    description:
      "An easy riverfront starting point close to town, with broad views, gum-lined edges, and a classic family holiday feel.",
    href: "/destinations/tocumwal-beaches"
  },
  {
    slug: "thompsons-beach",
    name: "Thompsons Beach",
    region: "Cobram",
    image: "/local/beaches/thompsons-beach.jpg",
    description:
      "Golden light, broad sand, and an effortless family-holiday mood make Thompsons one of the clearest hero beaches in the region.",
    href: "/destinations/thompsons-beach-cobram-barooga"
  },
  {
    slug: "ulupna-beach",
    name: "Ulupna Beach",
    region: "Ulupna",
    image: "/beaches/ulupna-beach.jpg",
    description:
      "A quieter, shade-framed stretch of river made for lingering, picnics, and slower family time by the water.",
    href: "/plan"
  },
  {
    slug: "hennessy-beach",
    name: "Hennessy Beach",
    region: "Near Sonnemans",
    image: "/beaches/hennessy-beach.jpg",
    description:
      "A gentle bend of river with open water and relaxed shoreline access, ideal for showing the softness of these inland beaches.",
    href: "/plan"
  }
];
