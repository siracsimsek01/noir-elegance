import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Navbar, Home } from "../src/pages/index";
import { About, Menu, Chefs, Footer } from "../src/pages/index";
import { Reserve } from "../src/components/index";

const App = () => {
  return (
    <div className="App">
      <ParallaxProvider>
        <Router>
          {/* Navbar Component @/src/pages/Navbar/Navbar */}
          {/* <Navbar showHeader={false} /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/chefs" element={<Chefs />} />
            <Route path="/contact" element={<Footer />} />
          </Routes>


          <Home/>

          {/* Main part of main page */}
        </Router>
      </ParallaxProvider>
    </div>
  );
};

export default App;
