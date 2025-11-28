import HeroParallax, { HeroProduct } from "@/components/blocks/hero-parallax";
import SectionWithMockup from "@/components/blocks/section-with-mockup";
import { Header } from "@/components/ui/header-2";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { FeyButton } from "@/components/ui/fey-button";
import { getPageSEO } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = getPageSEO("Home");

const heroProducts: HeroProduct[] = [
  {
    title: "High-converting landing for SaaS",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fintech analytics dashboard",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI assistant workspace",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luxury brand storytelling site",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1517244864778-5ee2fda9a811?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Creator membership platform",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1523287562758-66c7fc58967a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Internal operations dashboard",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI automation console",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "B2B lead-gen machine",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Minimal editorial layout",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Global ecommerce storefront",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI-powered support tooling",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Founder operating system",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Multi-brand web platform",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI infra control plane",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Vercel + AI marketing stack",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
];

const webSection = {
  id: "services",
  title: (
    <>
      Tailored websites that feel
      <br />
      like a product, not a template.
    </>
  ),
  description: (
    <>
      We design and build websites that don&apos;t look like anything your
      competitors ship. High-end UX, clear storytelling, and performance
      tuned for real conversions on desktop and mobile.
      <br />
      <br />
      From brand sites to launches and sales funnels, everything runs on a
      modern Next.js + Vercel stack so your site stays fast globally.
    </>
  ),
  primaryImageSrc:
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
  secondaryImageSrc:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
};

const appsSection = {
  id: "work",
  title: (
    <>
      Web apps & internal tools
      <br />
      that your team actually loves using.
    </>
  ),
  description: (
    <>
      We build opinionated web apps and dashboards for founders and teams.
      Client portals, CRMs, analytics, and internal tools that remove
      friction instead of adding more.
      <br />
      <br />
      TypeScript, React, and production-grade patterns so your product can
      evolve without the usual technical debt.
    </>
  ),
  primaryImageSrc:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  secondaryImageSrc:
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80",
};

const aiSection = {
  id: "process",
  title: (
    <>
      AI automation, infra & agents
      <br />
      designed around your workflows.
    </>
  ),
  description: (
    <>
      We wire together your stack with AI—not the other way around. From
      email triage and lead routing, to internal copilots and custom agents,
      we design calm, robust automations.
      <br />
      <br />
      We care about observability, failure modes, and security, not just
      &quot;wow&quot; demos. Every system is documented and production-ready.
    </>
  ),
  primaryImageSrc:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  secondaryImageSrc:
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1400&q=80",
};

const aboutSection = {
  id: "about",
  title: (
    <>
      A small studio for
      <br />
      ambitious teams.
    </>
  ),
  description: (
    <>
      Factorilab is intentionally small. You work directly with builders who
      understand product, not an account manager.
      <br />
      <br />
      We take on a limited number of projects per quarter so we can obsess
      over details: interaction, copy, performance, and the invisible systems
      behind them.
    </>
  ),
  primaryImageSrc:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  secondaryImageSrc:
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
};

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#050506] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,244,227,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(3,4,6,1),_#050506)]" />
      <div className="relative">
        <Header />

        <main className="mx-auto max-w-6xl px-4 pb-20">
          <HeroParallax products={heroProducts} />

          {/* Trust row */}
          <section className="mt-12 border-y border-white/5 py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-muted-foreground">
                Factorilab builds for founders, lean teams, and agencies that
                need a quiet, reliable technical partner.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-[11px] text-muted-foreground/80">
                <span>Websites</span>
                <span className="h-1 w-1 rounded-full bg-[#f4d68b]/60" />
                <span>Web apps & dashboards</span>
                <span className="h-1 w-1 rounded-full bg-[#f4d68b]/60" />
                <span>AI automation & infra</span>
                <span className="h-1 w-1 rounded-full bg-[#f4d68b]/60" />
                <span>Custom agents & copilots</span>
              </div>
            </div>
          </section>

          <SectionWithMockup {...webSection} />
          <SectionWithMockup {...appsSection} reverseLayout />
          <SectionWithMockup {...aiSection} />
          <SectionWithMockup {...aboutSection} reverseLayout />

          {/* Simple contact / CTA section */}
          <section
            id="contact"
            className="mt-10 mb-10 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-md">
                <h3 className="text-lg md:text-xl font-semibold">
                  Ready to plan your next build?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tell us about your product, timelines, and non-negotiables.
                  We&apos;ll reply with a short Loom or a call invite—no
                  pressure, no spam.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <FeyButton>
                  Start a project brief
                </FeyButton>
                <p className="text-[11px] text-muted-foreground">
                  We typically reply within 24 hours on weekdays.
                </p>
              </div>
            </div>
          </section>
        </main>

        <MinimalFooter />
      </div>
    </div>
  );
}
