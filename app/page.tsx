import matches from "../data/matches.json";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>مرحباً بكم في مولد محتوى الرياضة بالذكاء الاصطناعي!</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {matches.map(match => (
          <li key={match.slug}>
            <strong>{match.home} vs {match.away}</strong>
            <div>{match.date} — {match.score}</div>
            <div>{match.summary}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
