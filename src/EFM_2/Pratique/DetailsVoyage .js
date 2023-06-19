import React from "react";

const DetailsVoyage = ({ voyage }) => {
  return (
    <div>
      <h1>Détails du voyage</h1>
      <h2>{voyage.intitule}</h2>
      <p>Prix: {voyage.prix}</p>
      <img src={voyage.source} alt={voyage.intitule} />
    </div>
  );
};

export default DetailsVoyage;
