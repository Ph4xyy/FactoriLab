"use client"

import React from "react"
import { Header } from "@/components/ui/header-2"
import { HeroParallax } from "@/components/blocks/hero-parallax"
import SectionWithMockup from "@/components/blocks/section-with-mockup"
import { MinimalFooter } from "@/components/ui/minimal-footer"

const heroProducts = [
  {
    title: "Founders' operating system",
    tag: "Webapp · Product OS",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "AI-powered service desk",
    tag: "AI automation",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Luxury e-commerce experience",
    tag: "Commerce · Web",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Analytics cockpit for operators",
    tag: "Dashboard",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Multi-agent backoffice",
    tag: "AI agents",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Booking experiences that convert",
    tag: "Web & product",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Automation for ops-heavy teams",
    tag: "AI & workflows",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1516893846132-2a7e39caaea0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Private client portal",
    tag: "Client experience",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Real-time revenue visibility",
    tag: "Data infra",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Intelligent onboarding flows",
    tag: "Conversion design",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Internal tools with taste",
    tag: "Product design",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Orchestrated AI agents",
    tag: "AI infrastructure",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Executive analytics cockpit",
    tag: "Strategy layer",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Unified operations hub",
    tag: "Ops OS",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Founders' command center",
    tag: "C-suite tooling",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050509] to-black text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.04)_0,_transparent_55%)]" />
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col">
        <Header />

        <section aria-labelledby="hero">
          <HeroParallax products={heroProducts} />
        </section>

        <section
          id="services"
          className="mx-auto w-full max-w-5xl px-4 pb-16 md:px-6 md:pb-24"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
                Services
              </p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Web, product, and AI — built as one system.
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                Every engagement blends interface, logic, and infrastructure.
                Factorilab works with founders and operators to design systems
                that don&apos;t just look expensive — they compound over time.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                  01 · Web & identity
                </p>
                <h3 className="mt-3 text-sm font-semibold text-white md:text-base">
                  Bespoke websites & brand layers
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  High-conversion marketing sites, landing systems, and
                  front-of-house experiences that feel tailored, not templated.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                  02 · Webapps & tools
                </p>
                <h3 className="mt-3 text-sm font-semibold text-white md:text-base">
                  Internal tools & client platforms
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Dashboards, portals, and product surfaces built for teams that
                  live inside their tools all day.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                  03 · AI automations
                </p>
                <h3 className="mt-3 text-sm font-semibold text-white md:text-base">
                  Workflow design & orchestration
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Automations that sit on top of your stack, triage inboxes,
                  route work, and enforce process so humans stay in their zone
                  of genius.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                  04 · AI infrastructure & agents
                </p>
                <h3 className="mt-3 text-sm font-semibold text-white md:text-base">
                  Production-grade AI & data foundations
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  From data pipelines to multi-agent architectures, we design
                  systems that don&apos;t break when you scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionWithMockup
          id="work"
          eyebrow="Selected capabilities"
          title={
            <>
              Web experiences that feel
              <br />
              inevitable, not loud.
            </>
          }
          description={
            <>
              Factorilab designs interfaces with a restrained, luxurious visual
              language — deep contrast, precise grids, and motion only where it
              earns its place. Every surface is tuned to feel fast, calm, and
              expensive while remaining conversion-focused.
            </>
          }
          primaryImageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
          secondaryImageSrc="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80"
        />

        <SectionWithMockup
          id="process"
          eyebrow="AI & automation"
          reverseLayout
          title={
            <>
              AI systems that behave
              <br />
              like your best operator.
            </>
          }
          description={
            <>
              We map your processes, design the right agents, and connect them
              to your tools — from CRMs and support inboxes to internal
              databases. The output: a quiet layer of automation that runs 24/7
              and sends humans only the decisions that matter.
            </>
          }
          primaryImageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
          secondaryImageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80"
        />

        <section
          id="about"
          className="mx-auto w-full max-w-5xl px-4 py-16 md:px-6 md:py-24"
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-start">
            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
                Engagement model
              </p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                A small, senior studio with room for a few serious teams.
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                Factorilab works with a limited number of clients in parallel.
                We embed with your leadership, understand the real constraints,
                then build systems that respect them — instead of fighting your
                reality.
              </p>
              <p className="text-sm text-slate-400 md:text-[15px]">
                Typical collaborations range from flagship marketing sites to
                full operating systems: webapps, AI automations, internal tools,
                and AI infrastructure unified under one design language.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span>Ideal partners</span>
                <span className="text-[11px] text-emerald-300">
                  Funded · profitable · decisive
                </span>
              </div>
              <ul className="mt-2 space-y-2">
                <li>• SaaS & product teams upgrading from patchwork tools.</li>
                <li>• Agencies and studios building their next flagship layer.</li>
                <li>• Operators who want real automation, not just dashboards.</li>
              </ul>
              <div className="mt-4 border-t border-white/10 pt-3 text-[11px] text-slate-400">
                First step: a 30-minute strategy call to map your stack and
                identify 2–3 high-leverage projects. No generic pitch deck.
              </div>
            </div>
          </div>
        </section>

        <MinimalFooter />
      </main>
    </div>
  )
}

