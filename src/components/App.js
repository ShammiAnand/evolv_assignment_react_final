import React from "react";
import { Card } from "./Card";

function App() {
  return (
    <div
      style={{
        widht: "100vw",
        height: "100vh",
        backgroundColor: "#E5E5E5",
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
