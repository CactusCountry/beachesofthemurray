export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  bestFor: string[];
  mapLabel: string;
};

export const destinations: Destination[] = [
  {
    slug: "tocumwal-beaches",
    name: "Tocumwal Beaches",
    tagline: "Sandy river banks, towering red gums, and the sound of summer on the Murray.",
    summary:
      "Wide sandy beaches meet towering river red gums in a town that still feels like the classic Australian river holiday. Easy water access for families, shady picnic spots, and a pace that slows the moment you arrive.",
    heroImage: "/beaches/tocumwal-town-beach.jpg",
    gallery: [
      "/local/towns/tocumwal-riverfront.jpg",
      "/beaches/tocumwal-town-beach.jpg",
      "/beaches/hennessy-beach.jpg"
    ],
    highlights: [
      "Broad sandy riverfront with shallow entries for young swimmers",
      "Holiday parks and riverside cabins just minutes from the water",
      "Pair a beach day with golf, local produce, or a river red gum walk"
    ],
    bestFor: ["Family beach holidays", "River swims", "Summer weekends"],
    mapLabel: "Tocumwal"
  },
  {
    slug: "thompsons-beach-cobram-barooga",
    name: "Thompsons Beach, Cobram & Barooga",
    tagline: "Golden sand, great food, and a twin-town base that makes weekends easy.",
    summary:
      "Thompsons Beach is the postcard moment — golden light on broad sand, families on the shore, red gums framing the river. Back in town, Cobram and Barooga offer award-winning dining, local produce, and some of the best golf on the Murray.",
    heroImage: "/local/beaches/thompsons-beach.jpg",
    gallery: [
      "/local/beaches/thompsons-beach.jpg",
      "/local/stay/racv-cobram-pool.jpg",
      "/local/produce/blacksmith-provedore.jpg"
    ],
    highlights: [
      "Thompsons Beach — one of the Murray's most photographed stretches of sand",
      "Championship golf, provedores, and cellar doors within easy reach",
      "A twin-town base with dining, stays, and local operators all close together"
    ],
    bestFor: ["Couples and families", "Golf weekends", "Food-led trips"],
    mapLabel: "Cobram / Barooga"
  },
  {
    slug: "yarrawonga-mulwala",
    name: "Yarrawonga & Lake Mulwala",
    tagline: "Lake views, long weekends, and a polished base for exploring the region.",
    summary:
      "Lake Mulwala opens up a different side of the Murray — wide water, resort-style stays, boating, and a calendar of events that runs well beyond summer. Yarrawonga is the kind of place where one night easily becomes three.",
    heroImage: "/local/lake/sebel-lake.jpg",
    gallery: [
      "/local/lake/sebel-lake.jpg",
      "/local/lake/lake-picnic.jpg",
      "/local/stay/racv-cobram-pool.jpg"
    ],
    highlights: [
      "Lakefront resorts and premium accommodation with water views",
      "Boating, water sports, and a year-round events calendar",
      "An easy launch point for day trips across the shire"
    ],
    bestFor: ["Lake holidays", "Events", "Long weekends"],
    mapLabel: "Yarrawonga / Mulwala"
  },
  {
    slug: "barmah-and-nathalia",
    name: "Barmah & Nathalia",
    tagline: "Ancient red gums, quiet rivers, and stories the highway misses.",
    summary:
      "This is the Murray you don't expect — giant river red gums older than the colony, wetland birdlife, heritage towns with character, and a slower pace that rewards the curious. Beautiful in every season, and at its most powerful in autumn and winter.",
    heroImage:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Barmah National Park — the world's largest river red gum forest",
      "Heritage towns with genuine local character and warm welcomes",
      "A destination that comes alive in the cooler months"
    ],
    bestFor: ["Nature escapes", "Cultural detours", "Winter road trips"],
    mapLabel: "Barmah / Nathalia"
  },
  {
    slug: "numurkah-and-farm-gate",
    name: "Numurkah & the Farm Gate Trail",
    tagline: "Paddock to plate country, where the food alone is worth the drive.",
    summary:
      "Olive groves, artisan provedores, cellar doors, and farm gate stops line the roads around Numurkah. This is the agricultural heart of Moira Shire — a place where a produce trail can anchor a whole weekend, any time of year.",
    heroImage: "/local/produce/manto-produce.jpg",
    gallery: [
      "/local/produce/manto-produce.jpg",
      "/local/produce/warrabilla-winery.jpg",
      "/local/produce/rich-glen.jpg"
    ],
    highlights: [
      "Farm gate trails through olive groves, orchards, and regional makers",
      "A natural addition to any beach weekend or road-trip itinerary",
      "Just as rewarding in autumn and winter as it is in summer"
    ],
    bestFor: ["Food and produce trails", "Road trips", "Day-to-night touring"],
    mapLabel: "Numurkah"
  },
  {
    slug: "bundalong-and-the-junction",
    name: "Bundalong & the Junction",
    tagline: "Where two rivers meet — sandbars, boats, and long summer afternoons.",
    summary:
      "Bundalong sits at the junction of the Murray and Ovens rivers, and the water here has its own energy. Popular with boaters, group holiday-makers, and families chasing one more swim before sundown. Link it with a lake day or a beach stop nearby and the region starts to unfold.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "A favourite base for boating, skiing, and river-play weekends",
      "Easy to combine with lake stops and beach days nearby",
      "The kind of place that turns a day trip into a longer stay"
    ],
    bestFor: ["Boating holidays", "Group trips", "Summer itineraries"],
    mapLabel: "Bundalong"
  }
];
