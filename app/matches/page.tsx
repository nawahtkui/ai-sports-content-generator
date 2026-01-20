import matches from "../../data/matches.json";

export default function MatchesPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <h1>All Matches</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {matches.map((match) => (
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

