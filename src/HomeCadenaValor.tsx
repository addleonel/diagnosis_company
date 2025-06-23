import React from "react";
import { Link } from "react-router-dom";
import "./HomeCadenaValor.css";

const HomeCadenaValor: React.FC = () => {
  return (
    <div className="home-container">
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="navbar-brand">Inversiones El Faique SRL</div>
        <ul className="navbar-links">
          <li>
            <Link to="/cadena-de-valor" className="nav-button">
              Cadena de Valor
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="hero-section">
        <h1></h1>
        <p></p>
        <Link to="/cadena-de-valor" className="cta-button">
          Cadena de Valor
        </Link>
      </div>
    </div>
  );
};

export default HomeCadenaValor;