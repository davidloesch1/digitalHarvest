import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reflections from "./components/Reflections";
import PublicMap from './components/PublicMap'

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Reflections />
      <PublicMap />
    </div>
  );
}

export default App;
