
import { useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/navbar';
import About from './Components/About/About';

function App() {
  const[theme,setTheme]=useState('light');
  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Hero></Hero>
      <About></About>
      
    </div>
  );
}

export default App;
