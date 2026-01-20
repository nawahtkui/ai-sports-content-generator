import teams from "@/data/teams.json";

export default function TeamPage({ params }: { params: { id: string } }) {
  const team = teams.find((t) => t.id === params.id);

  if (!team) {
    return <h2>الفريق غير موجود</h2>;
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>{team.name}</h1>

      <p><strong>الدولة:</strong> {team.country}</p>
      <p><strong>القارة:</strong> {team.continent}</p>
      <p><strong>سنة التأسيس:</strong> {team.founded}</p>
      <p><strong>الملعب:</strong> {team.stadium}</p>
    </main>
  );
}
