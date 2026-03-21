export type Experience = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  relatedDestinations: string[];
};

export const experiences: Experience[] = [
  {
    slug: "beaches-and-river-play",
    name: "Beaches & River Play",
    category: "Beaches",
    summary:
      "Tocumwal alone has twenty-four river beaches. Thompsons Beach at Cobram made the national rankings. Bundalong has sandbars that shift with the current. The water is fresh, the entries are sandy and shallow, and the red gums throw shade right to the edge.",
    image: "/local/beaches/thompsons-beach.jpg",
    relatedDestinations: ["tocumwal-beaches", "thompsons-beach-cobram-barooga", "bundalong-and-the-junction"]
  },
  {
    slug: "farm-gate-and-local-produce",
    name: "Farm Gate & Local Produce",
    category: "Food & Produce",
    summary:
      "The Murray Farm Gate Trail runs through Numurkah and the country around it. Cold-pressed olive oil at Rich Glen, seasonal fruit from roadside stalls, cellar doors you nearly miss. Bring an esky. You'll fill it.",
    image: "/local/produce/manto-produce.jpg",
    relatedDestinations: ["numurkah-and-farm-gate", "thompsons-beach-cobram-barooga"]
  },
  {
    slug: "golf-lake-and-leisure",
    name: "Golf, Lake & Leisure",
    category: "Leisure",
    summary:
      "The Black Bull Championship at Yarrawonga is one of regional Victoria's best courses. Cobram Barooga Golf Club is nicknamed 'the Royal Melbourne of the Bush.' Between rounds, there's Lake Mulwala, its sunken red gum forest, and lakefront stays with actual water views.",
    image: "/local/lake/sebel-lake.jpg",
    relatedDestinations: ["yarrawonga-mulwala", "thompsons-beach-cobram-barooga"]
  },
  {
    slug: "culture-nature-and-red-gums",
    name: "Culture, Nature & Red Gums",
    category: "Nature",
    summary:
      "Barmah National Park is the world's largest river red gum forest. The Dharnya Centre tells the story of Yorta Yorta country. Quinn Island has Aboriginal canoe trees. This is the Murray that most visitors drive straight past on the highway.",
    image: "/local/nature/paddock-ulupna-creek.jpg",
    relatedDestinations: ["barmah-and-nathalia", "numurkah-and-farm-gate"]
  },
  {
    slug: "events-and-road-trips",
    name: "Events & Road Trips",
    category: "Events",
    summary:
      "Cactus Country's twelve acres of desert gardens. The Tungamah Silo Art. Tocumwal's aviation museum and gliding from the old WWII aerodrome. Seasonal festivals run through the calendar, but the fixed attractions are worth the drive on any weekend.",
    image: "/local/experiences/cactus-country.jpg",
    relatedDestinations: ["yarrawonga-mulwala", "barmah-and-nathalia", "tocumwal-beaches"]
  }
];
