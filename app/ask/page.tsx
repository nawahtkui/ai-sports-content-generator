import matches from "../../data/matches.json";

function analyzeQuery(query: string) {
  const q = query.toLowerCase();

  const relatedMatches = matches.filter(
    m =>
      m.home.toLowerCase().includes(q) ||
      m.away.toLowerCase().includes(q)
  );

  const wins = relatedMatches.filter(m => {
    const [h, a] = m.score.split("-").map(Number);
    if (m.home.toLowerCase().includes(q)) return h > a;
    if (m.away.toLowerCase().includes(q)) return a > h;
    return false;
  });

  return {
    total: relatedMatches.length,
    wins: wins.length,
    matches: relatedMatches
  };
}

export default function AskPage({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams?.query || "";
  const data = query ? analyzeQuery(query) : null;

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>🧠 التحليل الذكي للسؤال</h1>

      <p>
        سؤالك: <strong>{query || "—"}</strong>
      </p>

      {!query && <p>يرجى كتابة سؤال في الرابط.</p>}

      {data && (
        <>
          <section style={{ marginTop: "1.5rem" }}>
            <h2>📊 الخلاصة</h2>
            <p>
              تم العثور على <strong>{data.total}</strong> مباريات مرتبطة بالسؤال،
              منها <strong>{data.wins}</strong> انتصارات.
            </p>
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h2>📄 المباريات</h2>
            <ul style={{ lineHeight: "2" }}>
              {data.matches.map(m => (
                <li key={m.slug}>
                  <strong>{m.home} ضد {m.away}</strong> — {m.date} — {m.score}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h2>📝 التحليل السردي</h2>
            <p style={{ lineHeight: "1.8" }}>
              يظهر من البيانات أن "{query}" كان حاضرًا في عدد ملحوظ من المباريات،
              مع نتائج تعكس مستوى الأداء والتنافس عبر المواسم المختلفة.
            </p>
          </section>
        </>
      )}
    </main>
  );
}
