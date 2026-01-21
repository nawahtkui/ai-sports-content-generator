import matches from "../data/matches.json";
import Link from "next/link";

export default function MatchesPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <h1>جميع المباريات</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {matches.map((match) => (
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
