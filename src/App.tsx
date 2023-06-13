import "./App.css";

import React from "react";
import Portfolio from "./components/portfolio/Portfolio";
import portfolioData from "./data/portfolio.json";
import Navbar from "./components/navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Portfolio items={portfolioData.items} />
    </div>
  );
};

export default App;
