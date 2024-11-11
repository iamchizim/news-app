import React from "react";
import { useLocation } from "react-router-dom";

const NewsDetails = () =>{
const location = useLocation()
const news = location.state?.news

if (!news) {
    return <div>No news article Found</div>;
  }

  return(
    <section>
        <h3>{news.title}</h3>
            <p>{news.description}</p>
            <p>{news.url}</p>
            <img src={news.urlToImage}></img>
            <p>{news.publishedAt}</p>
            <p>{news.content}</p>
            <u
    </section>
  )
}
export default NewsDetails