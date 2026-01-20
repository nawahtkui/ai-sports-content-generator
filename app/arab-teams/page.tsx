import teams from "@/data/teams.json";
import Link from "next/link";

export default function ArabTeamsPage() {
  const arabTeams = teams.filter(t =>
    ["Saudi Arabia", "Egypt", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan"].includes(t.region)
  );

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>الفرق العربية والخليجية</h1>
      {arabTeams.length === 0 && <p>لا توجد فرق عربية مضافة بعد.</p>}
      <ul style={{ lineHeight: "2" }}>
        {arabTeams.map(team => (
          <li key={team.id}>
            <Link href={`/teams/${team.id}`}>{team.name} ({team.region})</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
