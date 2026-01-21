import { notFound } from "next/navigation";
import matches from "../../../data/matches.json";

interface Params {
  params: { team: string };
}

export default function TeamPage({ params }: Params) {
  const teamSlug = params.team.toLowerCase();
  const teamMatches = matches.filter(
    m => m.home.toLowerCase() === teamSlug || m.away.toLowerCase() === teamSlug
  );

  if (teamMatches.length === 0) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>Matches for {teamSlug}</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {teamMatches.map(match => (
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
