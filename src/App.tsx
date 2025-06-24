import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import CadenaValor from "./CadenaValor";
import HomeCadenaValor from "./HomeCadenaValor";
import Foda from "./Foda";
import "./App.css";

const Sidebar: React.FC<{
  open: boolean;
  minimized: boolean;
  onToggle: () => void;
  onClose: () => void;
}> = ({ open, minimized, onToggle, onClose }) => {
  const location = useLocation();
  return (
    <div className={`sidebar${open ? " open" : ""}${minimized ? " minimized" : ""}`}>
      {/* Hamburguer icon for desktop (left) and mobile (right) */}
      <button
        className={`sidebar-hamburger${open ? " open" : ""}`}
        onClick={onToggle}
        aria-label="Toggle sidebar"
      >
        <span />
        <span />
        <span />
      </button>
      {/* Close button for mobile */}
      <button className="sidebar-close" onClick={onClose}>&times;</button>
      <h2 className="sidebar-title">Dashboard</h2>
      <nav>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={onClose}>Inicio</Link>
          </li>
          <li className={location.pathname === "/foda" ? "active" : ""}>
            <Link to="/foda" onClick={onClose}>Matriz FODA</Link>
          </li>
          <li className={location.pathname === "/cadena-de-valor" ? "active" : ""}>
            <Link to="/cadena-de-valor" onClick={onClose}>Cadena de Valor</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const DashboardLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile
  const [sidebarMinimized, setSidebarMinimized] = useState(false); // For desktop

  // Responsive: detect mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On mobile, sidebarOpen controls visibility; on desktop, minimized controls width
  return (
    <div className={`dashboard-container${sidebarMinimized && !isMobile ? " minimized" : ""}`}>
      <Sidebar
        open={isMobile ? sidebarOpen : true}
        minimized={sidebarMinimized && !isMobile}
        onToggle={() => {
          if (isMobile) setSidebarOpen((v) => !v);
          else setSidebarMinimized((v) => !v);
        }}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomeCadenaValor />} />
          <Route path="/foda" element={<Foda />} />
          <Route path="/cadena-de-valor" element={<CadenaValor />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
