import matches from "../data/matches.json";

const SITE_URL = "https://ai-sports-content-generator-lvfi.vercel.app";

export default function sitemap() {
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/matches`,
      lastModified: new Date(),
    },
  ];

  const matchPages = matches.map((match) => ({
    url: `${SITE_URL}/matches/${match.slug}`,
    lastModified: new Date(match.date),
  }));

  return [...staticPages, ...matchPages];
}
