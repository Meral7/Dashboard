import './App.css';
import MainDash from './assets/components/mainDash/MainDash';
import RightSide from './assets/components/RightSide/RightSide';
import Sidebar from './assets/components/Sidebar/Sidebar';
import { useState, useEffect } from 'react';
import { UilBars, UilTimes, UilMoon, UilSun } from '@iconscout/react-unicons';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest('.Sidebar') && !event.target.closest('.toggle-icon')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarOpen]);

  return (
    <div className="App">
      {/* Theme toggle */}
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <UilSun size={24} /> : <UilMoon size={24} />}
      </button>

      {/* Toggle icon for mobile */}
      <button 
        className={`toggle-icon ${sidebarOpen ? 'active' : ''}`} 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <UilTimes size={28} /> : <UilBars size={28} />}
      </button>

      {/* Backdrop for mobile */}
      {sidebarOpen && <div className="backdrop" onClick={() => setSidebarOpen(false)} />}

      <div className={`AppGlass ${sidebarOpen ? 'open-sidebar' : ''}`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;