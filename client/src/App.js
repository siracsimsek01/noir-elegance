import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Menu, Booking, Chefs } from "./pages/index";
import "./App.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
};

export default App;
