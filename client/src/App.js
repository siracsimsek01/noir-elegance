import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Menu, Chefs } from "./pages/index";
import { Reserve } from "./components/index";
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  );
};

export default App;
