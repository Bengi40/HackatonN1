import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./App.scss";

import Home from "./screens/Home";



import CharacterCardsList from "./screens/CharacterCardsList";

import Header from "./components/Header";
import Footer from "./components/Footer";

//TEST LOGINFORM
import LoginForm from "./components/Loginform";
import './components/Loginform.css';


function App() {



  return (
    <>
    <div className="app">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <Header />
    <Home />
      /* <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/characters" element={<Characters />} /> */}
      </Routes>
      <CharacterCardsList/>
</div>
        
    </>
  )

  }
export default App;
