import React from "react";
import "./App.css";
import { Navbar, Header, MenuView, Footer } from "./pages/index";
import { Offer, Reserve, Testimonials } from "./components/index";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  return (
    <div className="App">
      <ParallaxProvider>
        {/* Navbar Component @/src/pages/Navbar/Navbar */}
        <Navbar showHeader={false} />
        {/* Header of main page */}
        <Header />

        {/* Main part of main page */}
        
          <MenuView />
          <Testimonials />
          <Offer />
          <Reserve />
          
          {/* <Footer /> */}
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default App;
