import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Detail_Adherent({ cin }) {
  const [adherentDetails, setAdherentDetails] = useState({});

  useEffect(() => {
    axios
      .get(`http://apitest/adherents/${cin}`)
      .then((response) => setAdherentDetails(response.data))
      .catch((error) => console.log(error));
  }, [cin]);

  if (Object.keys(adherentDetails).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Details de l'adhérent (CIN: {cin})</h1>
      <p>Nom: {adherentDetails.nom}</p>
    </div>
  );
}
