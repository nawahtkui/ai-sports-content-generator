export default function Page() {
  const sampleArticle = {
    title: "Arsenal vs Chelsea - ملخص المباراة",
    date: "2026-01-20",
    content: `واجه فريق Arsenal فريق Chelsea في مباراة مثيرة انتهت بنتيجة 2-1. 
    الأهداف سجلها اللاعبون في الدقيقة 15 و63 و78، وقدّم الفريقان أداءً رائعًا أمام جماهيرهم.`
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>مرحبا بك في AI Sports Content Generator!</h1>
      <p>هذا المشروع يعرض محتوى رياضي تلقائيًا. مثال لمباراة:</p>

      <div style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        marginTop: "1rem",
        backgroundColor: "#f9f9f9"
      }}>
        <h2>{sampleArticle.title}</h2>
        <p><strong>التاريخ:</strong> {sampleArticle.date}</p>
        <p>{sampleArticle.content}</p>
      </div>
    </main>
  );
}

