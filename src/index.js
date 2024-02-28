import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "../src/reportWebVitals";
import { Counter } from "./Components/Context/CounterContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-bzyx4rek5d6ajw8y.us.auth0.com"
    clientId="G4yjWU0aAnLznTsvW3I6Oz2uR8kBwOQH"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Counter>
      <App />
    </Counter>
  </Auth0Provider>
);

reportWebVitals();
