import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home'
import Footer from '../../components/Footer/Footer'
import Works from '../Works/Works'


const App = () => {


return(
  <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/works' element={<Works />} />
    </Routes>
    <Footer />
  </>
);
}

export default App;

