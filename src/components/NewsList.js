import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const NewsList = () => {
  const location = useLocation();
  const { category } = location.state;
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMesssage] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=4b76185479544a978a50cd804fb564a1`
      );
      if (!response.ok) {
        throw new Error("Failed to find news listings");
      }
      const data = await response.json();
      setNewsList(data);
    } catch (error) {
      setErrorMesssage("Failed to fetch news listings. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      fetchNews(category);
    }
  }, [category]);

  return (
    <section>
    
      {newsList.map((news) => (
        <div key={news.title}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <p>{news.url}</p>
            <img src={news.urlToImage}></img>
            <p>{news.publishedAt}</p>
            <Link to={`/NewsDetails/${news.title}`} state={{news}}>Read More</Link>
        </div>
      ))}
    </section>
  );
};
export default NewsList;
