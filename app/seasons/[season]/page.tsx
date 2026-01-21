import matches from "../../../data/matches.json";

export default function SeasonPage({ params }) {
  const seasonMatches = matches.filter(
    m => m.date.startsWith(params.season)
  );

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>مباريات موسم {params.season}</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {seasonMatches.map(match => (
          <li key={match.slug}>
            <strong>{match.home} vs {match.away}</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              {match.date} — {match.score}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
