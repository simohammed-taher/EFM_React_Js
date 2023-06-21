import Machine from "./Machine";
import MachinePanier from "./MachinePanier";
import { useState } from "react";

export default function ListMachine() {
  const listMachine = [
    {
      id: 1,
      ref: "ref1",
      marque: "TOSHIBA",
      prix: 15000,
      description: "PC Portable Gamer TOSHIBA",
    },
    {
      id: 2,
      ref: "ref2",
      marque: "ACER",
      prix: 5000,
      description: "PC Portable Chromebook Acer",
    },
    {
      id: 3,
      ref: "ref3",
      marque: "HUAWEI",
      prix: 17000,
      description: "PC Portable Gamer-HUAWEI",
    },
  ];

  const [panier, setPanier] = useState([]);

  const styleListMachine = {
    border: "5px solid red",
    padding: "10px",
    width: "600px",
  };
  return (
    <div style={styleListMachine}>
      <h1>Liste des Machines</h1>
      <ul style={{ listStyleType: "none", padding: "10px" }}>
        {listMachine.map((pc) => (
          <Machine
            infos={pc}
            panier={panier}
            setPanier={setPanier}
            key={pc.id}
          />
        ))}
      </ul>
      {panier.length === 0 ? (
        <h1>votre panier est vide</h1>
      ) : (
        <div>
          <h2>listes des articles de votre panier sont :</h2>
          <ul style={{ listStyleType: "none", padding: "20px" }}>
            {panier.map((p) => (
              <MachinePanier
                description={p.description}
                prix={p.prix}
                marque={p.marque}
                rf={p.ref}
                key={p.id}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
