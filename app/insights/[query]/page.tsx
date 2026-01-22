import matches from "../../../data/matches.json";
import { notFound } from "next/navigation";

interface Params {
  params: { query: string };
}

export default function InsightPage({ params }: Params) {
  const query = decodeURIComponent(params.query).toLowerCase();

  const relatedMatches = matches.filter(
    m =>
      m.home.toLowerCase().includes(query) ||
      m.away.toLowerCase().includes(query)
  );

  if (relatedMatches.length === 0) return notFound();

  const wins = relatedMatches.filter(m => {
    const [h, a] = m.score.split("-").map(Number);
    if (m.home.toLowerCase().includes(query)) return h > a;
    if (m.away.toLowerCase().includes(query)) return a > h;
    return false;
  });

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>📊 تحليل {query}</h1>

      <p>
        تم العثور على <strong>{relatedMatches.length}</strong> مباريات،
        منها <strong>{wins.length}</strong> انتصارات.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>🧠 القراءة الذكية</h2>
        <p style={{ lineHeight: "1.8" }}>
          تشير البيانات إلى حضور واضح لـ "{query}" في المنافسات،
          مع أداء يعكس مستوى تنافسي متنوع عبر المباريات المختلفة.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>📄 المباريات</h2>
        <ul style={{ lineHeight: "2" }}>
          {relatedMatches.map(m => (
            <li key={m.slug}>
              <strong>{m.home} ضد {m.away}</strong> — {m.date} — {m.score}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
