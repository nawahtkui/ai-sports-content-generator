import matches from "../../data/matches.json";

export default function MatchesPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>All Matches</h1>
      <ul style={{ marginTop: "1rem", lineHeight: "2" }}>
        {matches.map(match => (
          <li key={match.slug} style={{ marginBottom: "1.5rem" }}>
            <strong>{match.home} vs {match.away}</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              {match.date} — {match.score}
            </div>
            <div>{match.summary}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
