import { notFound } from "next/navigation";
import matches from "../../../data/matches.json";

export default function MatchPage({ params }) {
  const match = matches.find(m => m.slug === params.slug);
  if (!match) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>{match.home} vs {match.away}</h1>
      <p>{match.date} — {match.score}</p>
      <p>{match.summary}</p>
    </main>
  );
}
