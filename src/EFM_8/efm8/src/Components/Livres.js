import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Livres() {
  const [livres, setLivres] = useState([]);

  useEffect(() => {
    axios
      .get("API_URL")
      .then((response) => setLivres(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Livres</h1>
      {livres.map((livre) => (
        <div key={livre.id}>
          <img src={livre.image} alt={livre.decd} />
          <p>{livre.titre}</p>
        </div>
      ))}
    </div>
  );
}
