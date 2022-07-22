import React from "react";
import { Card } from "./Card";

function App() {
  return (
    <div
      style={{
        widht: "100vw",
        height: "100vh",
        backgroundColor: "#1F2731",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Card />
    </div>
  );
}

export default App;
