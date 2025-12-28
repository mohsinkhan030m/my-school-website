import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Techniques from './components/Techniques';
import Teachers from './components/Teachers';
import Register from './components/Register';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Register />
              </>
            } />
            <Route path="/vision" element={<Vision />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/admission" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
