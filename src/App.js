import React, { useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Mywork from './Components/My Work/MyWork';


function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Services />
      <Mywork />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;