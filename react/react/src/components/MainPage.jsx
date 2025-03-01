import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/MainPage.css";
import "../assets/styles/Articles.css";

function MainPage({ articles, setArticles }) {
  const navigate = useNavigate();
  const [newArticle, setNewArticle] = useState({ title: "", details: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleAddArticle = (e) => {
    e.preventDefault();
    if (newArticle.title && newArticle.details) {
      const newId = articles.length + 1;
      setArticles([
        ...articles,
        { id: newId, title: newArticle.title, details: newArticle.details },
      ]);
      setNewArticle({ title: "", details: "" });
    }
  };

  return (
    <div className="main">
      <section className="articles">
        <div className="container">
          <h1 className="main-page-title">שירותים</h1>

          {/* Add Article Form */}
          <form onSubmit={handleAddArticle} className="add-article-form">
            <div className="form-group">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newArticle.title}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="details"
                placeholder="Details"
                value={newArticle.details}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn add-article-btn">
              Add Article
            </button>
          </form>

          <div className="articles-container">
            {articles.map((article) => (
              <div key={article.id} className="article-card">
                <h2 className="article-title">{article.title}</h2>
                <div className="buttons">
                  <Link
                    to={`/post/${article.id}`}
                    state={{ post: article }}
                    className="view-button"
                  >
                    View
                  </Link>
                  <button
                    className="edit-button"
                    onClick={() =>
                      navigate(`/edit-post/${article.id}`, {
                        state: { post: article },
                      })
                    }
                  >
                    Edit
                  </button>
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
