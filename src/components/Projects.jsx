import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Calendar } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Online Learning Platform',
            duration: 'Mar 2025 – Apr 2025',
            description: 'Designed a platform for course enrollment, progress tracking, and dashboards. Implemented REST APIs and role-based access for students and instructors.',
            tech: ['React.js', 'Node.js', 'MySQL', 'Material-UI', 'Axios'],
            github: 'https://github.com/JayashangavM',
            link: '#'
        },
        {
            title: 'Expense Tracker Visualization',
            duration: 'Dec 2024 – Jan 2025',
            description: 'Built an interactive dashboard to track expenses with category-wise and monthly visualizations using Power BI and Excel dynamic filtering.',
            tech: ['Power BI', 'Microsoft Excel', 'Data Analysis'],
            github: 'https://github.com/JayashangavM',
            link: '#'
        },
        {
            title: 'Personal Contact Manager',
            duration: 'Feb 2024 – Mar 2024',
            description: 'A full-stack web app to manage personal contacts with CRUD operations, JWT authentication, and Axios integration for smooth communication.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
            github: 'https://github.com/JayashangavM',
            link: '#'
        }
    ];

    return (
        <section id="work" className="container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2>Notable Projects</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <Folder size={36} style={{ color: 'var(--accent)', opacity: 0.8 }} />
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={18} /></a>
                                    <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><ExternalLink size={18} /></a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', opacity: 0.6 }}>
                                <Calendar size={14} style={{ color: 'var(--accent)' }} />
                                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{project.duration}</span>
                            </div>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                {project.tech.map((t) => (
                                    <span key={t} style={{
                                        fontSize: '0.7rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--accent)',
                                        background: 'rgba(56, 189, 248, 0.05)',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '4px'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
