import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Menu, Booking, Chefs, Footer } from "./pages/index";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  const location = useLocation();

  useEffect(() => {
      if (location.pathname !== "/") {
        window.scrollTo(0, 500);
      }
  }, [location]);

  return (
    <>
      <ParallaxProvider>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
      </ParallaxProvider>
    </>
  );
};

export default App;
