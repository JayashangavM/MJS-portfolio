import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WelcomePopup = ({ show, onClose }) => {
    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 999,
                        }}
                    />

                    {/* Popup Container */}
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        zIndex: 1000,
                        padding: '1.5rem'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="glass"
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                                padding: '2.5rem 2rem',
                                textAlign: 'center',
                                pointerEvents: 'auto',
                                position: 'relative',
                                background: 'var(--glass)',
                                borderColor: 'var(--accent)',
                                boxShadow: '0 0 40px var(--accent-glow)',
                            }}
                        >
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'color 0.2s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
                                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                            >
                                <X size={20} />
                            </button>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                style={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem'
                                }}
                            >
                                👋
                            </motion.div>

                            <h3 className="animate-gradient" style={{
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 700
                            }}>
                                Welcome!
                            </h3>

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.05rem',
                                lineHeight: 1.6,
                                marginBottom: '2rem'
                            }}>
                                Thanks for visiting my portfolio. I'm excited to share my work and projects with you!
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className="btn-primary"
                                style={{
                                    background: 'var(--accent)',
                                    color: 'var(--bg-primary)',
                                    border: 'none',
                                    padding: '0.8rem 2.5rem',
                                    width: '100%',
                                    justifyContent: 'center'
                                }}
                            >
                                Let's Explore
                            </motion.button>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WelcomePopup;
