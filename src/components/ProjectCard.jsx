import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tech, github, link, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="glass"
            style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                height: '100%',
                transition: 'all 0.3s ease',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent)' }}>
                    <Github size={40} style={{ opacity: 0.5 }} />
                </div>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-primary)' }}>
                    {github && <a href={github} target="_blank" rel="noreferrer"><Github size={20} /></a>}
                    {link && <a href={link} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>}
                </div>
            </div>

            <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{description}</p>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {tech.map((t) => (
                    <span key={t} style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
