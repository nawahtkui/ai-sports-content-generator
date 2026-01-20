import Link from "next/link";
import leagues from "../../data/leagues.json";

export const metadata = {
  title: "Football Leagues | AI Sports Content Generator",
  description: "Browse football leagues by country and continent."
};

export default function LeaguesPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <h1>Football Leagues</h1>
      <p>Explore leagues around the world.</p>

      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        {leagues.map((league) => (
          <li key={league.slug}>
            <Link href={`/leagues/${league.slug}`}>
              <strong>{league.name}</strong>
            </Link>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              {league.country} — Founded {league.founded}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
