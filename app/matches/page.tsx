import matches from "@/data/matches.json";
import Link from "next/link";

export default function MatchesPage() {
  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>جميع المباريات</h1>
      <ul style={{ lineHeight: "2" }}>
        {matches.map(match => (
          <li key={match.slug}>
            <Link href={`/matches/${match.slug}`}>
              {match.home} vs {match.away} — {match.date} — {match.score}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
