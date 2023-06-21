import React from "react";

export default function Machine(props) {
  const { id, ref, marque, prix, description } = props.infos;
  const setPanier = props.setPanier;
  const panier = props.panier;
  const styleMachine = {
    border: "5px solid blue",
    backgroundColor: "pink",
    marginBottom: "10px",
    padding: "20px",
  };

  function AjouterAuPanier() {
    //setPanier([...panier,props.infos])

    const tmp_panier = [...panier];
    tmp_panier.push(props.infos);
    setPanier(tmp_panier);
    alert(`la Machine de référence :${ref} est bien ajouté dans le modifier`);
  }
  return (
    <div style={styleMachine} key={id}>
      <span>
        ref:{ref},marque:{marque},prix:{prix},description:{description}
      </span>
      <button onClick={() => AjouterAuPanier()}>Ajouter au panier</button>
    </div>
  );
}
