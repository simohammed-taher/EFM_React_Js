import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Fetch() {
  const [livres, setLivers] = useState([]);
  useEffect(() => {
    fetch("https://127.0.0.1:8080/api/livres")
      .then((response) => response.json())
      .then((data) => setLivers(data));
  }, []);
  return <div></div>;
}
