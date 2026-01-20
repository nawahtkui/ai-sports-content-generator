import Link from "next/link";
import matches from "../../data/matches.json";

// استخراج جميع الفرق بشكل فريد
const teams = Array.from(
  new Set(matches.flatMap((m) => [m.home, m.away]))
);

export default function TeamsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>All Teams</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {teams.map((team) => (
          <li key={team}>
            <Link href={`/teams/${team.toLowerCase()}`}>
              {team}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
