import React, { useState } from "react";

export default function CalculIMC() {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [imc, setImc] = useState("");
  const [msg, setMsg] = useState("");

  const handlCalcule = () => {
    let r = poids / (taille * taille);
    setImc(r.toFixed(2));
    if (r > 18.5 && r < 24.5) {
      setMsg("Normal");
    } else if (r < 18.5) {
      setMsg("Sous-poids");
    } else {
      setMsg("Surpoids");
    }
  };

  return (
    <div>
      <h1>Indice de masse corporelle</h1>
      <p>Poids en (Kg)</p>
      <input
        type="number"
        placeholder="Entrer le poids"
        value={poids}
        onChange={(e) => setPoids(e.target.value)}
      />
      <br />
      <p>Taille en (mètre)</p>
      <input
        type="number"
        placeholder="Entrer la taille"
        value={taille}
        onChange={(e) => setTaille(e.target.value)}
      />
      <br />
      <button type="button" onClick={handlCalcule}>
        Calculer
      </button>
      <br />
      <h5
        style={{
          color:
            msg === "Normale"
              ? "green"
              : msg === "Sous-poids"
              ? "red"
              : "orange",
        }}
      >
        IMC: {imc} ------- {msg}
      </h5>
    </div>
  );
}
