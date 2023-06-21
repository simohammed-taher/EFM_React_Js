import React, { useEffect, useState } from "react";

export default function StagiairesApi() {
  const [stagiaires, setStagiaires] = useState([]);
  useEffect(() => {
    fetch("http://www.ofppt.ma/api/stagiaires")
      .then((response) => response.json())
      .then((data) => setStagiaires(data));
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Filière</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((stagiaire) => (
            <tr key={stagiaire.id}>
              <td>
                <img src={stagiaire.image} alt={stagiaire.nom} />
              </td>
              <td>{stagiaire.nom}</td>
              <td>{stagiaire.prenom}</td>
              <td>{stagiaire.filiere}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
