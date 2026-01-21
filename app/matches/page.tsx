import Link from "next/link";
import matches from "../../data/matches.json";

export default function MatchesPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>جميع المباريات</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {matches.map(match => (
          <li key={match.slug}>
            <Link href={`/matches/${match.slug}`} style={{ fontWeight: "bold", color: "#0070f3" }}>
              {match.home} vs {match.away}
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
