import { notFound } from "next/navigation";
import matches from "../../../data/matches.json";

interface Params {
  params: { slug: string };
}

export default function MatchPage({ params }: Params) {
  const match = matches.find(m => m.slug === params.slug);
  if (!match) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{match.home} vs {match.away}</h1>
      <p><strong>التاريخ:</strong> {match.date}</p>
      <p><strong>النتيجة:</strong> {match.score}</p>
      <p>{match.summary}</p>
    </main>
  );
}
