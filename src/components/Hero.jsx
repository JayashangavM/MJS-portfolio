import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="hero-grid"
            >
                <div>
                    <h1 className="animate-gradient" style={{
                        fontSize: 'clamp(38px, 8vw, 72px)',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                        fontWeight: 800,
                        paddingBottom: '0.2em' // prevent descender cutoff
                    }}>
                        Jayashangav M
                    </h1>
                    <p className="text-gradient" style={{
                        fontSize: 'clamp(24px, 5.5vw, 48px)',
                        lineHeight: 1.1,
                        marginBottom: '2rem',
                        fontWeight: 700,
                        opacity: 0.9,
                        whiteSpace: 'nowrap'
                    }}>
                        Full Stack Developer
                    </p>
                    <p style={{
                        marginBottom: '3.5rem',
                        maxWidth: '650px',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        margin: '0 auto 3.5rem' // horizontally center on mobile
                    }}>
                        I am an Information Technology student skilled in building real-world web applications with React.js, Node.js, and Express.js.
                        I focus on creating responsive UIs, efficient APIs, and data-driven dashboards.
                    </p>

                    <div className="hero-btns" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#work"
                            className="btn-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ padding: '0.85rem 2rem' }}
                        >
                            See My Projects <ArrowRight size={18} />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="btn-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ padding: '0.85rem 2rem', animationDelay: '-2s' }}
                        >
                            Get In Touch <Mail size={18} />
                        </motion.a>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid var(--accent)',
                        boxShadow: '0 0 30px var(--accent-glow)',
                        position: 'relative'
                    }}>
                        <img
                            src="/images/profile.jpg"
                            alt="Jayashangav M"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(0%)',
                                transition: 'filter 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
                            onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
