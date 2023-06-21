import React from "react";
import "./Stagiaire.css";
export default function Stagiaire(props) {
  const { image, nom } = props;
  return (
    <div>
      <img src={image} alt={nom} className="img" />
      <p className="nom">{nom}</p>
    </div>
  );
}
