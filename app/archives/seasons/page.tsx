import seasons from "../../../data/seasons.json";
import Link from "next/link";

export default function ArchivesSeasonsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>أرشيف المباريات حسب الموسم</h1>
      <ul style={{ marginTop: "1rem" }}>
        {seasons.map((season) => (
          <li key={season.slug}>
            <Link href={`/archives/seasons/${season.slug}`}>{season.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
