import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CardProvider } from "./Provider/CardContext/index.jsx";
import { CardholderProvider } from "./Provider/Cardholder/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardholderProvider>
      <CardProvider>
        <App />
      </CardProvider>
    </CardholderProvider>
  </React.StrictMode>
);
