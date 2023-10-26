import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form() {
  const [pays, setPays] = useState([]);
  const [dataForm, setDataForm] = useState({
    email: "",
    motedepas: "",
    frequence: [],
  });
  const [info, setInfo] = useState("");

  const displayInfo = () => {
    setInfo(`Email: ${dataForm.email},
            Pays: ${pays},
            Fréquence: ${dataForm.frequence}`);
  };

  useEffect(() => {
    axios
      .get("-------------")
      .then((response) => setPays(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setDataForm((prev) => {
      if (checked) {
        return {
          ...prev,
          [name]: type === "checkbox" ? [...prev[name], value] : value,
        };
      } else {
        return {
          ...prev,
          [name]:
            type === "checkbox" ? prev[name].filter((x) => x !== value) : value,
        };
      }
    });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Recevoir notre newsletter</h1>
        Email: <input type="email" name="email" onChange={handleChange} />
        Mot De Pass:{" "}
        <input type="password" name="motedepas" onChange={handleChange} />
        Pays:
        <select name="pays" onChange={(e) => setPays(e.target.value)}>
          {pays.map((pays) => (
            <option key={pays.ville} value={pays.ville}>
              {pays.ville}
            </option>
          ))}
        </select>
        Fréquence:
        <input
          type="checkbox"
          name="frequence"
          value="Hebdomadaire"
          onChange={handleChange}
        />{" "}
        Hebdomadaire
        <input
          type="checkbox"
          name="frequence"
          value="Mensuel"
          onChange={handleChange}
        />{" "}
        Mensuel
      </form>

      <input type="submit" value="Envoyer" onClick={displayInfo} />
      <p>{info}</p>
    </div>
  );
}
