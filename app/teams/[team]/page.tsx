import { notFound } from "next/navigation";
import teams from "../../../data/teams.json";
import matches from "../../../data/matches.json";
import Link from "next/link";

interface Props {
  params: { team: string };
}

export default function TeamPage({ params }: Props) {
  const team = teams.find(
    (t) => t.slug === params.team
  );

  if (!team) return notFound();

  const teamMatches = matches.filter(
    (m) =>
      m.home === team.name ||
      m.away === team.name
  );

  return (
    <main style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
      <h1>{team.name}</h1>

      <p style={{ marginTop: "0.5rem", color: "#666" }}>
        {team.country} · {team.continent}
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Club Information</h2>
        <ul>
          <li><strong>Founded:</strong> {team.founded}</li>
          <li><strong>Stadium:</strong> {team.stadium}</li>
          <li>
            <strong>League:</strong>{" "}
            <Link href={`/leagues/${team.league.toLowerCase().replace(" ", "-")}`}>
              {team.league}
            </Link>
          </li>
          <li><strong>League Titles:</strong> {team.titles}</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>About</h2>
        <p>{team.description}</p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Recent Matches</h2>

        {teamMatches.length === 0 ? (
          <p>No matches available.</p>
        ) : (
          <ul>
            {teamMatches.map((match) => (
              <li key={match.slug}>
                <strong>
                  {match.home} vs {match.away}
                </strong>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>
                  {match.date} — {match.score} — {match.league}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

