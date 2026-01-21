import teams from "../data/teams.json";
import Link from "next/link";

export default function TeamsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <h1>جميع الفرق</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {teams.map(team => (
          <li key={team.slug}>
            <Link href={`/teams/${team.slug}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
