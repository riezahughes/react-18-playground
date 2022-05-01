import React from "react";
import { LoginCallback } from "@okta/okta-react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Dashboard, Home } from "../";

import { Loading, RequiredAuth } from "../../components";

function App() {
  return (
    <Routes>
      <Route
        path="/callback"
        element={<LoginCallback loadingElement={<Loading />} />}
      />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<RequiredAuth />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      {/* <Route path="/login" element={} /> */}
    </Routes>
  );
}

export default App;
