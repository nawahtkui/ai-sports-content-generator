import { notFound } from "next/navigation";
import seasons from "../../../data/seasons.json";
import matches from "../../../data/matches.json";

interface Params {
  params: { season: string };
}

export default function SeasonPage({ params }: Params) {
  const seasonSlug = params.season.toLowerCase();
  const seasonInfo = seasons.find((s) => s.slug.toLowerCase() === seasonSlug);

  if (!seasonInfo) return notFound();

  const seasonMatches = matches.filter((m) => m.season === seasonSlug);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>{seasonInfo.name} ({seasonInfo.year})</h1>
      <h2 style={{ marginTop: "2rem" }}>المباريات:</h2>
      <ul>
        {seasonMatches.map((match) => (
          <li key={match.slug}>
            <strong>{match.home} vs {match.away}</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              {match.date} — {match.score}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
