import { useEffect, useState } from "react";

interface Team {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
  strSport: string;
  strStadium: string;
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeams() {
      const res = await fetch(
        "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
      );
      const data = await res.json();
      setTeams(data.teams || []);
      setLoading(false);
    }
    fetchTeams();
  }, []);

  if (loading) return <p>Loading teams...</p>;

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>All Teams</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem", marginTop: "2rem" }}>
        {teams.map((team) => (
          <div key={team.idTeam} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
            <img src={team.strTeamBadge} alt={team.strTeam} style={{ width: "80px", marginBottom: "0.5rem" }} />
            <h3>{team.strTeam}</h3>
            <p>{team.strSport}</p>
            <p>{team.strStadium}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

