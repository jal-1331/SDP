import logo from './logo.svg'
import './App.css'
import ImageUpload from './Components/Home/ImageUpload'

import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'
import Info from './Components/Info'
import Block from './Components/Block'
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Components/About/About'
import Contact_us from './Components/Contact_us/Contact_us'
import Services from './Components/Services/Services'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Info" element={<Info />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact_us" element={<Contact_us />}></Route>
          <Route path="/Services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
