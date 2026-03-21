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
    tagline: "Sandy river beaches, gum trees, and the classic summer holiday mood.",
    summary:
      "Tocumwal brings the most iconic Beaches of the Murray feeling: sandy banks under towering river red gums, easy family water access, and a relaxed holiday-town rhythm.",
    heroImage: "/beaches/tocumwal-town-beach.jpg",
    gallery: [
      "/local/towns/tocumwal-riverfront.jpg",
      "/beaches/tocumwal-town-beach.jpg",
      "/beaches/hennessy-beach.jpg"
    ],
    highlights: [
      "Family-friendly sandy access to the Murray",
      "Classic holiday park and cabin stays close to the water",
      "Easy pairing with golf, produce stops, and river trails"
    ],
    bestFor: ["Family beach holidays", "River swims", "Summer weekends"],
    mapLabel: "Tocumwal"
  },
  {
    slug: "thompsons-beach-cobram-barooga",
    name: "Thompsons Beach, Cobram & Barooga",
    tagline: "A beach gateway backed by food, golf, and an easy twin-town base.",
    summary:
      "This pocket anchors one of the strategy's strongest place stories: inland beaches paired with award-winning operators, local produce, and one of the most visitor-ready bases in the region.",
    heroImage: "/local/beaches/thompsons-beach.jpg",
    gallery: [
      "/local/beaches/thompsons-beach.jpg",
      "/local/stay/racv-cobram-pool.jpg",
      "/local/produce/blacksmith-provedore.jpg"
    ],
    highlights: [
      "Thompsons Beach as a drawcard for smaller destinations",
      "Golf, food, and twin-town convenience",
      "Strong connections to local produce and operator-led experiences"
    ],
    bestFor: ["Couples and families", "Golf weekends", "Food-led trips"],
    mapLabel: "Cobram / Barooga"
  },
  {
    slug: "yarrawonga-mulwala",
    name: "Yarrawonga & Lake Mulwala",
    tagline: "The lake holiday, reworked as a polished regional escape.",
    summary:
      "The strategy positions this as a hub destination: high-quality accommodation, lake activity, events, and an easy launch point for wider exploration across Moira Shire.",
    heroImage: "/local/lake/sebel-lake.jpg",
    gallery: [
      "/local/lake/sebel-lake.jpg",
      "/local/lake/lake-picnic.jpg",
      "/local/stay/racv-cobram-pool.jpg"
    ],
    highlights: [
      "Lakefront resorts and premium stay options",
      "Water play, boating, and seasonal events",
      "A strong dispersal hub into the wider region"
    ],
    bestFor: ["Lake holidays", "Events", "Long weekends"],
    mapLabel: "Yarrawonga / Mulwala"
  },
  {
    slug: "barmah-and-nathalia",
    name: "Barmah & Nathalia",
    tagline: "Culture, red gums, and the road less travelled.",
    summary:
      "This is the cultural and nature-led side of the shire: giant river red gums, wildlife, heritage stories, and a slower pace that broadens the region beyond summer beaches.",
    heroImage:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Barmah National Park and river red gum landscapes",
      "Authentic heritage towns and local culture",
      "A strong non-summer and nature-led proposition"
    ],
    bestFor: ["Nature escapes", "Cultural detours", "Winter road trips"],
    mapLabel: "Barmah / Nathalia"
  },
  {
    slug: "numurkah-and-farm-gate",
    name: "Numurkah & the Farm Gate Trail",
    tagline: "An agricultural heartland with produce-led reasons to stop and stay.",
    summary:
      "The tourism strategy points directly to local produce as a unique selling point. This area turns that into a clear trip story through makers, paddocks, and food-forward regional stops.",
    heroImage: "/local/produce/manto-produce.jpg",
    gallery: [
      "/local/produce/manto-produce.jpg",
      "/local/produce/warrabilla-winery.jpg",
      "/local/produce/rich-glen.jpg"
    ],
    highlights: [
      "Farm gate stops and regional produce experiences",
      "Easy inclusion in food, family, and road-trip itineraries",
      "A strong shoulder-season and weekend proposition"
    ],
    bestFor: ["Food and produce trails", "Road trips", "Day-to-night touring"],
    mapLabel: "Numurkah"
  },
  {
    slug: "bundalong-and-the-junction",
    name: "Bundalong & the Junction",
    tagline: "River junction energy for boating, sandbars, and easy summer dispersal.",
    summary:
      "Bundalong adds another active-water chapter to the region, helping the Beaches of the Murray story stretch beyond a single town and feel like a connected holiday network.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Popular boating and river-play base",
      "Useful crossover between lake and beach holiday audiences",
      "Supports longer stays by linking multiple water experiences"
    ],
    bestFor: ["Boating holidays", "Group trips", "Summer itineraries"],
    mapLabel: "Bundalong"
  }
];
