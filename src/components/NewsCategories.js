import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


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
    <section>
      {categories.map((category) => (
        <div>
          <h2>{category}</h2>
          <Link to="/NewsList" state={{category}}>Select</Link>
        </div>
      ))}
    </section>
  );
};
export default NewsCategories;
