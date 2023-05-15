
import React from "react";
import './App.css';

import About from './component/About'
import Projects from './component/Projects'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Test from './component/Testimonial'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
function App() {
  return (
    <main class="bg-dark">
    <Navbar/>
     <About/>
     <Projects/>
     <Skills/>
     <Test/>
     <Contact/>
     <Footer/>
    </main>
   
  );
}

export default App;
