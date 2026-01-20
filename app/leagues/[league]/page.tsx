import { notFound } from "next/navigation";
import teams from "../../../data/teams.json";
import leagues from "../../../data/leagues.json";
import Link from "next/link";

interface Props {
  params: { league: string };
}

export default function LeaguePage({ params }: Props) {
  const leagueData = leagues.find(
    (l) => l.slug === params.league
  );

  if (!leagueData) return notFound();

  const leagueTeams = teams.filter(
    (t) => t.league === leagueData.name
  );

  return (
    <main style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
      <h1>{leagueData.name}</h1>
      <p>
        {leagueData.country} — {leagueData.continent}
      </p>

      <h2 style={{ marginTop: "2rem" }}>Teams</h2>
      <ul>
        {leagueTeams.map((team) => (
          <li key={team.slug}>
            <Link href={`/teams/${team.slug}`}>
              {team.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
