import React from "react";

import { BreakpointProvider } from 'react-socks';
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation"
import Hero from "./components/Hero";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


import './App.css'

function App() {

  return (
    <React.Fragment>
      <BreakpointProvider>
        <Router>
          <Navigation />
          <Hero />
          <Skills />
          <About />
          <Contact />
          <Footer />
        </Router>
      </BreakpointProvider>
    </React.Fragment>
  );
}


export default App;
