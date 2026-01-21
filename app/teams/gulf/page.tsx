import matches from "../../../data/matches.json";
import Link from "next/link";

export default function GulfTeamsPage() {
  const gulfTeams = Array.from(new Set(
    matches.filter(m => m.teamRegion === "gulf").flatMap(m => [m.home, m.away])
  ));

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>الفرق الخليجية</h1>
      <ul style={{ marginTop: "1rem" }}>
        {gulfTeams.map(team => (
          <li key={team}>
            <Link href={`/teams/${team.toLowerCase()}`}>{team}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
