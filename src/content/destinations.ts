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
    tagline: "Twenty-four beaches, a chocolate school, and the Murray's most genuine river town.",
    summary:
      "Tocumwal has more river beaches than any town on the Murray. Twenty-four of them, spread along sandy bends and red gum banks, most of them quiet enough that you'll have shade to yourself on a weekday. The town itself still runs on that old bush-camping energy. Kids in the river by nine, chocolate-making classes at Tocumwal Chocolate School by eleven, fish and chips on the foreshore by dark.",
    heroImage: "/beaches/tocumwal-town-beach.jpg",
    gallery: [
      "/local/towns/tocumwal-riverfront.jpg",
      "/beaches/tocumwal-town-beach.jpg",
      "/beaches/hennessy-beach.jpg"
    ],
    highlights: [
      "More river beaches than anywhere else on the Murray, with shallow entries for young swimmers",
      "Tocumwal Chocolate School runs hands-on classes and has riverside studios you can stay in",
      "WWII aviation heritage at the Tocumwal Aviation Museum and gliding with the Soaring Centre"
    ],
    bestFor: ["Family beach holidays", "River swims", "Bush camping"],
    mapLabel: "Tocumwal"
  },
  {
    slug: "thompsons-beach-cobram-barooga",
    name: "Thompsons Beach, Cobram & Barooga",
    tagline: "The beach that made the national rankings, and the twin towns behind it.",
    summary:
      "Thompsons Beach was voted one of Australia's best beaches. Not bad for a river. The sand is broad and pale, the red gums are enormous, and they've put in floodlights so families stay on after dark in summer. Behind the beach, Cobram and Barooga run together as a proper base: Cobram Barooga Golf Club (nicknamed 'the Royal Melbourne of the Bush'), Cactus Country's twelve acres of desert gardens, The Big Strawberry for picking your own, and the Bullanginya Dreaming walk along the river.",
    heroImage: "/local/beaches/thompsons-beach.jpg",
    gallery: [
      "/local/beaches/thompsons-beach.jpg",
      "/local/stay/racv-cobram-pool.jpg",
      "/local/produce/blacksmith-provedore.jpg"
    ],
    highlights: [
      "Thompsons Beach, voted one of Australia's top beaches, with floodlit summer evenings",
      "Cobram Barooga Golf Club, two championship courses rated among Victoria's finest",
      "Cactus Country, The Big Strawberry, and the 1.8km Bullanginya Dreaming heritage walk"
    ],
    bestFor: ["Couples and families", "Golf weekends", "Food-led trips"],
    mapLabel: "Cobram / Barooga"
  },
  {
    slug: "yarrawonga-mulwala",
    name: "Yarrawonga & Lake Mulwala",
    tagline: "A lake with a sunken forest, world-class golf, and the region's most polished stay.",
    summary:
      "Lake Mulwala is strange and beautiful. Dead red gums rise from the water where the Yarrawonga Weir flooded the forest decades ago, and the effect is haunting, especially at dawn. The lake itself is enormous, calm, and warm enough for skiing well into autumn. On shore, the Yarrawonga Mulwala Golf Club Resort runs three courses, including the Black Bull Championship designed by Peter Thomson. Rich Glen Providore does exceptional olive oils. Mulwala Water Ski Club is the largest in the world.",
    heroImage: "/local/lake/sebel-lake.jpg",
    gallery: [
      "/local/lake/sebel-lake.jpg",
      "/local/lake/lake-picnic.jpg",
      "/local/stay/racv-cobram-pool.jpg"
    ],
    highlights: [
      "Lake Mulwala's submerged red gum forest, one of the Murray's most photographed landscapes",
      "Three golf courses including the Peter Thomson-designed Black Bull Championship",
      "Rich Glen Providore and the monthly Farmers Market on the lake shore"
    ],
    bestFor: ["Lake holidays", "Golf", "Long weekends"],
    mapLabel: "Yarrawonga / Mulwala"
  },
  {
    slug: "barmah-and-nathalia",
    name: "Barmah & Nathalia",
    tagline: "The world's largest river red gum forest, Yorta Yorta country, and towns the highway misses.",
    summary:
      "Barmah National Park holds the largest river red gum forest on earth. It's Ramsar-listed wetland, Yorta Yorta country, and the kind of place where the canopy closes overhead and the light changes completely. The Dharnya Centre tells the story of the Yorta Yorta people who have lived here since the Creation. Nathalia, just south, is a small town with a surprisingly good pub and a genuinely warm main street. Come in winter, when fog sits on the river and the forest is at its most atmospheric.",
    heroImage: "/local/nature/barmah-aerial.jpg",
    gallery: [
      "/local/nature/barmah-aerial.jpg",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Barmah National Park, the world's largest river red gum forest and a Ramsar-listed wetland",
      "The Dharnya Centre on Yorta Yorta country, the cultural heart of the region",
      "Best visited in autumn or winter when the forest is quiet and the fog sits low on the river"
    ],
    bestFor: ["Nature escapes", "First Nations culture", "Winter road trips"],
    mapLabel: "Barmah / Nathalia"
  },
  {
    slug: "numurkah-and-farm-gate",
    name: "Numurkah & the Farm Gate Trail",
    tagline: "Farm gates, silo art, and the best driving country between Melbourne and the Murray.",
    summary:
      "The Murray Farm Gate Trail threads through the country around Numurkah, linking producers who actually grow what they sell. Heirloom tomatoes, purple garlic, cold-pressed olive oil, free-range pork, local honey. Some stops have cellar doors. Others have honesty boxes at the gate and a dog asleep on the porch. This is also the heart of the Melbourne to the Murray Silo Art Trail — six painted grain silos at Katamatite, Tungamah, Picola, St James, Devenish, and Goorambat, each one telling a local story through large-scale murals. Autumn is peak season for the produce, but the silos and the driving are good year-round.",
    heroImage: "/local/produce/manto-produce.jpg",
    gallery: [
      "/local/produce/manto-produce.jpg",
      "/local/produce/warrabilla-winery.jpg",
      "/local/produce/rich-glen.jpg"
    ],
    highlights: [
      "The Murray Farm Gate Trail, a self-guided drive linking growers, makers, and cellar doors",
      "Seasonal produce at its best in autumn: heirloom tomatoes, olive oil, local honey",
      "The Melbourne to the Murray Silo Art Trail — six painted silos at Katamatite, Tungamah, Picola, and beyond"
    ],
    bestFor: ["Food and produce trails", "Silo art road trips", "Autumn weekends"],
    mapLabel: "Numurkah"
  },
  {
    slug: "bundalong-and-the-junction",
    name: "Bundalong & the Junction",
    tagline: "Two rivers, one sandbar, and a boat ramp that gets busy for good reason.",
    summary:
      "The Murray and the Ovens meet here, and the junction creates a stretch of water that boaters and skiers come back to every summer. Bundalong is small. There's a caravan park, a boat ramp, sandbars that shift with the current, and not much else. That's the point. Groups book the same spot every January. Families teach their kids to ski on the flat water upstream. It's ten minutes from Lake Mulwala if you want a change of scene, twenty from Cobram if you want a proper dinner.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "The junction of the Murray and Ovens rivers, with sandbars and flat water for skiing",
      "Ten minutes from Lake Mulwala, twenty from Cobram",
      "A no-frills base that regulars rebook every year"
    ],
    bestFor: ["Boating holidays", "Group trips", "Summer weekends"],
    mapLabel: "Bundalong"
  }
];
