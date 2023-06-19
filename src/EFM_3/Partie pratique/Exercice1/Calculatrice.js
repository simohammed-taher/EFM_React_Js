import React, { useState } from "react";
import femme from "./femme.webp";
import homme from "./homme.webp";

export default function Ex1() {
  const [taille, setTaille] = useState(0);
  const [genre, setGenre] = useState("");
  const [poids, setPoids] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleTailleChange = (event) => {
    setTaille(event.target.value);
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!taille) {
      setMessage("La taille doit être un nombre");
      return;
    }

    const tailleNum = parseInt(taille);

    if (tailleNum < 150) {
      setMessage("La taille ne peut être inférieure à 150cm");
      return;
    }

    const poidsIdeal =
      genre === "homme"
        ? tailleNum - 100 - (tailleNum - 150) / 4
        : tailleNum - 100 - (tailleNum - 150) / 2;

    setPoids(poidsIdeal + " Kg");
    setMessage("");
  };

  const handleSelection = (event) => {
    setGenre(event.target.value);
    setImage(event.target.value === "homme" ? homme : femme);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Taille en CM :</label>
        {message && <div style={{ color: "red" }}>{message}</div>}
        <input type="text" onChange={handleTailleChange} />
        <br />
        <label>Genre :</label>
        <select onChange={handleSelection}>
          <option value="">Choisissez le genre</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>
        <br />
        <input type="submit" value="Calculer" />
        {image && (
          <img
            src={image}
            alt={genre}
            style={{ height: "200px", width: "200px" }}
          />
        )}
        <br />
        <br />
        <label>Poids idéal :</label>
        <input type="text" value={poids} />
      </form>
    </div>
  );
}
