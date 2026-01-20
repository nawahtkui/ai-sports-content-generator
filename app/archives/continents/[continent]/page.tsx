import { notFound } from "next/navigation";
import continents from "../../../../data/continents.json";
import teams from "../../../../data/teams.json";
import matches from "../../../../data/matches.json";
import Link from "next/link";

interface Params {
  params: { continent: string };
}

export default function ContinentArchivePage({ params }: Params) {
  const continentSlug = params.continent.toLowerCase();
  const continentInfo = continents.find(c => c.slug === continentSlug);

  if (!continentInfo) return notFound();

  // جلب المباريات التي تشارك فيها الفرق التابعة للقارة
  const continentTeams = teams.filter(t => t.continentSlug === continentSlug).map(t => t.slug);
  const continentMatches = matches.filter(
    m => continentTeams.includes(m.home.toLowerCase()) || continentTeams.includes(m.away.toLowerCase())
  );

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>أرشيف المباريات في {continentInfo.name}</h1>
      {continentMatches.length === 0 ? (
        <p>لا توجد مباريات متاحة بعد لهذه القارة.</p>
      ) : (
        <ul style={{ marginTop: "1rem", lineHeight: "2" }}>
          {continentMatches.map((match) => (
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
      )}
    </main>
  );
}
