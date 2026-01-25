import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when hash changes
    useEffect(() => {
        const handleHashChange = () => setIsOpen(false);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                padding: scrolled ? '1rem 0' : '1.5rem 0',
                backgroundColor: scrolled ? 'var(--glass)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="animate-gradient"
                    style={{
                        fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                        fontWeight: 800,
                        cursor: 'pointer',
                        letterSpacing: '-1px',
                        zIndex: 101 // Keep logo above mobile menu
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    JM
                </motion.div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--text-primary)',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                fontFamily: 'var(--font-mono)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', zIndex: 101 }}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'var(--bg-primary)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 100,
                            gap: '2rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    fontSize: '2rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none'
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <div style={{ marginTop: '2rem' }}>
                            <button
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label="Toggle Theme"
                                style={{ transform: 'scale(1.5)' }}
                            >
                                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
