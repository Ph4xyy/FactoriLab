import { Hero } from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import Metrics from "@/components/metrics";
import Testimonials from "@/components/testimonials";
import LogosCloud from "@/components/logos-cloud";
import { CTA } from "@/components/cta";
import { getPageSEO } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = getPageSEO("Home");

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Metrics />
      <Testimonials />
      <LogosCloud />
      <CTA />
    </main>
  );
}

