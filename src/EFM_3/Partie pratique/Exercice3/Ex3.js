import React, { useState, useEffect } from "react";
export default function Ex4() {
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((jsonData) => setcountries(jsonData));
  }, []);
  return (
    <div className="container text-center w-50 bg-dark ">
      <ul class="list-group ">
        {countries.map((country) => (
          <li key={country.country} className="list-group-item">
            <div>
              <h3>
                {country.country} --------- {country.cases}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
