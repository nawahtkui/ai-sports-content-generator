"use client"; // هذا لتفعيل التفاعلية مع React Hooks

import fs from "fs";
import path from "path";
import { useState } from "react";

type Article = {
  title: string;
  content: string;
};

interface HomeProps {
  articles: Article[];
}

// دالة قراءة المقالات من مجلد sports-bot/articles
export async function getServerSideProps() {
  const articlesDir = path.join(process.cwd(), "..", "sports-bot", "articles");

  let articles: Article[] = [];

  try {
    const files = fs.readdirSync(articlesDir);
    articles = files
      .filter((file) => file.endsWith(".txt"))
      .map((file) => {
        const content = fs.readFileSync(path.join(articlesDir, file), "utf8");
        return {
          title: file.replace(".txt", "").replaceAll("_", " "),
          content,
        };
      });
  } catch (e) {
    console.log("لا توجد مقالات بعد");
  }

  return {
    props: { articles },
  };
}

export default function Home({ articles }: HomeProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleArticle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main style={{ maxWidth: 900, margin: "auto", padding: 40, fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>⚽ AI Sports Content Generator</h1>
      <p style={{ textAlign: "center" }}>منصة توليد محتوى رياضي تلقائي بالذكاء الاصطناعي</p>

      {articles.length === 0 && (
        <p style={{ marginTop: 40, textAlign: "center" }}>لا توجد مقالات بعد</p>
      )}

      {articles.map((article, i) => (
        <div
          key={i}
          style={{
            marginTop: 30,
            border: "1px solid #ddd",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <button
            onClick={() => toggleArticle(i)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "15px 20px",
              fontSize: 18,
              background: "#f7f7f7",
              border: "none",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {article.title}
          </button>

          {openIndex === i && (
            <div
              style={{
                padding: 20,
                background: "#fff",
                whiteSpace: "pre-wrap",
                fontFamily: "monospace",
              }}
            >
              {article.content}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

