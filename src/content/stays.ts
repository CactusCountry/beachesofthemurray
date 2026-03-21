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
      "Wake up to water views, walk to the lake, and settle into the kind of stay that makes one night feel too short. Premium accommodation with real proximity to the action.",
    image: "/local/lake/sebel-lake.jpg"
  },
  {
    slug: "river-cabins-and-cottages",
    name: "River Cabins & Cottages",
    summary:
      "Tucked along the river or a short walk from town, these self-contained stays give you a base with character and the freedom to set your own pace.",
    image: "/local/stay/racv-cobram-interior.jpg"
  },
  {
    slug: "holiday-parks-and-family-bases",
    name: "Holiday Parks & Family Bases",
    summary:
      "The classic river holiday starts here — kids on bikes, riverfront afternoons, and three generations sharing a cabin. Simple, affordable, and right by the water.",
    image: "/local/stay/racv-cobram-pool.jpg"
  },
  {
    slug: "nature-lodges-and-eco-escapes",
    name: "Nature Lodges & Eco Escapes",
    summary:
      "Quiet, considered stays surrounded by bushland and river. For travellers who want to slow right down and wake up somewhere that feels genuinely away from it all.",
    image: "/local/nature/paddock-ulupna-creek.jpg"
  }
];
