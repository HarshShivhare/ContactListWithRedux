import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import Contact from "./Contact.jsx";
import renderContact from "./reducer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Contact App</h1>
      <Contact />
    </div>
  );
}

const store = createStore(renderContact);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
