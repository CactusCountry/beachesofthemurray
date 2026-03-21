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
      "Sandy entries, shallow water for kids, gum-lined shade, and that unmistakable Australian river-holiday feeling. These are real beaches — just without the salt.",
    image: "/local/beaches/thompsons-beach.jpg",
    relatedDestinations: ["tocumwal-beaches", "thompsons-beach-cobram-barooga", "bundalong-and-the-junction"]
  },
  {
    slug: "farm-gate-and-local-produce",
    name: "Farm Gate & Local Produce",
    category: "Food & Produce",
    summary:
      "Follow the farm gate trail through olive groves, artisan kitchens, and cellar doors. The produce here is a reason to visit in its own right — and it pairs beautifully with a beach day.",
    image: "/local/produce/manto-produce.jpg",
    relatedDestinations: ["numurkah-and-farm-gate", "thompsons-beach-cobram-barooga"]
  },
  {
    slug: "golf-lake-and-leisure",
    name: "Golf, Lake & Leisure",
    category: "Leisure",
    summary:
      "Lakefront resorts, championship golf courses, and long afternoons on the water. A more polished side of the Murray that works beautifully in the cooler months too.",
    image: "/local/lake/sebel-lake.jpg",
    relatedDestinations: ["yarrawonga-mulwala", "thompsons-beach-cobram-barooga"]
  },
  {
    slug: "culture-nature-and-red-gums",
    name: "Culture, Nature & Red Gums",
    category: "Nature",
    summary:
      "Walk through ancient river red gums, spot wildlife in the wetlands, and discover the heritage stories of towns most visitors drive past. This is where the Murray feels truly timeless.",
    image: "/local/nature/paddock-ulupna-creek.jpg",
    relatedDestinations: ["barmah-and-nathalia", "numurkah-and-farm-gate"]
  },
  {
    slug: "events-and-road-trips",
    name: "Events & Road Trips",
    category: "Events",
    summary:
      "Seasonal festivals, silo art trails, and multi-stop road trips that connect the quieter corners of the shire. There's always something on, and always a reason to come back.",
    image: "/local/experiences/cactus-country.jpg",
    relatedDestinations: ["yarrawonga-mulwala", "barmah-and-nathalia", "tocumwal-beaches"]
  }
];
