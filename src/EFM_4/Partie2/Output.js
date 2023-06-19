import React from "react";
import { useSelector } from "react-redux";

export default function Output() {
  const result = useSelector((state) => state.result);

  return (
    <div>
      {result.map((res, index) => (
        <p key={index}>
          {res.nb1} {res.action} {res.nb2}
        </p>
      ))}
      <p>Résultat : {result}</p>
    </div>
  );
}
