import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Subject from './pages/Subject';
import Chapter from './pages/Chapter';
import FinalExam from './pages/FinalExam';
import Progress from './pages/Progress';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('nursing_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('nursing_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('nursing_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/subject/:subjectId" element={<Subject />} />
            <Route path="/subject/:subjectId/chapter/:chapterId" element={<Chapter />} />
            <Route path="/subject/:subjectId/exam" element={<FinalExam />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
