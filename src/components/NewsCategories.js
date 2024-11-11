import React from "react";
import { Link } from "react-router-dom";

const NewsCategories = () => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <section className="categories-grid">
      <h1>NEWS APP</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <Link to="/NewsList" state={{ category }}>Select</Link>
        </div>
      ))}
    </section>
  );
};

export default NewsCategories;

