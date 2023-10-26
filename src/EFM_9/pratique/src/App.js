import { BrowserRouter, Routes, Route } from "react-router-dom";
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
