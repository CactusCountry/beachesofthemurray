import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import DestinationPage, {
  generateMetadata as generateDestinationMetadata,
  generateStaticParams
} from "@/app/destinations/[slug]/page";
import DestinationsPage from "@/app/destinations/page";
import HomePage from "@/app/page";
import PlanPage from "@/app/plan/page";
import SeeDoPage from "@/app/see-do/page";
import StayPage from "@/app/stay/page";
import StoriesPage from "@/app/stories/page";

describe("route smoke tests", () => {
  it("renders the homepage hero and supporting sections", async () => {
    const html = renderToStaticMarkup(<HomePage />);

    expect(html).toContain("Real beaches on a real river. Country towns that are worth the stay.");
    expect(html).toContain("Tocumwal Town Beach");
    expect(html).toContain("See how the towns sit along the river.");
    expect(html).toContain("Six destinations. Each one a different kind of weekend.");
  });

  it("renders the core landing pages", async () => {
    const destinationHtml = renderToStaticMarkup(<DestinationsPage />);
    const seeDoHtml = renderToStaticMarkup(<SeeDoPage />);
    const stayHtml = renderToStaticMarkup(<StayPage />);
    const planHtml = renderToStaticMarkup(<PlanPage />);
    const storiesHtml = renderToStaticMarkup(<StoriesPage />);

    expect(destinationHtml).toContain("See how the towns sit along the river.");
    expect(destinationHtml).toContain("Six towns, six different weekends.");
    expect(seeDoHtml).toContain("Morning on the sand. Afternoon somewhere you didn&#x27;t expect.");
    expect(stayHtml).toContain("Four ways to wake up on the Murray.");
    expect(planHtml).toContain("Three weekends, ready to go.");
    expect(storiesHtml).toContain("What a weekend here actually looks like.");
  });

  it("renders destination pages from structured content", async () => {
    const params = await generateStaticParams();

    expect(params.length).toBeGreaterThanOrEqual(4);

    const page = await DestinationPage({
      params: Promise.resolve({ slug: params[0].slug })
    });
    const html = renderToStaticMarkup(page);

    expect(html).toContain("Nearby Experiences");
    expect(html).toContain("Plan a Weekend Here");
  });

  it("builds metadata for destination pages", async () => {
    const metadata = await generateDestinationMetadata({
      params: Promise.resolve({ slug: "tocumwal-beaches" })
    });

    expect(metadata.title).toBe("Tocumwal Beaches | Beaches of The Murray");
    expect(metadata.description).toContain("Tocumwal has more river beaches than any town on the Murray");
  });
});
