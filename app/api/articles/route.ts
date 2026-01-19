import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const articlesDir = path.join(
    process.cwd(),
    "..",
    "sports-bot",
    "articles"
  );

  try {
    const files = fs.readdirSync(articlesDir);

    const articles = files.map((file) => {
      const content = fs.readFileSync(
        path.join(articlesDir, file),
        "utf-8"
      );

      return {
        title: file.replace(".txt", "").replaceAll("_", " "),
        content,
      };
    });

    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load articles" },
      { status: 500 }
    );
  }
}
