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
      "The main beach in a town that has twenty-four of them. Wide sand, big red gums, shallow water, and a five-minute walk to the shops.",
    href: "/destinations/tocumwal-beaches"
  },
  {
    slug: "thompsons-beach",
    name: "Thompsons Beach",
    region: "Cobram",
    image: "/local/beaches/thompsons-beach.jpg",
    description:
      "Voted one of Australia's best beaches. Pale sand, enormous red gums, and floodlights so families stay on after dark in summer.",
    href: "/destinations/thompsons-beach-cobram-barooga"
  },
  {
    slug: "ulupna-beach",
    name: "Ulupna Beach",
    region: "Ulupna",
    image: "/beaches/ulupna-beach.jpg",
    description:
      "Quieter than the town beaches. Heavy shade, a grassy bank, and the kind of spot you find with a picnic rug and don't leave until the light changes.",
    href: "/plan"
  },
  {
    slug: "hennessy-beach",
    name: "Hennessy Beach",
    region: "Near Sonnemans",
    image: "/beaches/hennessy-beach.jpg",
    description:
      "A gentle bend with soft sand and open water. No facilities, no crowds. Just the river and whatever you brought with you.",
    href: "/plan"
  }
];
