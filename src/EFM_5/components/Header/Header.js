import React from "react";
import { Link } from "react-router-dom";
import "Header.css";
export default function Header() {
  return (
    <div>
      <header className="header">
        <nav>
          <Link to="/">Liste des stagiaires</Link>
          <Link to="/add">Ajouter un stagiaire</Link>
        </nav>
      </header>
    </div>
  );
}
