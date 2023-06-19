import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_article } from "./actions";
export default function AddArticle() {
  const dispatch = useDispatch();
  const [article, setArticle] = useState({
    id: "",
    designation: "",
    famille: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_article(article));
    setArticle({ id: "", designation: "", famille: "" });
  };
  return (
    <div>
      <h1>Ajouter Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Désignatione"
          value={article.designation}
          onChange={(e) =>
            setArticle({ ...article, designation: e.target.value })
          }
        />{" "}
        <input
          type="text"
          placeholder="Id de larticle"
          value={article.id}
          onChange={(e) => setArticle({ ...article, id: e.target.value })}
        />{" "}
        <input
          type="text"
          placeholder="Famille"
          value={article.famille}
          onChange={(e) => setArticle({ ...article, famille: e.target.value })}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
