import React, { useState } from "react";
import { LoginCallback, SecureRoute } from "@okta/okta-react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Dashboard, Home } from "../";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={<SecureRoute path="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/login" element={} />
      <Route path="/login/callback" element={<LoginCallback />} />
    </Routes>
  );
}

export default App;
