import { notFound } from "next/navigation";
import teams from "../../../data/teams.json";

interface Props {
  params: { team: string };
}

export default function TeamPage({ params }: Props) {
  const team = teams.find(t => t.slug === params.team);

  if (!team) return notFound();

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem", fontFamily: "sans-serif" }}>
      
      <header style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <img src={team.badge} alt={team.name} width={120} />
        <div>
          <h1>{team.name}</h1>
          <p>{team.country} • {team.continent}</p>
        </div>
      </header>

      <section style={{ marginTop: "2rem" }}>
        <h2>Club Information</h2>
        <ul>
          <li><strong>Founded:</strong> {team.founded}</li>
          <li><strong>Stadium:</strong> {team.stadium}</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>About</h2>
        <p>{team.description}</p>
      </section>

    </main>
  );
}

