import React, { useEffect, useState } from "react";
//npm i axios
import axios from "axios";
export default function axios() {
  //dedclare ses state
  const [livres, setLivres] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/livres")
      .then((response) => setLivres(response.data));
  }, []);
  return <div></div>;
}
