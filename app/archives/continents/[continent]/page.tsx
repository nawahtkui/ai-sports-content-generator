import { notFound } from "next/navigation";
import continents from "../../../../data/continents.json";
import seasons from "../../../../data/seasons.json";
import Link from "next/link";

interface Params {
  params: { continent: string };
}

export default function ContinentSeasonsPage({ params }: Params) {
  const continentSlug = params.continent.toLowerCase();
  const continentInfo = continents.find(c => c.slug === continentSlug);

  if (!continentInfo) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>المواسم في {continentInfo.name}</h1>
      <ul style={{ marginTop: "1rem" }}>
        {seasons.map((season) => (
          <li key={season.slug}>
            <Link href={`/archives/continents/${continentSlug}/seasons/${season.slug}`}>
              {season.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
