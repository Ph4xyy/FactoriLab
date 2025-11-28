"use client";

import HeroParallax, { HeroProduct } from "@/components/blocks/hero-parallax";
import SectionWithMockup from "@/components/blocks/section-with-mockup";
import { Header } from "@/components/ui/header-2";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { FeyButton } from "@/components/ui/fey-button";

const heroProducts: HeroProduct[] = [
  {
    title: "Conversion-first SaaS launch",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Founder operating dashboard",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "AI assistant control room",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Luxury brand storytelling site",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1517244864778-5ee2fda9a811?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Client portal for agencies",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Internal ops platform",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "AI automation console",
    link: "#process",
    thumbnail:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Multi-brand web platform",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Calm analytics workspace",
    link: "#services",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "AI-powered support tooling",
    link: "#services",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Global e-commerce storefront",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Founder CRM & tasking",
    link: "#work",
    thumbnail:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "API-first infra dashboard",
    link: "#process",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "B2B lead-gen machine",
    link: "#services",
    thumbnail:
      "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "AI insights surface",
    link: "#process",
    thumbnail:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1400&q=80",
  },
];

const webSection = {
  id: "services",
  title: (
    <>
      Websites that feel like
      <br />
      a product, not a template.
    </>
  ),
  description: (
    <>
      We design and build marketing sites that don&apos;t look like anything
      your competitors ship. Clear narrative, high performance, and layouts
      tuned for real conversions.
      <br />
      <br />
      Everything runs on a modern Next.js + Vercel stack, so your brand
      stays sharp and fast everywhere.
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
      your team actually enjoys.
    </>
  ),
  description: (
    <>
      Dashboards, client portals, and internal tools that feel as considered
      as your public site. We design the flows your team touches every day:
      states, errors, permissions, empty states.
      <br />
      <br />
      Built with TypeScript and modern patterns so you can ship fast without
      collecting debt.
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
      that respect your stack.
    </>
  ),
  description: (
    <>
      We wire AI into your existing tools instead of adding more chaos.
      Triage, routing, reporting, and internal copilots that reduce noise.
      <br />
      <br />
      Observability, failure modes, and data boundaries are part of the
      design, not an afterthought.
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
      A small studio
      <br />
      for serious teams.
    </>
  ),
  description: (
    <>
      Factorilab works with a limited number of teams per quarter. You work
      directly with the people designing and building, not an account layer.
      <br />
      <br />
      We&apos;re here for founders and operators who care about the details:
      copy, motion, systems, and the invisible pieces that make your product
      feel sharp.
    </>
  ),
  primaryImageSrc:
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
  secondaryImageSrc:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
};

function MetricsStrip() {
  return (
    <section className="border-y border-white/8 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-[11px] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          Factorilab builds for founders, lean teams, and agencies that need a calm technical partner.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <span>Websites</span>
          <span className="h-[3px] w-[3px] rounded-full bg-muted-foreground/50" />
          <span>Web apps & dashboards</span>
          <span className="h-[3px] w-[3px] rounded-full bg-muted-foreground/50" />
          <span>AI automation & infra</span>
          <span className="h-[3px] w-[3px] rounded-full bg-muted-foreground/50" />
          <span>Custom agents & copilots</span>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="mt-16 mb-16 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-10"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 max-w-md">
          <h3 className="text-lg md:text-xl font-semibold">
            Ready to plan your next build?
          </h3>
          <p className="text-sm text-muted-foreground">
            Share a few lines about your product, timelines, and constraints.
            We&apos;ll reply with a short Loom or a call invite &mdash; no spam.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <FeyButton>Start a project brief</FeyButton>
          <p className="text-[11px] text-muted-foreground">
            We typically reply within 24 hours on weekdays.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#050506] text-white">
      {/* soft global background, no blue/purple */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,244,227,0.06),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(3,4,6,1),_#050506)]" />

      <div className="relative">
        <Header />

        {/* IMMERSIVE HERO */}
        <section className="relative min-h-[100vh] w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050506]" />

          <HeroParallax products={heroProducts} />
        </section>

        {/* BODY */}
        <main className="relative mx-auto max-w-6xl px-4 pb-20">
          <MetricsStrip />

          <SectionWithMockup {...webSection} />
          <SectionWithMockup {...appsSection} reverseLayout />
          <SectionWithMockup {...aiSection} />
          <SectionWithMockup {...aboutSection} reverseLayout />

          <FinalCtaSection />
        </main>

        <MinimalFooter />
      </div>
    </div>
  );
}
