import matches from "../../data/matches.json";

export default function MatchesPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>جميع المباريات</h1>
      <ul style={{ marginTop: "1rem" }}>
        {matches.map((match) => (
          <li key={match.slug}>
            <strong>{match.home} vs {match.away}</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              {match.date} — {match.score}
            </div>
            <p>{match.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
