import React from "react";
export default function MachinePanier(props) {
  return (
    <div>
      <span>{props.rf}&nbsp;</span>
      <span>{props.marque}&nbsp;</span>
      <span>{props.description}&nbsp;</span>
      <span>{props.prix}</span>
    </div>
  );
}
