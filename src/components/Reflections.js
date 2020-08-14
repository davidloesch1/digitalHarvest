import React from "react";
import "../App.css";
import Interview from "./Interview";

function Reflections() {
  return (
    <div className="container bg-info p-3 text-light">
      <h1>Conversation Reflection</h1>
      <h2>Initial Interview</h2>
      <small>An atypical candidate</small>
      <br></br>
      <br></br>
      <Interview />
    </div>
  );
}

export default Reflections;
