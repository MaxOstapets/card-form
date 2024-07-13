import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CardProvider } from "./Provider/CardContext/index.jsx";
import { CardholderProvider } from "./Provider/Cardholder/index.jsx";
// import { ValidationProvider } from "./Provider/Validation/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ValidationProvider> */}
      <CardholderProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </CardholderProvider>
    {/* </ValidationProvider> */}
  </React.StrictMode>
);
