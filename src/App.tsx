import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="font-body">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;