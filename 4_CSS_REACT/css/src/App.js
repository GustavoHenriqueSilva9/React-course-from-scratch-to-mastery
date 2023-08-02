
import './App.css';

import Title from './components/Title';
import MyComponent from './components/MyComponent';

import { useState } from "react";
function App() {

  const name = "Gustavo";
  const [redTtile, setRedTitle] = useState(true)

  return (
    <div className="App">

      {/* CSS global */}
      <h1> h1 do App.js </h1>

      {/* CSS de component */}
      <MyComponent />

      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid black" }}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS inline dinamico */}
      <h2 style={name === "Gustavo" ? { color: "pink" } : { color: "blue" }}> Teste CSS inline dinamico </h2>

      {/* Classe dinamica */}
      <h2 className={redTtile ? "red-title" : "title"}> Classe dinamcia </h2>
      <button onClick={() => setRedTitle(false)}> Remover Red da classe dinamicas </button>

      {/* CSS Module*/}
      <Title />

    </div>
  );
}

export default App;
