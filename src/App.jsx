import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <div className="spotlight"></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '4rem'
      }}>
        <div className="container">
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            margin: '0 auto'
          }}>
            Designed & Built with <span style={{ color: 'var(--accent)' }}>♥</span> by Jayashangav M
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.75rem',
            marginTop: '0.5rem',
            opacity: 0.6
          }}>
            © All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
