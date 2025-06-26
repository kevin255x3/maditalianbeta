import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Who from './Who'; // Import the Who component
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen pb-12"> {/* Ensure this padding accommodates your footer */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/who" element={<Who />} /> {/* Added Who route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;