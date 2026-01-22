import teams from "../../data/teams.json";
import Link from "next/link";

export default function TeamsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>كل الفرق</h1>
      <ul style={{ lineHeight: "2" }}>
        {teams.map(team => (
          <li key={team.slug}>
            <Link href={`/teams/${team.slug}`} style={{ textDecoration: "none", color: "#0070f3" }}>
              {team.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
