import { notFound } from "next/navigation";
import continents from "../../../data/continents.json";
import teams from "../../../data/teams.json"; // يجب أن يحتوي ملف teams.json على كل الفرق مع continentSlug

interface Params {
  params: { continent: string };
}

export default function ContinentPage({ params }: Params) {
  const continentSlug = params.continent.toLowerCase();
  const continentInfo = continents.find(c => c.slug.toLowerCase() === continentSlug);

  if (!continentInfo) return notFound();

  const continentTeams = teams.filter(t => t.continentSlug === continentSlug);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>الفرق في {continentInfo.name}</h1>
      <ul style={{ marginTop: "1rem" }}>
        {continentTeams.map((team) => (
          <li key={team.slug}>{team.name}</li>
        ))}
      </ul>
    </main>
  );
}
