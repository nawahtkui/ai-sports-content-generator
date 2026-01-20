import matches from "../../../data/matches.json";
import { notFound } from "next/navigation";

interface Props {
  params: { season: string };
}

export default function SeasonPage({ params }: Props) {
  const seasonMatches = matches.filter(
    (m) => m.season === params.season
  );

  if (seasonMatches.length === 0) return notFound();

  return (
    <main style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
      <h1>Season {params.season}</h1>

      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {seasonMatches.map((match) => (
          <li key={match.slug}>
            <strong>
              {match.home} vs {match.away}
            </strong>
            <div style={{ color: "#666" }}>
              {match.date} — {match.score} — {match.league}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
