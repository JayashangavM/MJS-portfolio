import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        // Copy to clipboard
        navigator.clipboard.writeText('mjayashangav@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);

        // We allow the default mailto behavior to proceed (no e.preventDefault()),
        // so it attempts to open the mail client AND copies the email.
    };

    return (
        <section id="contact" className="container" style={{ textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '600px', margin: '0 auto' }}
            >
                <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', marginBottom: '1.5rem' }}>
                    Get In Touch
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3.5rem' }}>
                    I am currently seeking opportunities to contribute to modern web development projects.
                    Feel free to reach out for collaborations or just a friendly tech chat!
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>

                    {/* Copied notification */}
                    <AnimatePresence>
                        {copied && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    position: 'absolute',
                                    marginTop: '-40px',
                                    background: 'var(--accent)',
                                    color: 'var(--bg-primary)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    boxShadow: '0 4px 12px var(--accent-glow)'
                                }}
                            >
                                <Check size={16} /> Email Copied!
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
                        <a
                            href="mailto:mjayashangav@gmail.com?subject=Hello%20Jayashangav!&body=Hi%20Jayashangav,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0D%0A%0D%0ABest%20regards,"
                            onClick={handleCopyEmail}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', textDecoration: 'none', cursor: 'pointer' }}
                            className="nav-link"
                        >
                            <Mail size={20} style={{ color: 'var(--accent)' }} />
                            <span>mjayashangav@gmail.com</span>
                        </a>
                        <a href="tel:+916379912425" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', textDecoration: 'none' }} className="nav-link">
                            <Phone size={20} style={{ color: 'var(--accent)' }} />
                            <span>+91 6379912425</span>
                        </a>
                    </div>

                    <a
                        href="mailto:mjayashangav@gmail.com?subject=Hello%20Jayashangav!&body=Hi%20Jayashangav,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0D%0A%0D%0ABest%20regards,"
                        onClick={handleCopyEmail}
                        className="btn-primary"
                        style={{ padding: '1.25rem 3rem', fontSize: '1rem' }}
                    >
                        Say Hello
                    </a>

                    <div style={{ display: 'flex', gap: '2.5rem', marginTop: '1.5rem' }}>
                        <a href="https://linkedin.com/in/jayashangav" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                            <Linkedin size={26} />
                        </a>
                        <a href="https://github.com/JayashangavM" target="_blank" rel="noreferrer" title="GitHub" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                            <Github size={26} />
                        </a>
                        <a href="https://leetcode.com/u/30CiUBOEOn/" target="_blank" rel="noreferrer" title="LeetCode" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                            <ExternalLink size={26} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
