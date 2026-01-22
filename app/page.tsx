import matches from "./data/matches.json";
import teams from "./data/teams.json";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>مولد محتوى الرياضة بالذكاء الاصطناعي</h1>

      {/* فرق مختارة */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>أهم الفرق</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {teams.map(team => (
            <Link key={team.slug} href={`/teams/${team.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "150px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}>
                <strong>{team.name}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* آخر المباريات */}
      <section>
        <h2>آخر المباريات</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {matches.map(match => (
            <Link key={match.slug} href={`/matches/${match.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                transition: "all 0.2s",
                backgroundColor: "#fafafa"
              }}>
                <strong>{match.home} vs {match.away}</strong>
                <div style={{ fontSize: "0.9rem", color: "#555" }}>{match.date} — {match.score}</div>
                <p style={{ marginTop: "0.5rem", color: "#333" }}>{match.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
