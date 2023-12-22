import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AnimatePresence>
    </Router>
  </React.StrictMode>
);
