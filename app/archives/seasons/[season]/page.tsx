import { notFound } from "next/navigation";
import seasons from "../../../../data/seasons.json";
import matches from "../../../../data/matches.json";
import Link from "next/link";

interface Params {
  params: { season: string };
}

export default function SeasonArchivePage({ params }: Params) {
  const seasonSlug = params.season.toLowerCase();
  const seasonInfo = seasons.find(s => s.slug === seasonSlug);

  if (!seasonInfo) return notFound();

  // جلب المباريات التي تنتمي لهذا الموسم
  const seasonMatches = matches.filter(m => m.season === seasonSlug);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>أرشيف المباريات لموسم {seasonInfo.name}</h1>
      {seasonMatches.length === 0 ? (
        <p>لا توجد مباريات متاحة لهذا الموسم بعد.</p>
      ) : (
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
      )}
    </main>
  );
}
