export type FooterGroup = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type SiteSettings = {
  brandName: string;
  brandTagline: string;
  description: string;
  locationLabel: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  socialLinks: Array<{
    label: string;
    href: string;
  }>;
  footerGroups: FooterGroup[];
  contactEmail: string;
  defaultOgImage: string;
  metadataBase: string;
};

export const siteSettings: SiteSettings = {
  brandName: "Beaches of The Murray",
  brandTagline: "Where the river meets the sand",
  description:
    "Sandy river beaches, farm gate trails, and country towns worth staying for. Moira Shire, Victoria — on the Murray.",
  locationLabel: "Moira Shire, Victoria",
  primaryCta: {
    label: "Start Exploring",
    href: "/plan"
  },
  secondaryCta: {
    label: "Explore Destinations",
    href: "/destinations"
  },
  navigation: [
    { label: "Destinations", href: "/destinations" },
    { label: "Stay", href: "/stay" },
    { label: "See & Do", href: "/see-do" },
    { label: "Plan", href: "/plan" },
    { label: "Stories", href: "/stories" }
  ],
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "Facebook", href: "https://www.facebook.com" }
  ],
  footerGroups: [
    {
      title: "Discover",
      links: [
        { label: "Destinations", href: "/destinations" },
        { label: "Stay", href: "/stay" },
        { label: "See & Do", href: "/see-do" },
        { label: "Stories", href: "/stories" }
      ]
    },
    {
      title: "Plan",
      links: [
        { label: "Weekend Itineraries", href: "/plan" },
        { label: "Travel Notes", href: "/plan#travel-notes" },
        { label: "Best Time to Visit", href: "/plan#seasonal-notes" },
        { label: "Contact", href: "mailto:hello@beachesofthemurray.com.au" }
      ]
    }
  ],
  contactEmail: "hello@beachesofthemurray.com.au",
  defaultOgImage: "/beaches/tocumwal-town-beach.jpg",
  metadataBase: "https://www.beachesofthemurray.com.au"
};
