/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://websoul.digital',
  generateRobotsTxt: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
}
