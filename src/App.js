import React from "react";

import "./styles.css";
import Header from "./Components/Header.js";
import MainContent from "./Components/MainContent.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Trabalho Final</h1>
      <h2>Tomablr</h2>

      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
