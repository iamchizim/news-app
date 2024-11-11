import React from "react";
import { useLocation } from "react-router-dom";
import LazyLoadImage from "./LazyLoadImage";

const NewsDetails = () => {
  const location = useLocation();
  const news = location.state?.news;

  if (!news) {
    return <div>No news article found</div>;
  }

  return (
    <section className="news-details">
      <h3>{news.title}</h3>
      <LazyLoadImage src={news.urlToImage} alt={news.title} />
      <p>{news.description}</p>
      <p>Author: {news.author || "No author provided"}</p>
      <p>Published on: {news.publishedAt}</p>
      <a href={news.url} target="_blank" rel="noopener noreferrer">
        Read from source
      </a>
    </section>
  );
};

export default NewsDetails;
