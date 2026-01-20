import { notFound } from "next/navigation";
import seasons from "../../../data/seasons.json";
import matches from "../../../data/matches.json";

export default function SeasonPage({ params }: { params: { season: string } }) {
  const seasonSlug = params.season;
  const season = seasons.find((s) => s.slug === seasonSlug);
  if (!season) return notFound();

  const seasonMatches = matches.filter((m) => m.date.startsWith(seasonSlug.split("-")[0]));

  return (
    <main>
      <h1>{season.name}</h1>
      <ul>
        {seasonMatches.map((match) => (
          <li key={match.slug}>
            <strong>{match.home} vs {match.away}</strong>
            <div>{match.date} — {match.score}</div>
            <p>{match.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
