import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home'
import Footer from '../../components/Footer/Footer'


const App = () => {


return(
  <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
  </>
);
}

export default App;

