import React, { useState } from "react";
import "./Input.css";

export default (props) => {
  const [valor, setvalor] = useState("Inicial");

  function quandoMudar(e) {
    setvalor(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input value={valor} onChange={quandoMudar} />
        <input value={valor} readOnly />
        <input value={undefined} />
      </div>
    </div>
  );
};
