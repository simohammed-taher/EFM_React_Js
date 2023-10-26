import React, { useEffect, useState } from "react";
import Container from "./Container";
import axios from "axios";

export default function ClubMembers() {
  const [adherents, setAdherents] = useState([]);

  useEffect(() => {
    axios
      .get("http://apitest/adherents")
      .then((response) => {
        setAdherents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <h1>Liste des Adhérents</h1>
        <ul>
          {adherents.map((adherent) => (
            <li key={adherent.cin}>
              CIN: {adherent.cin}, Nom: {adherent.nom}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
