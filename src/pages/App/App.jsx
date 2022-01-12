import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home'


const App = () => {


return(
  <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </>
);
}

export default App;

