import { notFound } from "next/navigation";
import matches from "../../../../../data/matches.json";
import Link from "next/link";

interface Params {
  params: { continent: string; season: string };
}

export default function ContinentSeasonMatches({ params }: Params) {
  const { continent, season } = params;
  const seasonMatches = matches.filter(
    m => m.continent === continent.toLowerCase() && m.season === season.toLowerCase()
  );

  if (seasonMatches.length === 0) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>المباريات في الموسم {season}</h1>
      <ul style={{ marginTop: "1rem", lineHeight: "2" }}>
        {seasonMatches.map((match) => (
          <li key={match.slug}>
            <Link href={`/matches/${match.slug}`}>
              <strong>{match.home} vs {match.away}</strong>
            </Link>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              {match.date} — {match.score}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
