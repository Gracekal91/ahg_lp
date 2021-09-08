import React from "react";
import { BreakpointProvider } from 'react-socks';
import Navigation from "./components/Navigation"
import Hero from "./components/Hero";
import './App.css'




function App() {
  return (
    <React.Fragment>
      <BreakpointProvider>
        <Navigation />
        <Hero />
      </BreakpointProvider>
    </React.Fragment>
  );
}

export default App;
