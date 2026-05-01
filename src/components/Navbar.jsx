import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, BookOpen, BarChart, Sun, Moon } from 'lucide-react';
import '../index.css';

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="glass-nav" style={{ padding: '16px 0', marginBottom: '32px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '1.25rem', color: 'var(--primary)' }}>
          <Activity size={24} />
          <span>NurseStudy</span>
        </Link>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button 
            onClick={toggleTheme} 
            className="btn-icon" 
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/" className="btn-secondary" style={{ padding: '8px 16px', border: 'none' }}>
            <BookOpen size={18} />
            Subjects
          </Link>
          <Link to="/progress" className="btn-primary" style={{ padding: '8px 16px' }}>
            <BarChart size={18} />
            My Progress
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
