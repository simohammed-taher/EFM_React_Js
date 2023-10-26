import React from "react";
import Link from "react-router-dom";
export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/club">ClubMenmbre</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
