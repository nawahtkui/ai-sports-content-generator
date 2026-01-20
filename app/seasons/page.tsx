import seasons from "../../data/seasons.json";
import Link from "next/link";

export default function SeasonsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>المواسم</h1>
      <ul style={{ marginTop: "1rem" }}>
        {seasons.map((season) => (
          <li key={season.slug}>
            <Link href={`/seasons/${season.slug}`}>
              {season.name} ({season.year})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
