import teams from "@/data/teams.json";
import Link from "next/link";

export default function TeamsPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>الفرق الرياضية</h1>

      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link href={`/teams/${team.id}`}>
              {team.name} – {team.country}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

