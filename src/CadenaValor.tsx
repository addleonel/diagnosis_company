import React from "react";
import "./CadenaValor.css";
import Primaries from "./Primaries_likert";
import Support from "./Support_likert";
import { Link } from "react-router-dom";
const CadenaValor: React.FC = () => {
 
  return (
      <div className="cadena-container">
        <Link to="/" className="nav-button">
                      Inicio
                    </Link>
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
      </div>
  );
};

export default CadenaValor;