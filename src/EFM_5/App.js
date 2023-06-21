import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailStagiaire from "./components/Stagiaire/DetailStagiaire";
import AddStagiaire from "./components/Stagiaire/AddStagiaire";
import ListStagiaire from "./components/Stagiaire/ListStagiaire";
import Header from "./components/Header/Header";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element=<ListStagiaire /> />
          <Route path="/add" element=<AddStagiaire /> />
          <Route path="/:nom" element=<DetailStagiaire /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
