import React from "react";
import { useSelector } from "react-redux";

export default function DetailStagiaire({ nom }) {
  const stagiaireNom = nom.params.nom;
  const stagiaire = useSelector((state) =>
    state.stagiaires.find((stagiaire) => stagiaire.nom === stagiaireNom)
  );

  return (
    <div>
      <img src={stagiaire.image} alt="image de stager" />
      <h2>{stagiaire.nom}</h2>
      <p>Prenom: {stagiaire.prenom}</p>
      <p>Filiere: {stagiaire.filiere}</p>
    </div>
  );
}
