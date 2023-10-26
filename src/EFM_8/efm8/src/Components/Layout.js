import React from "react";
import Link from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/livres">Livres</Link>
        </li>
        <li>
          <Link to="/inscription">Inscription</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
