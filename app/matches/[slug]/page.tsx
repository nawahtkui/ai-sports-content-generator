import { notFound } from "next/navigation";
import matches from "../../../data/matches.json";

interface Params {
  params: { slug: string };
}

function analyzeMatch(home: string, away: string, score: string) {
  const [h, a] = score.split("-").map(Number);

  if (h > a) {
    return `شهدت المباراة تفوقًا واضحًا لفريق ${home} الذي فرض سيطرته وحقق الفوز بنتيجة ${score}.`;
  }

  if (a > h) {
    return `قدم فريق ${away} أداءً قويًا واستطاع حسم المباراة لصالحه بنتيجة ${score}.`;
  }

  return `انتهت المباراة بتعادل متوازن ${score}، حيث تقاسم الفريقان السيطرة والفرص.`;
}

export default function MatchPage({ params }: Params) {
  const match = matches.find(m => m.slug === params.slug);
  if (!match) return notFound();

  const analysis = analyzeMatch(match.home, match.away, match.score);

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>{match.home} ضد {match.away}</h1>

      <p style={{ color: "#555" }}>
        {match.date} — النتيجة: <strong>{match.score}</strong>
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>🧠 التحليل الذكي للمباراة</h2>
        <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
          {analysis}
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>📄 ملخص المباراة</h2>
        <p>{match.summary}</p>
      </section>
    </main>
  );
}
