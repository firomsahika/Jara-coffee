import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Home from './pages/HomePage/Home';
import About from './pages/AboutUsPage/About';
import Contact from './pages/ContactUsPage/Contact';
import Footer from "./components/Footer"
import Service from './pages/Services/Service';
import Blog from "./pages/Blog/Blog"

const App = () => {
  return (
    <Router>
      <Navbar /> 
      
      <div className=''>
        <Routes>
          {/* Define Routes here */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog />} />

          {/* <Route path="/contact" element={<Contact />} /> */}

          
          {/* Optionally, a fallback Route for 404 */}
          <Route path="*" component={() => <h2>Page not found</h2>} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
