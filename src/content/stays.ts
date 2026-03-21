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
      "Yarrawonga and Lake Mulwala have the best of these. Balcony over the water, pool downstairs, golf course next door. The kind of stay where you cancel your plans for the second day because the room is too good to leave.",
    image: "/local/lake/sebel-lake.jpg"
  },
  {
    slug: "river-cabins-and-cottages",
    name: "River Cabins & Cottages",
    summary:
      "Self-contained places along the river or a short walk from town. Some have been there for decades. Most have a verandah, a barbecue, and a path to the water. You set your own schedule.",
    image: "/local/stay/racv-cobram-interior.jpg"
  },
  {
    slug: "holiday-parks-and-family-bases",
    name: "Holiday Parks & Family Bases",
    summary:
      "Kids on bikes, riverfront sites, three generations sharing a cabin. The classic Murray River holiday. Most parks sit right on the water at Cobram, Tocumwal, or Yarrawonga, and they book out early over summer.",
    image: "/local/stay/racv-cobram-pool.jpg"
  },
  {
    slug: "nature-lodges-and-eco-escapes",
    name: "Nature Lodges & Eco Escapes",
    summary:
      "Stays in the bush near Barmah or along the quieter stretches of river. You hear birds, not traffic. The nearest town might be twenty minutes away. That's the idea.",
    image: "/local/nature/paddock-ulupna-creek.jpg"
  }
];
