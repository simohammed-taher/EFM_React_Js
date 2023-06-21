import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStagiaire } from "../redux/reducer";

export default function AddStagiaire() {
  const dispatch = useDispatch();
  const [stagiaire, setStagiaire] = useState({
    image: "",
    nom: "",
    prenom: "",
    filiere: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStagiaire((prevStagiaire) => ({ ...prevStagiaire, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStagiaire(stagiaire));
    setStagiaire({
      image: "",
      nom: "",
      prenom: "",
      filiere: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          placeholder="Saisir le lien de l'image"
          value={stagiaire.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nom"
          placeholder="Saisir le nom"
          value={stagiaire.nom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="Saisir le prénom"
          value={stagiaire.prenom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="filiere"
          placeholder="Saisir la filière"
          value={stagiaire.filiere}
          onChange={handleChange}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
