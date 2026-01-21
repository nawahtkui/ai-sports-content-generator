import Link from "next/link";
import teams from "../../data/teams.json";

export default function TeamsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>الفرق</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {teams.map(team => (
          <li key={team.slug}>
            <Link href={`/teams/${team.slug}`} style={{ fontWeight: "bold", color: "#0070f3" }}>
              {team.name} ({team.region})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
