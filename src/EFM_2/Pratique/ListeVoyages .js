import React from "react";

const ListeVoyages = ({ voyages }) => {
  return (
    <div>
      <h1>Liste des voyages</h1>
      <ul>
        {voyages.map((voyage) => (
          <li key={voyage.id}>
            <h2>{voyage.intitule}</h2>
            <p>Prix: {voyage.prix}</p>
            <img src={voyage.source} alt={voyage.intitule} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeVoyages;
