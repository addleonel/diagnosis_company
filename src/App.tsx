import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadenaValor from "./CadenaValor";
import HomeCadenaValor from "./HomeCadenaValor";
import "./App.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomeCadenaValor />} />
            <Route path="/cadena-de-valor" element={<CadenaValor />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default App;
