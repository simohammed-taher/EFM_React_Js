import React, { useState } from "react";

const Appp = () => {
  const [stagiaires, setStagiaires] = useState([
    {
      id: 1,
      matricule: 1454,
      nom: "Alaoui",
      codepostal: 20400,
      ville: "casa",
      moyenne: 12.56,
    },
    {
      id: 2,
      matricule: 1455,
      nom: "Mansouri",
      codepostal: 20400,
      ville: "casa",
      moyenne: 14.67,
    },
    {
      id: 3,
      matricule: 3454,
      nom: "Ramdani",
      codepostal: 10400,
      ville: "rabat",
      moyenne: 11.45,
    },
  ]);

  const [stagiaires2, setStagiaires2] = useState([]);
  const [nouveauStagiaire, setNouveauStagiaire] = useState({
    id: "",
    matricule: "",
    nom: "",
    codepostal: "",
    ville: "",
    moyenne: "",
  });

  const [messageErreur, setMessageErreur] = useState("");
  const [messageVide, setMessageVide] = useState("");

  const ajouterStagiaire = () => {
    if (
      !nouveauStagiaire.id ||
      !nouveauStagiaire.matricule ||
      !nouveauStagiaire.nom ||
      !nouveauStagiaire.codepostal ||
      !nouveauStagiaire.ville ||
      !nouveauStagiaire.moyenne
    ) {
      setMessageErreur("Tous les champs sont obligatoires à saisir.");
      return;
    }

    if (
      stagiaires.some(
        (stagiaire) => stagiaire.matricule === nouveauStagiaire.matricule
      )
    ) {
      setMessageErreur("Le matricule doit être unique.");
      return;
    }

    if (nouveauStagiaire.moyenne < 0 || nouveauStagiaire.moyenne > 20) {
      setMessageErreur("La moyenne générale doit être comprise entre 0 et 20.");
      return;
    }

    setStagiaires((prevStagiaires) => [
      ...prevStagiaires,
      { ...nouveauStagiaire, id: prevStagiaires.length + 1 },
    ]);
    setNouveauStagiaire({
      id: "",
      matricule: "",
      nom: "",
      codepostal: "",
      ville: "",
      moyenne: "",
    });
    setMessageErreur("");
  };

  const supprimerStagiaire = (id) => {
    setStagiaires((prevStagiaires) =>
      prevStagiaires.filter((stagiaire) => stagiaire.id !== id)
    );
  };

  const editerStagiaire = (id) => {
    const stagiaire = stagiaires.find((stagiaire) => stagiaire.id === id);
    if (stagiaire) {
      setNouveauStagiaire(stagiaire);
    }
  };

  const viderChamps = () => {
    setNouveauStagiaire({
      ...nouveauStagiaire,
      matricule: "",
      nom: "",
      codepostal: "",
      ville: "",
      moyenne: "",
    });
  };

  const filtrerStagiaires = () => {
    const nomRecherche = nouveauStagiaire.nom.trim();
    const villeRecherche = nouveauStagiaire.ville.trim();

    if (!nomRecherche && !villeRecherche) {
      setMessageVide("Tableau de recherche vide");
      setStagiaires2([]);
      return;
    }

    const resultatRecherche = stagiaires.filter((stagiaire) => {
      const nomMatch =
        !nomRecherche ||
        stagiaire.nom.toLowerCase().includes(nomRecherche.toLowerCase());
      const villeMatch =
        !villeRecherche ||
        stagiaire.ville.toLowerCase().includes(villeRecherche.toLowerCase());
      return nomMatch && villeMatch;
    });

    setMessageVide("");

    setStagiaires2(resultatRecherche);
  };

  const reinitialiserRecherche = () => {
    setStagiaires2([]);
    setMessageVide("");
  };

  const calculerMoyennes = () => {
    const moyennes = stagiaires.map((stagiaire) => stagiaire.moyenne);
    const moyenneMax = Math.max(...moyennes);
    const moyenneMin = Math.min(...moyennes);
    const moyenneClasse =
      moyennes.reduce((acc, curr) => acc + curr, 0) / moyennes.length;

    return (
      <ul>
        <li>Moyenne générale la plus élevée: {moyenneMax}</li>
        <li>Moyenne générale la moins élevée: {moyenneMin}</li>
        <li>Moyenne générale de la classe: {moyenneClasse}</li>
      </ul>
    );
  };

  return (
    <div>
      <h1>Liste des Stagiaires</h1>
      {stagiaires.length === 0 ? (
        <p style={{ color: "red" }}>Tableau des stagiaires vide</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Code Postal</th>
              <th>Ville</th>
              <th>Moyenne</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stagiaires.map((stagiaire) => (
              <tr key={stagiaire.id}>
                <td>{stagiaire.id}</td>
                <td>{stagiaire.matricule}</td>
                <td>{stagiaire.nom}</td>
                <td>{stagiaire.codepostal}</td>
                <td>{stagiaire.ville}</td>
                <td>{stagiaire.moyenne}</td>
                <td>
                  <button onClick={() => supprimerStagiaire(stagiaire.id)}>
                    Supprimer
                  </button>
                  <button onClick={() => editerStagiaire(stagiaire.id)}>
                    Editer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h2>Ajouter un nouveau stagiaire</h2>
      <div>
        <label>ID:</label>
        <input
          type="text"
          value={nouveauStagiaire.id}
          onChange={(e) =>
            setNouveauStagiaire({ ...nouveauStagiaire, id: e.target.value })
          }
        />
      </div>
      <div>
        <label>Matricule:</label>
        <input
          type="text"
          value={nouveauStagiaire.matricule}
          onChange={(e) =>
            setNouveauStagiaire({
              ...nouveauStagiaire,
              matricule: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Nom:</label>
        <input
          type="text"
          value={nouveauStagiaire.nom}
          onChange={(e) =>
            setNouveauStagiaire({ ...nouveauStagiaire, nom: e.target.value })
          }
        />
      </div>
      <div>
        <label>Code Postal:</label>
        <input
          type="text"
          value={nouveauStagiaire.codepostal}
          onChange={(e) =>
            setNouveauStagiaire({
              ...nouveauStagiaire,
              codepostal: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Ville:</label>
        <input
          type="text"
          value={nouveauStagiaire.ville}
          onChange={(e) =>
            setNouveauStagiaire({ ...nouveauStagiaire, ville: e.target.value })
          }
        />
      </div>
      <div>
        <label>Moyenne:</label>
        <input
          type="number"
          value={nouveauStagiaire.moyenne}
          onChange={(e) =>
            setNouveauStagiaire({
              ...nouveauStagiaire,
              moyenne: e.target.value,
            })
          }
        />
      </div>
      {messageErreur && <p style={{ color: "red" }}>{messageErreur}</p>}
      <button onClick={ajouterStagiaire}>Ajouter</button>
      <button onClick={viderChamps}>Vider</button>

      <h2>Filtrer par nom et ville</h2>
      <div>
        <label>Nom:</label>
        <input
          type="text"
          value={nouveauStagiaire.nom}
          onChange={(e) =>
            setNouveauStagiaire({ ...nouveauStagiaire, nom: e.target.value })
          }
        />
      </div>
      <div>
        <label>Ville:</label>
        <input
          type="text"
          value={nouveauStagiaire.ville}
          onChange={(e) =>
            setNouveauStagiaire({ ...nouveauStagiaire, ville: e.target.value })
          }
        />
      </div>
      <button onClick={filtrerStagiaires}>Filtrer</button>
      {stagiaires2.length > 0 ? (
        <ul>
          {stagiaires2.map((stagiaire) => (
            <li key={stagiaire.id}>
              {stagiaire.nom} - {stagiaire.ville}
            </li>
          ))}
        </ul>
      ) : (
        <p>{messageVide}</p>
      )}
      <button onClick={reinitialiserRecherche}>Réinitialiser recherche</button>

      <h2>Moyennes</h2>
      {calculerMoyennes()}
    </div>
  );
};

export default Appp;
