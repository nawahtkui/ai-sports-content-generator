import { notFound } from "next/navigation";
import teams from "../../../data/teams.json";
import matches from "../../../data/matches.json";

interface Params {
  params: { team: string };
}

export default function TeamPage({ params }: Params) {
  const teamSlug = params.team.toLowerCase();

  // جلب بيانات الفريق من teams.json
  const team = teams.find(t => t.slug.toLowerCase() === teamSlug);
  if (!team) return notFound();

  // جلب كل المباريات التي يشارك فيها الفريق
  const teamMatches = matches.filter(
    m => m.home.toLowerCase() === teamSlug || m.away.toLowerCase() === teamSlug
  );

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>{team.name} ({team.country})</h1>
      <h2 style={{ marginTop: "1rem" }}>Matches</h2>
      {teamMatches.length === 0 ? (
        <p>No matches found for this team.</p>
      ) : (
        <ul style={{ marginTop: "1rem", lineHeight: "2" }}>
          {teamMatches.map(match => (
            <li key={match.slug}>
              <strong>{match.home} vs {match.away}</strong>
              <div style={{ fontSize: "0.9rem", color: "#666" }}>
                {match.date} — {match.score}
              </div>
              <div>{match.summary}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
