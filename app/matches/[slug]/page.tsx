import { notFound } from "next/navigation";
import matches from "../../../data/matches.json";

interface Params {
  params: { slug: string };
}

export default function MatchPage({ params }: Params) {
  const matchSlug = decodeURIComponent(params.slug).toLowerCase().trim();

  // البحث عن المباراة حسب slug
  const match = matches.find((m) => m.slug.toLowerCase() === matchSlug);

  if (!match) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1>
        {match.home} vs {match.away}
      </h1>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>{match.date}</p>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Score: {match.score}</p>
      <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>{match.summary}</p>
      <a href="/matches" style={{ display: "inline-block", marginTop: "2rem", color: "#0070f3", textDecoration: "underline" }}>
        ← Back to all matches
      </a>
    </main>
  );
}

