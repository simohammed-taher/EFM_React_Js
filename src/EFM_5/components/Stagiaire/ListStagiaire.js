import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ListStagiaire.css";

export default function ListStagiaire() {
  const stagiaires = useSelector((state) => state.stagiaires);

  return (
    <div>
      {stagiaires.map((stagiaire) => (
        <div key={stagiaire.nom}>
          <Link to={`/${stagiaire.nom}`}>
            <img src={stagiaire.image} alt={stagiaire.nom} className="image" />
          </Link>
          <div className="nom">{stagiaire.nom}</div>
        </div>
      ))}
    </div>
  );
}
