import React from "react";

import { BreakpointProvider } from 'react-socks';

import Navigation from "./components/Navigation"
import Hero from "./components/Hero";
import Skills from "./components/Skills";


import './App.css'




function App() {
  return (
    <React.Fragment>
      <BreakpointProvider>
        <Navigation />
        <Hero />
        <Skills />
      </BreakpointProvider>
    </React.Fragment>
  );
}

export default App;
