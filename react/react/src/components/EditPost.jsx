import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/styles/EditPost.css"; // Added CSS for styling

function EditPost({ articles, setArticles }) {
  const location = useLocation();
  const navigate = useNavigate();
  const postId = parseInt(location.pathname.split("/edit-post/")[1]); // Get ID from URL

  const post = articles.find((article) => article.id === postId);

  const [editedArticle, setEditedArticle] = useState({
    title: post ? post.title : "",
    details: post ? post.details : "",
  });

  useEffect(() => {
    if (!post) {
      navigate("/"); // Redirect if article not found
    }
  }, [post, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedArticle({ ...editedArticle, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setArticles(
      articles.map((article) =>
        article.id === post.id ? { ...article, ...editedArticle } : article
      )
    );
    navigate("/");
  };

  if (!post) return null;

  return (
    <div className="edit-post-container">
      <h2 className="edit-title">Edit Post</h2>
      <form onSubmit={handleSave} className="edit-form">
        <label className="edit-label">Title:</label>
        <input
          type="text"
          name="title"
          className="edit-input"
          placeholder="Title"
          value={editedArticle.title}
          onChange={handleInputChange}
          required
        />
        <label className="edit-label">Details:</label>
        <textarea
          name="details"
          className="edit-textarea"
          placeholder="Details"
          value={editedArticle.details}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="edit-save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditPost;
