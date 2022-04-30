import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./pages";
import "./index.css";
import { Security } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
  issuer: `https://dev-97039192.okta.com/oauth2/default`,
  clientId: "0oa4vgeuiybHDeA7T5d7",
  redirectUri: `${window.location.origin}/callback`,
});

function restoreOriginalUri(oktaAuth: OktaAuth, originalUri: string) {
  window.location.replace(
    toRelativeUrl(originalUri || "/", window.location.origin)
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Security>
  </React.StrictMode>
);
