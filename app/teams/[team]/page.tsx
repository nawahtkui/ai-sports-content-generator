import { notFound } from "next/navigation";
import matches from "../../../data/matches.json";

interface Params {
  params: { team: string };
}

export default function TeamPage({ params }: Params) {
  // معالجة slug للتأكد من أنه صحيح
  const teamSlug = decodeURIComponent(params.team).toLowerCase().trim();

  // جلب كل المباريات التي يشارك فيها الفريق
  const teamMatches = matches.filter(
    (m) =>
      m.home.toLowerCase() === teamSlug || m.away.toLowerCase() === teamSlug
  );

  // إذا لم توجد مباريات للفريق، عرض صفحة 404
  if (teamMatches.length === 0) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Matches for {teamSlug.charAt(0).toUpperCase() + teamSlug.slice(1)}</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {teamMatches.map((match) => (
          <li key={match.slug}>
            <a 
              href={`/matches/${match.slug}`} 
              style={{ textDecoration: "underline", color: "#0070f3" }}
            >
              <strong>{match.home} vs {match.away}</strong>
            </a>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              {match.date} — {match.score}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}


