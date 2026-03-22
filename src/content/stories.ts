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
    slug: "a-weekend-on-the-murray",
    title: "How to Spend a Weekend on the Murray",
    excerpt:
      "Thompsons Beach in the morning. The Farm Gate Trail after lunch. Barmah before the light goes. A Murray weekend that works just as well in April as it does in January.",
    image: "/local/beaches/thompsons-beach.jpg",
    theme: "Weekend Guide",
    readTime: "4 min read"
  },
  {
    slug: "winter-on-the-river",
    title: "The Murray in Winter",
    excerpt:
      "Fog on the river at seven. Empty sand at Tocumwal by nine. A long lunch at Cobram without a booking queue. Winter down here is a different place entirely, and most people don't know about it yet.",
    image: "/local/nature/paddock-ulupna-creek.jpg",
    theme: "Winter",
    readTime: "3 min read"
  },
  {
    slug: "best-family-friendly-beach-days",
    title: "Three River Beaches, Three Different Holidays",
    excerpt:
      "Thompsons has the floodlights and the facilities. Tocumwal has twenty-four beaches and the Chocolate School. Bundalong has the junction and the sandbars. Same river, different weekends.",
    image: "/beaches/carters-beach.jpg",
    theme: "Family",
    readTime: "5 min read"
  },
  {
    slug: "farm-gate-trail-weekend",
    title: "Eating Your Way Through Numurkah",
    excerpt:
      "Purple garlic from a roadside honesty box. Cold-pressed olive oil at Rich Glen. A cellar door you nearly drove past. The Farm Gate Trail is the best reason to visit in the shoulder season.",
    image: "/local/produce/manto-produce.jpg",
    theme: "Produce",
    readTime: "4 min read"
  },
  {
    slug: "golf-and-lake-getaway",
    title: "Lake Mulwala, the Sunken Forest, and 54 Holes of Golf",
    excerpt:
      "The Black Bull Championship course at Yarrawonga is one of regional Victoria's best. The lake has a drowned red gum forest that looks like nowhere else on earth. Put them together and you've got a weekend.",
    image: "/local/lake/lake-picnic.jpg",
    theme: "Leisure",
    readTime: "3 min read"
  },
  {
    slug: "barmah-red-gum-road",
    title: "Into the Red Gums: Barmah by the Back Road",
    excerpt:
      "The world's largest river red gum forest. The Dharnya Centre on Yorta Yorta country. Towns where the pub is the main event. A day trip for people who'd rather take the long way.",
    image: "/beaches/ulupna-beach.jpg",
    theme: "Nature",
    readTime: "6 min read"
  },
  {
    slug: "silo-art-road-trip",
    title: "Melbourne to the Murray: The Silo Art Trail",
    excerpt:
      "Six painted grain silos between Goorambat and Picola. Clydesdales at Katamatite. A WWII tribute at Picola. Australia's first female silo artist at Tungamah. The drive takes a day, but the pubs and small towns along the way will tempt you into two.",
    image: "/local/experiences/cactus-country.jpg",
    theme: "Road Trip",
    readTime: "5 min read"
  }
];
