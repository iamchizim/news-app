import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import LazyLoadImage from "./LazyLoadImage";
import ErrorMessage from "./ErrorMessage";

const NewsList = () => {
  const location = useLocation();
  const { category } = location.state || {};
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMesssage] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to find news listings");
      }
      const data = await response.json();
      setNewsList(Array.isArray(data.articles) ? data.articles : []);
      setErrorMesssage(null); 
    } catch (error) {
      
      setErrorMesssage("Failed to fetch news listings. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      fetchNews();
    }
  }, [category]);

  return (
    <section>
      {loading && <div className="spinner"></div>}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {newsList.map((news) => (
        <div key={news.url || news.title + news.publishedAt}>
          <LazyLoadImage src={news.urlToImage} alt={news.title} />
          <h3>Title: {news.title}</h3>
          <p>Author: {news.author || "No author provided"}</p>
          <p>Description: {news.description}...</p>
          <p>Published: {news.publishedAt}</p>
          <Link to={`/NewsDetails/${news.title}`} state={{ news }}>
            Read More
          </Link>
        </div>
      ))}
    </section>
  );
};

export default NewsList;
