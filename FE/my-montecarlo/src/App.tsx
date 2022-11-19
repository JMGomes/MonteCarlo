import React from 'react';
import './App.css';
import {monteCarlo} from "./service/MonteCarloService";
import {MonteCarlo} from "./components/MonteCarlo";

function App() {
  return (
    <div className="App">
      <MonteCarlo></MonteCarlo>
    </div>
  );
}

export default App;
