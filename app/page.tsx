import matches from "../data/matches.json";

export default function HomePage() {
  // عرض آخر 3 مباريات فقط (يمكن تعديل العدد)
  const latestMatches = matches.slice(-3).reverse();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Welcome to AI Sports Content Generator!</h1>
      <p style={{ color: "#666", marginTop: "1rem" }}>
        This project displays automated sports content. Check out the latest matches below:
      </p>

      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {latestMatches.map((match) => (
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
            <p style={{ marginTop: "0.5rem" }}>{match.summary}</p>
          </li>
        ))}
      </ul>

      <a href="/matches" style={{ display: "inline-block", marginTop: "2rem", color: "#0070f3", textDecoration: "underline" }}>
        See all matches →
      </a>
    </main>
  );
}

