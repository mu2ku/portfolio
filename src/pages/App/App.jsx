import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer'
import Home from '../Home/Home'
import Works from '../Works/Works'
import Contact from '../Contact/Contact'

import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <div id="Home">
        <Home />
      </div>
      <div id="Skillset">
        <h1>Grace Mutuku</h1>
      </div>
      <div id="Portfolio">
        <Works />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;

