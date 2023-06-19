import React, { useSelector } from "react";

export default function ListArticle() {
  const articles = useSelector((state) => state.articles);
  return (
    <div>
      <h1>Listes des articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <p>Article:{article.designation}</p>
          <p>Famille:{article.famille}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
