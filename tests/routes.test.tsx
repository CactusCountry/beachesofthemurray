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

    expect(html).toContain("Inland beaches, river towns, and year-round escapes");
    expect(html).toContain("Tocumwal Town Beach");
    expect(html).toContain("Browse the shire by place");
    expect(html).toContain("Built around the priorities in the local tourism strategy");
  });

  it("renders the core landing pages", async () => {
    const destinationHtml = renderToStaticMarkup(<DestinationsPage />);
    const seeDoHtml = renderToStaticMarkup(<SeeDoPage />);
    const stayHtml = renderToStaticMarkup(<StayPage />);
    const planHtml = renderToStaticMarkup(<PlanPage />);
    const storiesHtml = renderToStaticMarkup(<StoriesPage />);

    expect(destinationHtml).toContain("Choose a destination story");
    expect(seeDoHtml).toContain("Beaches, produce, lake leisure");
    expect(stayHtml).toContain("Pick the style of stay");
    expect(planHtml).toContain("Everything you need to turn a beach stop");
    expect(storiesHtml).toContain("Editorial pieces that help the strategy");
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
    expect(metadata.description).toContain("sandy banks under towering river red gums");
  });
});
