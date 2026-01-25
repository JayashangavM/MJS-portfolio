import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WelcomePopup from './components/WelcomePopup';
import './index.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show welcome popup on initial visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
        sessionStorage.setItem('hasVisited', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Only run spotlight tracking on desktop (mouse) devices
    if (isTouchDevice) {
      document.documentElement.style.setProperty('--x', '50%');
      document.documentElement.style.setProperty('--y', '-500px'); // Hide it off-screen on touch
      return;
    }

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame to throttle updates and prevent layout thrashing
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--y', `${e.clientY}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <WelcomePopup show={showWelcome} onClose={() => setShowWelcome(false)} />
      <div className="spotlight"></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer>
          <div className="container">
            <p className="footer-text">
              Designed & Built with <span style={{ color: 'var(--accent)' }}>♥</span> by Jayashangav M
            </p>
            <p className="footer-subtext">
              © All Rights Reserved
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
