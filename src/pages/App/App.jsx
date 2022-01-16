import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer'
import Home from '../Home/Home'
import About from '../About/About';
import Works from '../Works/Works'

import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <div id="Home">
        <Home />
      </div>
      <div id="About Me">
        <About />
      </div>
      <div id="Portfolio">
        <Works />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;

