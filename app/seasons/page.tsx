import Link from "next/link";
import matches from "../../data/matches.json";

export const metadata = {
  title: "Football Seasons Archive",
  description: "Browse football matches by season."
};

export default function SeasonsPage() {
  const seasons = Array.from(
    new Set(matches.map((m) => m.season))
  );

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <h1>Football Seasons</h1>

      <ul style={{ marginTop: "2rem" }}>
        {seasons.map((season) => (
          <li key={season}>
            <Link href={`/seasons/${season}`}>
              {season}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
