import teams from "../../data/teams.json";

export default function TeamsPage() {
  // ترتيب الفرق حسب القارة
  const regions = Array.from(new Set(teams.map(t => t.region)));

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>All Teams</h1>
      {regions.map(region => (
        <section key={region} style={{ marginTop: "2rem" }}>
          <h2>{region}</h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {teams
              .filter(team => team.region === region)
              .map(team => (
                <li key={team.slug} style={{ margin: "0.5rem 0" }}>
                  <a
                    href={`/teams/${team.slug}`}
                    style={{
                      textDecoration: "none",
                      color: team.region === "Asia" || team.region === "Africa" ? "#d35400" : "#2980b9",
                      fontWeight: team.region === "Asia" || team.region === "Africa" ? "bold" : "normal"
                    }}
                  >
                    {team.name} ({team.country})
                  </a>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
