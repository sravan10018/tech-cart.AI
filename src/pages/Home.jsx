import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, BarChart3, Star, Zap, ArrowRight } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <span className="badge">Next-Gen Mobile Discovery</span>
                    <h1>Find the Best <span className="gradient-text">Mobile & Laptop</span> with tech cart AI</h1>
                    <p>Smart recommendations. Real reviews. Honest comparisons.</p>
                    <div className="hero-actions">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                            onClick={() => navigate('/ai-suggestion')}
                        >
                            Try AI Suggestion <Sparkles size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary"
                            onClick={() => navigate('/comparison')}
                        >
                            Compare Devices
                        </motion.button>
                    </div>
                </motion.div>

                <div className="hero-visual">
                    <motion.div
                        animate={{
                            rotateY: [0, 10, 0, -10, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="mobile-preview"
                    >
                        {/* Abstract Mobile Mockup */}
                        <div className="mock-frame">
                            <div className="mock-screen">
                                <div className="mock-camera"></div>
                                <div className="mock-inner-ui">
                                    <div className="mock-line-long"></div>
                                    <div className="mock-line-short"></div>
                                    <div className="mock-chart"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="features grid-container">
                <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="card feature-nav-card"
                    onClick={() => navigate('/ai-suggestion')}
                >
                    <div className="icon-box purple"><Sparkles /></div>
                    <h3>AI Recommendations</h3>
                    <p>Personalized suggestions based on your usage patterns and budget.</p>
                    <div className="card-footer">Explore Tools <ArrowRight size={14} /></div>
                </motion.div>

                <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="card feature-nav-card"
                    onClick={() => navigate('/comparison')}
                >
                    <div className="icon-box blue"><BarChart3 /></div>
                    <h3>Real Benchmarks</h3>
                    <p>Direct comparison of performance metrics and camera scores.</p>
                    <div className="card-footer">View Matrix <ArrowRight size={14} /></div>
                </motion.div>

                <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="card feature-nav-card"
                    onClick={() => navigate('/reviews')}
                >
                    <div className="icon-box cyan"><Star /></div>
                    <h3>Expert Reviews</h3>
                    <p>Consolidated insights from top tech reviewers and real users.</p>
                    <div className="card-footer">Read Reports <ArrowRight size={14} /></div>
                </motion.div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .home-container { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
        .hero { display: flex; align-items: center; gap: 4rem; min-height: 70vh; }
        .hero-content { flex: 1; }
        .hero-visual { flex: 1; display: flex; justify-content: center; perspective: 1000px; }
        .badge { background: rgba(99, 102, 241, 0.1); color: var(--primary); padding: 8px 16px; border-radius: 100px; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; margin-bottom: 24px; display: inline-block; border: 1px solid rgba(99, 102, 241, 0.2); }
        .hero h1 { font-size: 4.5rem; line-height: 1.1; margin-bottom: 1.5rem; }
        .hero p { font-size: 1.25rem; color: var(--text-dim); margin-bottom: 2.5rem; max-width: 500px; }
        .hero-actions { display: flex; gap: 1rem; }
        .btn-secondary { background: var(--surface); color: white; border: 1px solid var(--border); padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .btn-secondary:hover { background: rgba(255, 255, 255, 0.1); }
        
        .mock-frame { width: 280px; height: 560px; background: #1e293b; border-radius: 40px; border: 8px solid #334155; position: relative; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5); }
        .mock-screen { width: 100%; height: 100%; border-radius: 32px; overflow: hidden; background: #0f172a; padding: 20px; display: flex; flex-direction: column; gap: 20px; }
        .mock-camera { width: 60px; height: 4px; background: #334155; border-radius: 10px; margin: 0 auto; }
        .mock-inner-ui { display: flex; flex-direction: column; gap: 12px; }
        .mock-line-long { width: 100%; height: 12px; background: #334155; border-radius: 6px; }
        .mock-line-short { width: 60%; height: 12px; background: #334155; border-radius: 6px; }
        .mock-chart { width: 100%; height: 140px; background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2)); border-radius: 12px; border: 1px dashed var(--primary); margin-top: 20px; }
        
        .icon-box { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .icon-box.purple { background: rgba(168, 85, 247, 0.2); color: #a855f7; }
        .icon-box.blue { background: rgba(99, 102, 241, 0.2); color: #6366f1; }
        .icon-box.cyan { background: rgba(6, 182, 212, 0.2); color: #06b6d4; }
        
        .feature-nav-card { cursor: pointer; transition: all 0.3s; position: relative; border: 1px solid rgba(255,255,255,0.05); }
        .feature-nav-card:hover { border-color: rgba(99,102,241,0.4); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .feature-nav-card:hover .icon-box { transform: scale(1.1) rotate(5deg); transition: 0.3s; }
        .feature-nav-card h3 { transition: color 0.3s; }
        .feature-nav-card:hover h3 { color: var(--primary); }
        
        .card-footer { margin-top: 2rem; display: flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 800; color: #818cf8; opacity: 0.7; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem; }
        .feature-nav-card:hover .card-footer { opacity: 1; color: #6366f1; }

        @media (max-width: 968px) {
          .hero { flex-direction: column; text-align: center; padding-top: 2rem; }
          .hero h1 { font-size: 3rem; }
          .hero-actions { justify-content: center; }
          .hero p { margin-left: auto; margin-right: auto; }
        }
      `}} />
        </div>
    );
};

export default Home;
