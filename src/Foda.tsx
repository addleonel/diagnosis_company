import React from "react";
import "./CadenaValor.css";
import FodaImage from "./assets/cimg/FODA.png";

const Foda: React.FC = () => {

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
       }}>
        <h1 style={{ marginTop: "20px",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "2rem",
            color: "#333",
            backgroundColor: "#a5ffb3",
            padding: "10px",
            borderRadius: "8px",
           }}>FODA</h1>
        <img 
          style={
            { 
              display: "block",
              margin: "0 auto",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px"
            }
          }
        src={FodaImage} alt="FODA" />
      </div>
    </>
  );
};

export default Foda;