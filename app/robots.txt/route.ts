import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || "https://factorilab.com"}/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

