import Link from "next/link";
import teams from "../../data/teams.json";

export const metadata = {
  title: "Football Teams | AI Sports Content Generator",
  description: "Browse football teams by league, country, and continent."
};

export default function TeamsPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
      <h1>Football Teams</h1>
      <p>Browse teams from different leagues and continents.</p>

      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {teams.map((team) => (
          <li key={team.slug}>
            <Link href={`/teams/${team.slug}`}>
              <strong>{team.name}</strong>
            </Link>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              {team.country} — {team.league} — Founded {team.founded}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

