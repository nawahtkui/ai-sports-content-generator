import seasons from "../../data/seasons.json";

export default function SeasonsPage() {
  return (
    <main>
      <h1>المواسم</h1>
      <ul>
        {seasons.map((season) => (
          <li key={season.slug}>
            <a href={`/seasons/${season.slug}`}>{season.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
