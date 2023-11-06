import React from 'react';
import './App.css';
import { Navbar, Footer } from './pages/index'
import Button from "../src/components/Buttons/NoirButton";
import headerImg from "../src/assets/img/header-1.png"
import locationSvg from "../src/assets/img/Location.svg"
import timerSvg from "../src/assets/img/timer.svg"
import reservation from "../src/assets/img/Reserve.svg"

function App() {
  return (
    <div className="App">
      {/* Navbar Component @/src/pages/Navbar/Navbar */}
     <Navbar showHeader={false}  />
     {/* Header of main page */}
      <header className='w-full bg-blackPrimary flex justify-evenly items-center relative'>
          <div className='text-white font-body text-left'>
            <h1 className='text-6xl mb-3 '>Welcome to <br /> Noir Elegance</h1>
            <p className='mb-5'>Simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy .</p>
            <Button type="primary">View Menu</Button>
          </div>

          <div className='mt-8 backdrop-blur-3xl bg-white bg-opacity-10 rounded-tl-full rounded-tr-full w-96 h-96'>
            <img src={headerImg} alt="header" className='w-96 h-auto rounded-tl-full rounded-tr-full scale-90' />
          </div>
      </header>

      {/* Main part of main page */}
      <main>
        <div>
          
        </div>
      </main>
    </div>
  );
}

export default App;

