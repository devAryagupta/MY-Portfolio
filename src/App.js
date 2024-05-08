
import { useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const[theme,setTheme]=useState('light');
  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
