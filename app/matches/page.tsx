import Link from "next/link";
import matches from "../../data/matches.json";

export const metadata = {
  title: "All Matches | AI Sports Content Generator",
  description: "Browse automatically generated football match summaries.",
};

export default function MatchesPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", fontFamily: "sans-serif" }}>
      <h1>All Matches</h1>
      <p>Automatically generated football match summaries</p>

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
