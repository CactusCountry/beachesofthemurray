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
      "Position the inland beaches as a genuine hero product, with sandy entries, water play, and the nostalgic Australian holiday feel the strategy leans into.",
    image: "/local/beaches/thompsons-beach.jpg",
    relatedDestinations: ["tocumwal-beaches", "thompsons-beach-cobram-barooga", "bundalong-and-the-junction"]
  },
  {
    slug: "farm-gate-and-local-produce",
    name: "Farm Gate & Local Produce",
    category: "Food & Produce",
    summary:
      "Promote the agricultural heartland through produce, tasting stops, and regional makers so visitors spend more and stay longer.",
    image: "/local/produce/manto-produce.jpg",
    relatedDestinations: ["numurkah-and-farm-gate", "thompsons-beach-cobram-barooga"]
  },
  {
    slug: "golf-lake-and-leisure",
    name: "Golf, Lake & Leisure",
    category: "Leisure",
    summary:
      "Support the strategy's growth audience with polished lake stays, golfing weekends, and low-season travel reasons beyond peak summer.",
    image: "/local/lake/sebel-lake.jpg",
    relatedDestinations: ["yarrawonga-mulwala", "thompsons-beach-cobram-barooga"]
  },
  {
    slug: "culture-nature-and-red-gums",
    name: "Culture, Nature & Red Gums",
    category: "Nature",
    summary:
      "Build a stronger non-summer story through the Barmah forest, wildlife, cultural heritage, and quieter road-trip discovery.",
    image: "/local/nature/paddock-ulupna-creek.jpg",
    relatedDestinations: ["barmah-and-nathalia", "numurkah-and-farm-gate"]
  },
  {
    slug: "events-and-road-trips",
    name: "Events & Road Trips",
    category: "Events",
    summary:
      "Support year-round visitation with event moments, silo art detours, and multi-stop itineraries that connect the region's smaller destinations.",
    image: "/local/experiences/cactus-country.jpg",
    relatedDestinations: ["yarrawonga-mulwala", "barmah-and-nathalia", "tocumwal-beaches"]
  }
];
