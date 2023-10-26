import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Home from "./components/ClubMembres";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/club" element=<ClubMembres /> />
          <Route path="/contact" element=<Contact /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
