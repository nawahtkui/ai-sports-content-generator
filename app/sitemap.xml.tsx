import teams from "../data/teams.json";
import matches from "../data/matches.json";
import seasons from "../data/seasons.json";

export const runtime = "edge";

export async function GET() {
  const baseUrl = "https://ai-sports-content-generator.vercel.app";

  const urls = [
    "",
    "matches",
    "seasons",
    ...teams.map((t) => `teams/${t.slug}`),
    ...seasons.map((s) => `seasons/${s.slug}`),
    ...matches.map((m) => `matches/${m.slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `
  <url>
    <loc>${baseUrl}/${u}</loc>
  </url>`).join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
