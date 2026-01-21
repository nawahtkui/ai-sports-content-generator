import matches from "../../../data/matches.json";

interface Params {
  params: { season: string };
}

export default function SeasonPage({ params }: Params) {
  const seasonMatches = matches.filter(m => m.date.startsWith(params.season));
  if (seasonMatches.length === 0) return <p>No matches found for this season.</p>;

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>Matches for Season {params.season}</h1>
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
