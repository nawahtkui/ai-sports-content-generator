import matches from "../../data/matches.json";
import Link from "next/link";

export default function MatchesPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>كل المباريات</h1>
      <ul style={{ lineHeight: "2" }}>
        {matches.map(match => (
          <li key={match.slug}>
            <Link href={`/matches/${match.slug}`} style={{ textDecoration: "none", color: "#0070f3" }}>
              {match.home} vs {match.away} — {match.date} — {match.score}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
