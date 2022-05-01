import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./pages";
import "./index.css";
import { Security } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
  issuer: import.meta.env.VITE_ISSUER,
  clientId: import.meta.env.VITE_CLIENTID,
  redirectUri: import.meta.env.VITE_REDIRECTURI,
  pkce: import.meta.env.VITE_PKCE as boolean | undefined,
});

function restoreOriginalUri(oktaAuth: OktaAuth, originalUri: string) {
  window.location.replace(
    toRelativeUrl(originalUri || "/dashboard", window.location.origin)
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <App />
      </Security>
    </BrowserRouter>
  </React.StrictMode>
);
