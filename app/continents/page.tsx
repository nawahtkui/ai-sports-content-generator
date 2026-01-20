import Link from "next/link";
import continents from "../../data/continents.json";

export const metadata = {
  title: "Continents | AI Sports Content Generator",
  description: "Browse sports leagues by continent."
};

export default function ContinentsPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <h1>Continents</h1>
      <p>Select a continent to explore leagues and teams.</p>

      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {continents.map((c) => (
          <li key={c.slug}>
            <Link href={`/continents/${c.slug}`}>
              <strong>{c.name}</strong>
            </Link>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              Sports: {c.sports.join(", ")}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
