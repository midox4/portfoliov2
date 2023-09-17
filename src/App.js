import React from 'react'
import "./App.css"
//import {FaArrowUp} from'react-icons/fa'

import About from './components/container/About/About'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
import Portfolio from './components/container/Portfolio/Portfolio'
import Skills from './components/container/Skills/Skills'
import {useEffect, useState} from 'react'

//import { Images } from './components/container/Skills/Skills'; // Use the correct import name here

import Navbar from './components/Navbar/Navbar'

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);

  return (
    <div id='up'>
      <Navbar />
      <Home/>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <a style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} href="#up">
        <button className=" scroll2Top"> up</button>
      </a>

    </div>
  )
}

export default App
