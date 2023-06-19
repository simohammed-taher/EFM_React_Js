import React from "react";

export default function CarteLivre(livre, onLike) {
  return (
    <div>
      <img src={livre.Poster} alt={livre.titre} />
      <h1>{livre.titre}</h1>
      <p>Auteur:{livre.Auteur}</p>
      <p>Edition:{livre.Edition}</p>
      <button onClick={onLike}>Like ({livre.likes})</button>
    </div>
  );
}
