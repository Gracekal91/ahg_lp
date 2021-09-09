import React from "react";

import { BreakpointProvider } from 'react-socks';

import Navigation from "./components/Navigation"
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import './App.css'

function App() {
  return (
    <React.Fragment>
      <BreakpointProvider>
        <Navigation />
        <Hero />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </BreakpointProvider>
    </React.Fragment>
  );
}

export default App;
