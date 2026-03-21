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
      "Beaches in the morning, a produce stop after lunch, red gums before sunset. Here's how to build a weekend on the Murray that works in any month.",
    image: "/local/beaches/thompsons-beach.jpg",
    theme: "Year-Round",
    readTime: "4 min read"
  },
  {
    slug: "winter-on-the-river",
    title: "Why Winter on the River Is Worth the Drive",
    excerpt:
      "Fog on the river, empty beaches, and the best dining without the wait. Winter on the Murray is quieter, slower, and worth every kilometre.",
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
      "Lake views from your balcony, a round at one of regional Victoria's best courses, and dinner that surprises. A polished weekend for couples and groups.",
    image: "/local/lake/lake-picnic.jpg",
    theme: "Leisure",
    readTime: "3 min read"
  },
  {
    slug: "barmah-red-gum-road",
    title: "Barmah Red Gum Road: A Nature-Led Detour",
    excerpt:
      "Drive through the world's largest river red gum forest, stop in towns with more character than traffic, and see a side of the Murray that has nothing to do with sand.",
    image: "/beaches/ulupna-beach.jpg",
    theme: "Nature",
    readTime: "6 min read"
  }
];
