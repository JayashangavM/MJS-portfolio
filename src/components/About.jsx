import { motion } from 'framer-motion';
import { Award, BookOpen, Code2, GraduationCap } from 'lucide-react';

const About = () => {
    const skills = [
        { category: 'Programming', items: ['Java', 'Python', 'JavaScript'] },
        { category: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'UI Design'] },
        { category: 'Backend', items: ['Node.js', 'Express.js'] },
        { category: 'Data & Databases', items: ['MySQL', 'MongoDB', 'Power BI', 'Excel'] },
        { category: 'Tools', items: ['Git', 'GitHub', 'Canva', 'Jira'] }
    ];

    return (
        <section id="about" className="container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2>Expertise & Background</h2>

                <div className="about-grid">
                    <div>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            I am a passionate <strong style={{ color: 'var(--accent)' }}>Information Technology</strong> student at Kongu Engineering College, Erode.
                            I specialize in Full Stack Development, bridging the gap between complex logic and seamless user experiences.
                        </p>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <GraduationCap size={20} style={{ color: 'var(--accent)' }} />
                                <h4 style={{ fontSize: '1.1rem' }}>Education</h4>
                            </div>
                            <div style={{ paddingLeft: '1.75rem', borderLeft: '1px solid var(--glass-border)' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <h5 style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>B.Tech Information Technology</h5>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Kongu Engineering College | 2023 – 2027</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>CGPA: 7.58</p>
                                </div>
                                <div>
                                    <h5 style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>Higher Secondary Schooling</h5>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Shri Ganga Higher Secondary School | 2023</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>Percentage: 85%</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div className="glass" style={{ padding: '1.5rem' }}>
                                <Award size={22} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Achievements</h4>
                                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Secured first prize in Paper Presentation at Sri Ramakrishna Engineering College.</p>
                            </div>
                            <div className="glass" style={{ padding: '1.5rem' }}>
                                <BookOpen size={22} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Certifications</h4>
                                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Oracle APEX Cloud Developer Certified Professional.</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '2rem', background: 'var(--bg-secondary)', opacity: 0.9 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            <Code2 style={{ color: 'var(--accent)' }} />
                            <h3 style={{ fontSize: '1.2rem' }}>Technical Stack</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {skills.map((group) => (
                                <div key={group.category}>
                                    <span className="label-mono" style={{ fontSize: '0.7rem', marginBottom: '0.5rem', opacity: 0.7 }}>{group.category}</span>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {group.items.map(item => (
                                            <span key={item} style={{
                                                padding: '0.3rem 0.8rem',
                                                fontSize: '0.8rem',
                                                background: 'var(--bg-primary)',
                                                borderRadius: '6px',
                                                border: '1px solid var(--glass-border)',
                                                color: 'var(--text-secondary)'
                                            }}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
