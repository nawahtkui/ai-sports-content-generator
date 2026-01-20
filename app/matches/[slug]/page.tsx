import { Metadata } from "next";
import matches from "../../../data/matches.json";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return matches.map((match) => ({
    slug: match.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const match = matches.find((m) => m.slug === params.slug);

  if (!match) {
    return { title: "Match Not Found" };
  }

  return {
    title: `${match.home} vs ${match.away} | Match Summary`,
    description: match.summary,
    openGraph: {
      title: `${match.home} vs ${match.away}`,
      description: match.summary,
      type: "article",
    },
  };
}

export default function MatchPage({ params }: Props) {
  const match = matches.find((m) => m.slug === params.slug);

  if (!match) {
    return <h1>Match not found</h1>;
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", fontFamily: "sans-serif" }}>
      <h1>{match.home} vs {match.away}</h1>

      <p><strong>Date:</strong> {match.date}</p>
      <p><strong>Score:</strong> {match.score}</p>

      <h2>Match Summary</h2>
      <p>{match.summary}</p>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#666" }}>
        Generated automatically by AI Sports Content Generator
      </p>
    </main>
  );
}
