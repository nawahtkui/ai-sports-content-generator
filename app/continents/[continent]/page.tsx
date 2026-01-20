import teams from "@/data/teams.json";
import Link from "next/link";

interface Params {
  params: { continent: string };
}

export default function ContinentPage({ params }: Params) {
  const continentSlug = params.continent.toLowerCase();
  const continentTeams = teams.filter(
    t => t.continent.toLowerCase() === continentSlug
  );

  if (continentTeams.length === 0) {
    return <h2>القارة غير موجودة</h2>;
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>فرق القارة: {continentTeams[0].continent}</h1>
      <ul>
        {continentTeams.map(team => (
          <li key={team.id}>
            <Link href={`/teams/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

