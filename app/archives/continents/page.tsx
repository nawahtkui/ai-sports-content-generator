import continents from "../../../data/continents.json";
import Link from "next/link";

export default function ArchivesContinentsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>أرشيف المباريات حسب القارة</h1>
      <ul style={{ marginTop: "1rem" }}>
        {continents.map((continent) => (
          <li key={continent.slug}>
            <Link href={`/archives/continents/${continent.slug}`}>{continent.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
