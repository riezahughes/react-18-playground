import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./pages";
import "./index.css";
import { Security } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { GlobalThemeProvider } from "./store";

console.log(import.meta.env.VITE_PKCE);
console.log(typeof import.meta.env.VITE_PKCE);

console.log(import.meta.env.VITE_REDIRECTURI);

const oktaAuth = new OktaAuth({
  issuer: import.meta.env.VITE_ISSUER,
  clientId: import.meta.env.VITE_CLIENTID,
  redirectUri: import.meta.env.VITE_REDIRECTURI,
  pkce: false,
});

function restoreOriginalUri(oktaAuth: OktaAuth, originalUri: string) {
  window.location.replace(
    toRelativeUrl(originalUri || "/dashboard", window.location.origin)
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalThemeProvider>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          <App />
        </Security>
      </GlobalThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
