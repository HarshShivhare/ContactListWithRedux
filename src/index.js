import React from "react";
import ReactDOM from "react-dom";
import Contact from "./Contact.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Contact App</h1>
      <Contact />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
