import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/SinglePost.css";

function SinglePost() {
  const location = useLocation();
  const post = location.state?.post;

  if (!post) {
    return <h2 className="error-message">Service not found.</h2>;
  }

  return (
    <section className="post main">
      <div className="container">
        <div className="single-post">
          <h1 className="post-title">{post.title}</h1>

          
          <p className="post-content">{post.details}</p>

         
        </div>
      </div>
    </section>
  );
}

export default SinglePost;
