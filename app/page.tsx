import Link from "next/link";
import matches from "../data/matches.json";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        ⚽ مولّد محتوى الرياضة بالذكاء الاصطناعي
      </h1>

      <p style={{ color: "#555", marginBottom: "2rem" }}>
        منصة تعرض المباريات، الفرق، والمواسم — مع قابلية التوسع مستقبلاً.
      </p>

      <section>
        <h2 style={{ marginBottom: "1rem" }}>📅 أحدث المباريات</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1rem" }}>
          {matches.map((match) => (
            <div
              key={match.slug}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                background: "#fafafa",
              }}
            >
              <strong>{match.home} vs {match.away}</strong>
              <div style={{ fontSize: "0.9rem", color: "#666", margin: "0.5rem 0" }}>
                {match.date} — {match.score}
              </div>
              <p style={{ fontSize: "0.9rem" }}>{match.summary}</p>

              <Link href={`/matches/${match.slug}`} style={{ fontSize: "0.85rem" }}>
                تفاصيل المباراة →
              </Link>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/matches">عرض جميع المباريات →</Link>
        </div>
      </section>
    </main>
  );
}

