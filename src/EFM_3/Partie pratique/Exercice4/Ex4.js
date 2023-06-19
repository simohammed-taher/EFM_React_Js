import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculatrice from "../Exercice1/Calculatrice";
import CarteLivre from "../Exercice2/CarteLivre";
import Ex4 from "../Exercice3/Ex4";

export default function Ex5() {
  return (
    <div>
      <ul>
        <li>
          <h1>
            <link to="/poid">PoidsIde</link>
          </h1>
        </li>
        <li>
          <h1>
            <link to="/livres">Livers</link>
          </h1>
        </li>
        <li>
          <h1>
            <link to="/covide">Covide</link>
          </h1>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Calculatrice />}></Route>
        <Route path="/Ex2" element={<CarteLivre />}></Route>
        <Route path="/Ex3" element={<Ex4 />}></Route>
      </Routes>
    </div>
  );
}
