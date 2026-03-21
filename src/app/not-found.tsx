import Link from "next/link";

import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  return (
    <div className="bg-[#102732] pt-28 text-white">
      <Container className="flex min-h-[70vh] flex-col justify-center py-20">
        <p className="text-xs uppercase tracking-[0.32em] text-white/58">404</p>
        <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl">
          That shoreline is not on the map yet.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/74">
          The page you were looking for does not exist, but the rest of the
          region is still worth exploring.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton href="/">Return Home</LinkButton>
          <Link href="/destinations" className="rounded-full border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.18em] text-white/80">
            Browse Destinations
          </Link>
        </div>
      </Container>
    </div>
  );
}
