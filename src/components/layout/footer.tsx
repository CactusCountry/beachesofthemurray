import Image from "next/image";
import Link from "next/link";

import { siteSettings } from "@/content";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-[#0d202a] py-16 text-white">
      <Container className="space-y-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-xl space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/55">
              Stay In Touch
            </p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl">
              A weekend guide to the river coast, sent when it matters.
            </h2>
            <p className="text-base leading-7 text-white/72">
              For V1 this is a simple tourism contact CTA. It is ready to be
              replaced by a live newsletter form or CRM integration later.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={`mailto:${siteSettings.contactEmail}`}>
                Contact Tourism Desk
              </LinkButton>
              <LinkButton href="/plan" variant="secondary">
                Browse Itineraries
              </LinkButton>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {siteSettings.footerGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/64">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base text-white/82 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/beaches-of-the-murray-logo.svg"
              alt="Beaches of The Murray logo"
              width={577}
              height={172}
              className="h-10 w-auto sm:h-12"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-gold/80">
                Inland beaches and year-round river escapes
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            {siteSettings.socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
