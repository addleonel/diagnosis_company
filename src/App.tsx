import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Primaries from "./Primaries";
import Support from "./Support";
const App: React.FC = () => {
 
  return (
      <>
        <div>
         <h1 className="principal-title">LA CADENA DE VALOR: ACTIVIDADES PRIMARIAS Y DE APOYO</h1>
        </div>
          <h1 style={{ marginTop: "20px",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "2rem",
            color: "#333",
            backgroundColor: "#a5ffb3",
            padding: "10px",
            borderRadius: "8px",
           }} 
          className="text-center mb-4">Actividades Primarias</h1>
          <Primaries />
          <h1 style={{ marginTop: "20px",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "2rem",
            color: "#333",
            backgroundColor: "#a5ffb3",
            padding: "10px",
            borderRadius: "8px",
           }} className="text-center mb-4">Actividades de Apoyo</h1>
          <Support />
      </>
  );
};

export default App;