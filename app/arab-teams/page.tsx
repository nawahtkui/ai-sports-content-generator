import teams from "../../data/teams.json";
import Link from "next/link";

export default function ArabTeamsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>الفرق العربية والخليجية</h1>
      <ul style={{ marginTop: "1rem" }}>
        {teams.map((team) => (
          <li key={team.slug}>
            <Link href={`/teams/${team.slug}`}>
              {team.name} ({team.country})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
