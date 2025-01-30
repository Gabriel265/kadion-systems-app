import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;