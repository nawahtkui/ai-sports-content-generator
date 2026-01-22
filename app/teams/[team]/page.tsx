import { notFound } from "next/navigation";
import matches from "../../../data/matches.json";
import teams from "../../../data/teams.json";

interface Params {
  params: { team: string };
}

export default function TeamPage({ params }: Params) {
  const team = teams.find(t => t.slug === params.team);
  if (!team) return notFound();

  const teamMatches = matches.filter(
    m => m.home === team.name || m.away === team.name
  );

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <h1>{team.name}</h1>
      <h2>المباريات</h2>
      <ul style={{ lineHeight: "2" }}>
        {teamMatches.map(match => (
          <li key={match.slug}>
            <strong>{match.home} vs {match.away}</strong> — {match.date} — {match.score}
          </li>
        ))}
      </ul>
    </main>
  );
}
