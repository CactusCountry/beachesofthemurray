export type StayCategory = {
  slug: string;
  name: string;
  summary: string;
  image: string;
};

export const stayCategories: StayCategory[] = [
  {
    slug: "lakefront-resorts",
    name: "Lakefront Resorts",
    summary:
      "Higher-quality accommodation with water views helps attract the spend-more and stay-longer audiences identified in the strategy.",
    image: "/local/lake/sebel-lake.jpg"
  },
  {
    slug: "river-cabins-and-cottages",
    name: "River Cabins & Cottages",
    summary:
      "Flexible accommodation close to beaches, parks, and town centres for easy family and VFR-led trips.",
    image: "/local/stay/racv-cobram-interior.jpg"
  },
  {
    slug: "holiday-parks-and-family-bases",
    name: "Holiday Parks & Family Bases",
    summary:
      "The classic Australian holiday offer: simple access to beaches, riverfront afternoons, and multi-generational stays.",
    image: "/local/stay/racv-cobram-pool.jpg"
  },
  {
    slug: "nature-lodges-and-eco-escapes",
    name: "Nature Lodges & Eco Escapes",
    summary:
      "A future-facing stay category that supports the strategy's call for more premium nature-based escapes.",
    image: "/local/nature/paddock-ulupna-creek.jpg"
  }
];
