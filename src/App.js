
import React from 'react';
import Navbar from './components/layout/Navbar';
import About from './components/About';
import Scheduling from './components/Scheduling';
import Services from './components/Services';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
   return  <>
     <div className='App'>
       <Router>

        <Navbar />
        <ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/scheduling' element={<Scheduling />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/testimonials' element={<Testimonials />} />
        </Routes></ul>
      </Router> 
    </div> 
   
   </>
   
}

export default App;
