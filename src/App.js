import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reflections from "./components/Reflections";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Reflections />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
