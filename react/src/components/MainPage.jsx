import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/MainPage.css";
import "../assets/styles/Articles.css";

function MainPage() {
  const articles = [
    {
      id: 1,
      title: "פדיקור מניקור",
      details:
        "Our manicure and pedicure services ensure healthy nails with high-quality treatments.",
    },
    {
      id: 2,
      title: "תספורת",
      details:
        "Professional haircuts for all styles, ensuring a fresh and stylish look.",
    },
    {
      id: 3,
      title: "הסרת שיער",
      details:
        "Safe and effective hair removal services using top-quality products.",
    },
  ];


  return (
    <div className="main">
      <section className="articles">
        <div className="container">
          <h1 className="main-page-title">שירותים</h1>

          <div className="articles-container">
            {/* ✅ Display Articles Without Images */}
            {articles.map((article) => (
              <div key={article.id} className="article-card">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-content">{article.content}</p>
                <div className="buttons">
                  <Link
                    to={`/post/${article.id}`}
                    state={{ post: article }}
                    className="view-button"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
