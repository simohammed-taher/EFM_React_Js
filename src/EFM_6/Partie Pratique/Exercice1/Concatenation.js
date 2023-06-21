import React from "react";
import { useState } from "react";
export default function Concatenation() {
  const [mot1, setMot1] = useState("");
  const [mot2, setMot2] = useState("");
  const [motComplet, setMotComplet] = useState("");

  function handleChangeMot1(event) {
    setMot1(event.target.value);
  }
  function handleChangeMot2(event) {
    setMot2(event.target.value);
  }
  function AfficherInfo(event) {
    event.preventDefault();
    if (mot1 === "" || mot2 === "") alert("Entrer les infos");
    // else setMotComplet(`${mot1}${mot2}`);
    else setMotComplet(mot1 + mot2);
  }
  const styleConcatenation = { backgroundColor: "pink", width: "400px" };

  return (
    <div style={styleConcatenation}>
      <form onSubmit={AfficherInfo}>
        <h3>Composant Concatenation </h3>
        <label>
          Mot1:
          <input type="text" value={mot1} onChange={handleChangeMot1} />
        </label>
        <br />
        <label>
          Mot2:
          <input type="text" value={mot2} onChange={handleChangeMot2} />
        </label>
        <br />
        <button type="submit">Afficher mot Complet</button>
        <br />
        {motComplet.length > 0 && <h3>Mot Complet est : {motComplet}</h3>}
      </form>
    </div>
  );
}
