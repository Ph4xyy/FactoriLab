/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://vaultic.ai",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/admin/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
  },
};

