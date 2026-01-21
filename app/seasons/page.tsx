import Link from "next/link";
import matches from "../../data/matches.json";

export default function SeasonsPage() {
  const seasons = [...new Set(matches.map(m => m.date.split("-")[0]))];
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>المواسم</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {seasons.map(season => (
          <li key={season}>
            <Link href={`/seasons/${season}`} style={{ fontWeight: "bold", color: "#0070f3" }}>
              موسم {season}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
