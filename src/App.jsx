import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';
import Aboutpage from './components/aboutpage/aboutpage';
import Projectpage from './components/Projectpage/projectpage';
import Resumepage from './components/resume/resumepage';
import Contactpage from './components/contactpage/contactpage';

function App() {
  return (
    <Router>
      <div className="mx-20 px-10 py-5 bg-black">
        <Navbar />
      </div>
      <div className="mx-20 px-10">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<AnimatedPage><Homepage /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><Aboutpage /></AnimatedPage>} />
            <Route path="/projects" element={<AnimatedPage><Projectpage /></AnimatedPage>} />
            <Route path="/resume" element={<AnimatedPage><Resumepage /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contactpage /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

// Higher-order component for animations
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
