import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { store } from "./store/index.js";
import { BasketProvider } from "./components/contex/basketContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BasketProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </BasketProvider>
);
