import { NextResponse } from "next/server";
import matches from "../../../data/matches.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.toLowerCase() || "";

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  const relatedMatches = matches.filter(
    m =>
      m.home.toLowerCase().includes(query) ||
      m.away.toLowerCase().includes(query)
  );

  const wins = relatedMatches.filter(m => {
    const [h, a] = m.score.split("-").map(Number);
    if (m.home.toLowerCase().includes(query)) return h > a;
    if (m.away.toLowerCase().includes(query)) return a > h;
    return false;
  });

  return NextResponse.json({
    query,
    totalMatches: relatedMatches.length,
    wins: wins.length,
    matches: relatedMatches
  });
}
