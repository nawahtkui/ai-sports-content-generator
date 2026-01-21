import { notFound } from "next/navigation";
import Link from "next/link";
import matches from "../../../data/matches.json";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function MatchPage({ params }: PageProps) {
  const match = matches.find((m) => m.slug === params.slug);

  if (!match) return notFound();

  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Link href="/matches">← العودة إلى جميع المباريات</Link>

      <h1 style={{ marginTop: "1rem", fontSize: "2rem" }}>
        {match.home} vs {match.away}
      </h1>

      <div style={{ margin: "1rem 0", color: "#555" }}>
        📅 {match.date} <br />
        🏆 النتيجة: <strong>{match.score}</strong>
      </div>

      <section
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fafafa",
        }}
      >
        <h2>📝 ملخص المباراة</h2>
        <p style={{ marginTop: "1rem", lineHeight: "1.8" }}>
          {match.summary}
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>🏟️ الفرق المشاركة</h3>
        <ul>
          <li>
            <Link href={`/teams/${match.home.toLowerCase()}`}>
              {match.home}
            </Link>
          </li>
          <li>
            <Link href={`/teams/${match.away.toLowerCase()}`}>
              {match.away}
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
