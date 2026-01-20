import teams from "@/data/teams.json";
import Link from "next/link";

// استخراج القارات بشكل فريد
const continents = Array.from(new Set(teams.map(t => t.continent)));

export default function ContinentsPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>القارات</h1>
      <ul>
        {continents.map(continent => (
          <li key={continent}>
            <Link href={`/continents/${continent.toLowerCase()}`}>
              {continent}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}


