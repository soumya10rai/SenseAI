import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';

function App() {
  const [scanResults, setScanResults] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage setScanResults={setScanResults} />} />
          <Route path="/results" element={<ResultsPage results={scanResults} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;