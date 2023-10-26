import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Livres from "./Components/Livres";
import NoPage from "./Components/NoPage";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/livres" element=<Livres /> />
          <Route path="/nopage" element=<NoPage /> />
          <Route path="/contact" element=<Contact /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
