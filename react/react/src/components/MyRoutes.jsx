import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import SinglePost from "./SinglePost";
import Contact from "./Contact";
import EditPost from "./EditPost";

function MyRoutes() {
  const [articles, setArticles] = useState([
    { id: 1, title: "פדיקור מניקור", details: "Our manicure and pedicure services ensure healthy nails." },
    { id: 2, title: "תספורת", details: "Professional haircuts for all styles, ensuring a fresh and stylish look." },
    { id: 3, title: "הסרת שיער", details: "Safe and effective hair removal services using top-quality products." },
  ]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage articles={articles} setArticles={setArticles} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/edit-post/:id" element={<EditPost articles={articles} setArticles={setArticles} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MyRoutes;
