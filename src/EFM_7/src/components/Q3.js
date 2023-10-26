import React from "react";
import { useSelector } from "react-redux";
export default function Q3() {
  const contents = useSelector((state) => state.state);
  return (
    <div>
      {contents.map((content) => {
        <div key={content.code}>
          <card>
            <img src="{content.image}" />
            <p>Nom:{content.nom}</p>
            <p>Surface: {content.surface}</p>
            <p>Population: {content.population}</p>
          </card>
        </div>;
      })}
    </div>
  );
}
