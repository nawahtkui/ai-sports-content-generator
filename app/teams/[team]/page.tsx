import { notFound } from "next/navigation";
import teams from "../../../data/teams.json";
import matches from "../../../data/matches.json";

interface Params {
  params: { team: string };
}

export default function TeamPage({ params }: Params) {
  const teamSlug = params.team.toLowerCase();

  const teamInfo = teams.find((t) => t.slug.toLowerCase() === teamSlug);
  if (!teamInfo) return notFound();

  const teamMatches = matches.filter(
    (m) => m.home.toLowerCase() === teamSlug || m.away.toLowerCase() === teamSlug
  );

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>{teamInfo.name}</h1>
      <p>البلد: {teamInfo.country}</p>
      <h2 style={{ marginTop: "2rem" }}>المباريات:</h2>
      <ul>
        {teamMatches.map((match) => (
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
