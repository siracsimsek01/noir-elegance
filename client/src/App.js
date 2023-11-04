import React from 'react';
import './App.css';
import { Navbar, Footer } from './pages/index'

function App() {
  return (
    <div className="App">
     <Navbar showHeader={false}  />
     <Footer/>
    </div>
  );
}

export default App;
