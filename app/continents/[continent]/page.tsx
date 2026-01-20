import { notFound } from "next/navigation";
import continents from "../../../data/continents.json";
import leagues from "../../../data/leagues.json";
import Link from "next/link";

interface Props {
  params: { continent: string };
}

export default function ContinentPage({ params }: Props) {
  const continent = continents.find(
    (c) => c.slug === params.continent
  );

  if (!continent) return notFound();

  const continentLeagues = leagues.filter(
    (l) => l.continent.toLowerCase().replace(" ", "-") === params.continent
  );

  return (
    <main style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
      <h1>{continent.name}</h1>

      <h2 style={{ marginTop: "2rem" }}>Leagues</h2>
      <ul>
        {continentLeagues.map((league) => (
          <li key={league.slug}>
            <Link href={`/leagues/${league.slug}`}>
              {league.name}
            </Link>
            <span style={{ color: "#666", marginLeft: "0.5rem" }}>
              ({league.country})
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
