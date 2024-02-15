import logo from './logo.svg';
import './App.css';
import ImageUpload from './Components/Home/ImageUpload';

import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from './Components/Info';
import Block from './Components/Block';
import React,{useState} from 'react';





function App() {
  return (
    <div className="App">
      <Home />
      {/* <Info /> */}
     
      
    </div>
  );
}

export default App;
