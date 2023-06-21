import React, { Component } from "react";

export default class Compteur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debut: props.debut,
      fin: props.fin,
      pas: props.pas,
      compteur: props.debut,
      result: "",
    };
  }
  Initialiser() {
    this.setState({
      debut: this.state.debut,
      fin: this.state.fin,
      pas: this.state.pas,
      compteur: this.state.debut,
      resultat: "",
    });
  }
  Jouer() {
    this.setState({ compteur: this.state.compteur - this.state.pas });
    this.state.compteur < this.state.fin
      ? this.setState({ resultat: "Fin du jeu" })
      : this.setState({ resultat: `Compteur est :${this.state.compteur}` });
  }
  render() {
    return (
      <div>
        <h3>Composant Compteur </h3>
        <ul>
          <li>Pas:{this.state.pas}</li>
          <li>Debut:{this.state.debut}</li>
          <li>Fin:{this.state.fin}</li>
        </ul>
        <button onClick={() => this.Jouer()}>Jouer</button>
        <button onClick={() => this.Initialiser()}>Initialiser</button>
        {this.state.resultat}
      </div>
    );
  }
}
