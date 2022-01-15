import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer'

import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <div id="Home">
        <h1>Home</h1>
      </div>
      <div id="Portfolio">
        <h1>Portfolio</h1>
      </div>
      <div id="Contact">
        <h1>Contact</h1>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;

