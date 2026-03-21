export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  theme: string;
  readTime: string;
};

export const stories: Story[] = [
  {
    slug: "a-year-round-beaches-of-the-murray-weekend",
    title: "A Year-Round Beaches of the Murray Weekend",
    excerpt:
      "A strategy-led itinerary that proves the region is more than a summer stop, with beaches, produce, and nature carrying the story across seasons.",
    image: "/local/beaches/thompsons-beach.jpg",
    theme: "Year-Round",
    readTime: "4 min read"
  },
  {
    slug: "winter-on-the-river",
    title: "Why Winter on the River Is Worth the Drive",
    excerpt:
      "Low-season content is a major opportunity in the strategy, and this story shows how beaches, produce, and red gum landscapes still land in the cooler months.",
    image: "/local/nature/paddock-ulupna-creek.jpg",
    theme: "Winter",
    readTime: "3 min read"
  },
  {
    slug: "best-family-friendly-beach-days",
    title: "Best Family-Friendly Beach Days on the Murray",
    excerpt:
      "Thompsons Beach, Tocumwal, and Bundalong each offer a different version of the classic family river holiday.",
    image: "/beaches/carters-beach.jpg",
    theme: "Family",
    readTime: "5 min read"
  },
  {
    slug: "farm-gate-trail-weekend",
    title: "A Farm Gate Trail Weekend Through Numurkah",
    excerpt:
      "Use local produce as the anchor for a shoulder-season weekend that links paddocks, tasting stops, and nearby beaches.",
    image: "/local/produce/manto-produce.jpg",
    theme: "Produce",
    readTime: "4 min read"
  },
  {
    slug: "golf-and-lake-getaway",
    title: "A Golf and Lake Getaway Around Yarrawonga",
    excerpt:
      "A higher-yield itinerary for couples and groups, pairing lake stays, club life, and good dining with room to explore wider Moira.",
    image: "/local/lake/lake-picnic.jpg",
    theme: "Leisure",
    readTime: "3 min read"
  },
  {
    slug: "barmah-red-gum-road",
    title: "Barmah Red Gum Road: A Nature-Led Detour",
    excerpt:
      "An example of the cultural and nature-driven storytelling needed to broaden the region beyond peak beach season.",
    image: "/beaches/ulupna-beach.jpg",
    theme: "Nature",
    readTime: "6 min read"
  }
];
