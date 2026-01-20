import { notFound } from "next/navigation";
import teams from "@/data/teams.json";
import matches from "@/data/matches.json";

interface Params {
  params: { team: string };
}

export default function TeamPage({ params }: Params) {
  const teamSlug = params.team.toLowerCase();

  const team = teams.find(t => t.id.toLowerCase() === teamSlug);
  if (!team) return notFound();

  const teamMatches = matches.filter(
    m => m.home.toLowerCase() === teamSlug || m.away.toLowerCase() === teamSlug
  );

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>{team.name} - {team.region}</h1>
      {teamMatches.length === 0 ? (
        <p>لا توجد مباريات لهذا الفريق حتى الآن.</p>
      ) : (
        <ul style={{ lineHeight: "2" }}>
          {teamMatches.map(match => (
            <li key={match.slug}>
              <strong>{match.home} vs {match.away}</strong> — {match.date} — {match.score}
              <p>{match.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
