import React from 'react'
import {
    Navbar,
    Header,
    MenuView,
    Offer,
    Testimonials,
    Footer,
  } from "../index";
  import { Reserve } from "../../components/index";
  import Transition from '../../transition';

const Home = () => {
  return (
    <>
     {/* Navbar Component @/src/pages/Navbar/Navbar */}
       <Navbar showHeader={false} />
        {/* Header of main page */}
       <Header />
         {/* Main part of main page */}

          <MenuView />
          <Testimonials />
          <Offer />
          <Reserve />
          {/* Footer */}
          <Footer />
    </>
  )
}

export default Transition(Home)