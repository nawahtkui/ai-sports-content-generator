import matches from "../../../data/matches.json";
import Link from "next/link";

interface Params {
  params: { season: string };
}

export default function SeasonPage({ params }: Params) {
  const seasonMatches = matches.filter(m => m.date.startsWith(params.season));
  if (seasonMatches.length === 0) return <p>لا توجد مباريات لهذا الموسم.</p>;

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <h1>المباريات لموسم {params.season}</h1>
      <ul>
        {seasonMatches.map(match => (
          <li key={match.slug}>
            <Link href={`/matches/${match.slug}`}>
              {match.home} vs {match.away} — {match.date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
