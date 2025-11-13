import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  defaultTitle: "FactoriLab - Build Lightning-Fast AI Experiences & Elite Web Apps",
  titleTemplate: "%s | FactoriLab",
  description:
    "FactoriLab crafts conversion-focused websites, robust web apps, and production AI systems—deployed on Vercel for speed at global scale.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://factorilab.com",
    siteName: "FactoriLab",
    title: "FactoriLab - Build Lightning-Fast AI Experiences & Elite Web Apps",
    description:
      "FactoriLab crafts conversion-focused websites, robust web apps, and production AI systems—deployed on Vercel for speed at global scale.",
    images: [
      {
        url: "/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "FactoriLab",
      },
    ],
  },
  twitter: {
    handle: "@FactoriLab",
    site: "@FactoriLab",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

export default defaultSEO;

