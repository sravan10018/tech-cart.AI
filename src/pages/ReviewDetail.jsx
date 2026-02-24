import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star,
    CheckCircle2,
    X,
    Youtube,
    Zap,
    Cpu,
    Camera,
    Battery,
    Monitor,
    Volume2,
    Radio,
    Sparkles,
    ShieldAlert,
    BarChart3,
    Activity,
    AlertTriangle,
    Search,
    ArrowRightLeft,
    ChevronLeft,
    ShieldCheck,
    Smartphone,
    Languages,
    Share2,
    Check
} from 'lucide-react';
import { MOBILE_CATALOG, LAPTOP_CATALOG } from '../data/catalog';

const ReviewDetail = () => {
    const { deviceId } = useParams();
    const navigate = useNavigate();
    const [qaQuery, setQaQuery] = useState("");
    const [isAnswering, setIsAnswering] = useState(false);
    const [qaResult, setQaResult] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleShareReview = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const device = useMemo(() => {
        const all = [...MOBILE_CATALOG, ...LAPTOP_CATALOG];
        return all.find(d => d.id === deviceId);
    }, [deviceId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [deviceId]);

    if (!device) {
        return (
            <div className="error-state glass">
                <h2>Device not found</h2>
                <button onClick={() => navigate('/ai-suggestion')}>Back to Discovery</button>
            </div>
        );
    }

    const handleAskAI = () => {
        if (!qaQuery.trim()) return;
        setIsAnswering(true);
        setTimeout(() => {
            const q = qaQuery.toLowerCase();
            let answer = "";
            if (q.includes("battery")) answer = `Analysis: ${device.performance.battery}. It is one of the top performers in our tests.`;
            else if (q.includes("game") || q.includes("gaming")) answer = `Gaming Insights: ${device.performance.gaming}. Thermal management is ${device.performance.heating.toLowerCase()}.`;
            else if (q.includes("camera")) answer = `Optics Review: ${device.performance.camera}. Night shots are particularly ${device.specs.ois ? 'stable thanks to OIS' : 'clear'}.`;
            else if (q.includes("heat") || q.includes("thermal")) answer = `Thermal Profile: ${device.performance.heating}.`;
            else if (q.includes("software")) answer = `OS Experience: Running ${device.specs.androidVersion || 'latest OS'}, the smoothness is ${device.performance.smoothness.toLowerCase()}.`;
            else answer = `${device.verdict} It's highly recommended for ${device.bestFor.toLowerCase()}.`;

            setQaResult(answer);
            setIsAnswering(false);
        }, 800);
    };

    return (
        <div className="review-detail-page">
            <header className="detail-header">
                <button className="back-btn glass" onClick={() => navigate(-1)}>
                    <ChevronLeft size={20} /> Back
                </button>
                <div className="header-title">
                    <h1 className="gradient-text">{device.name}</h1>
                </div>
                <button className={`share-review-btn glass ${copied ? 'copied' : ''}`} onClick={handleShareReview}>
                    {copied ? <Check size={18} /> : <Share2 size={18} />}
                    {copied ? 'Link Copied' : 'Share Review'}
                </button>
            </header>

            <div className="detail-layout">
                {/* 1. OVERVIEW SECTION */}
                <section className="detail-section overview glass">
                    <div className="overview-grid">
                        <div className="device-visual">
                            <motion.img
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                src={device.image}
                                alt={device.name}
                            />
                            <div className="ai-rating-badge">
                                <span className="label">AI RATING</span>
                                <span className="score">{device.rating}<span>/10</span></span>
                            </div>
                        </div>
                        <div className="overview-content">
                            <div className="verdict-card">
                                <h3><Sparkles size={20} color="#818cf8" /> The Verdict</h3>
                                <p>{device.verdict}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. PROS & CONS */}
                <section className="detail-section pros-cons-section">
                    <div className="side-by-side">
                        <div className="pc-card glass pros">
                            <h4 className="pros-title"><CheckCircle2 size={18} /> Highs</h4>
                            <ul>
                                {device.pros.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </div>
                        <div className="pc-card glass cons">
                            <h4 className="cons-title"><AlertTriangle size={18} /> Lows</h4>
                            <ul>
                                {device.cons.map((c, i) => <li key={i}>{c}</li>)}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 5 & 6. SENTIMENT & COMMON PROBLEMS */}
                <section className="detail-grid-row">

                    <div className="detail-card glass common-problems">
                        <label className="section-label"><ShieldAlert size={18} /> Common Complaints</label>
                        <div className="problems-list">
                            {device.complaints.map((prob, i) => (
                                <div key={i} className="problem-node">
                                    <div className="prob-bullet" />
                                    <span>{prob}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4 & 7. REAL-WORLD PERFORMANCE & AI ANALYSIS */}
                <section className="detail-section performance-hub">
                    <h2 className="section-title"><Activity size={24} /> Real-World Technical Analysis</h2>
                    <div className="performance-grid-complex">
                        <div className="perf-box glass">
                            <div className="perf-icon battery"><Battery size={20} /></div>
                            <h5>Endurance Test</h5>
                            <p>{device.performance.battery}</p>
                        </div>
                        <div className="perf-box glass">
                            <div className="perf-icon gaming"><Zap size={20} /></div>
                            <h5>Extreme Gaming</h5>
                            <p>{device.performance.gaming}</p>
                            <span className="thermal-note">Therals: {device.performance.heating}</span>
                        </div>
                        <div className="perf-box glass">
                            <div className="perf-icon camera"><Camera size={20} /></div>
                            <h5>Optics & Video</h5>
                            <p>{device.performance.camera}</p>
                        </div>
                        <div className="perf-box glass">
                            <div className="perf-icon display"><Monitor size={20} /></div>
                            <h5>Display Fidelity</h5>
                            <p>{device.performance.display}</p>
                        </div>
                        <div className="perf-box glass">
                            <div className="perf-icon smoothness"><Smartphone size={20} /></div>
                            <h5>UI Smoothness</h5>
                            <p>{device.performance.smoothness}</p>
                        </div>
                        <div className="perf-box glass">
                            <div className="perf-icon build"><ShieldCheck size={20} /></div>
                            <h5>Build & Software</h5>
                            <p>{device.performance.build}</p>
                        </div>
                    </div>
                </section>

                {/* 3. YOUTUBE RECOMMENDATIONS */}
                <section className="detail-section video-vault">
                    <h2 className="section-title"><Youtube size={24} color="#ef4444" /> Expert Video Library</h2>
                    {Object.entries(device.videoCategories).map(([category, vids]) => (
                        <div key={category} className="video-category-block">
                            <h4 className="cat-title">{category.replace(/([A-Z])/g, ' $1').toUpperCase()}</h4>
                            <div className="video-scroll">
                                {vids.map((v, i) => (
                                    <div key={i} className="vault-card glass">
                                        <div className="video-thumb-wrapper">
                                            <iframe src={v.url} title={v.title} allowFullScreen></iframe>
                                        </div>
                                        <div className="vault-info">
                                            <span className="channel">{v.channel}</span>
                                            <h6>{v.title}</h6>
                                            <span className="views">{v.views} views</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* 8. AI Q&A */}
                <section className="detail-section qa-portal glass">
                    <div className="qa-header">
                        <Languages size={24} color="#818cf8" />
                        <div>
                            <h4>Dynamic AI Review Assistant</h4>
                            <p>Ask specifically about performance benchmarks or user feedback.</p>
                        </div>
                    </div>
                    <div className="portal-input">
                        <Search size={20} color="#94a3b8" />
                        <input
                            placeholder={`Is the ${device.name} good for long-term gaming?`}
                            value={qaQuery}
                            onChange={(e) => setQaQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                        />
                        <button onClick={handleAskAI} disabled={isAnswering}>
                            {isAnswering ? <Sparkles className="spin" size={20} /> : <ArrowRightLeft size={20} />}
                        </button>
                    </div>
                    <AnimatePresence>
                        {qaResult && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="portal-response"
                            >
                                <div className="res-tag">NEURAL SYNTHESIS</div>
                                <p>{qaResult}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .review-detail-page { padding: 2rem; max-width: 1200px; margin: 0 auto; color: white; }
                .detail-header { display: flex; align-items: center; gap: 2rem; margin-bottom: 3rem; }
                .back-btn { padding: 10px 20px; border-radius: 12px; display: flex; align-items: center; gap: 8px; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); }
                .header-title h1 { font-size: 2.5rem; font-weight: 800; }
                .header-title p { color: #94a3b8; letter-spacing: 1px; }
                .share-review-btn { margin-left: auto; padding: 10px 24px; border-radius: 12px; display: flex; align-items: center; gap: 8px; font-weight: 700; cursor: pointer; transition: 0.3s; }
                .share-review-btn:hover:not(.copied) { border-color: #6366f1; color: #818cf8; transform: translateY(-2px); }
                .share-review-btn.copied { background: #10b981; color: white; border-color: #10b981; }

                .detail-layout { display: flex; flex-direction: column; gap: 4rem; }
                .detail-section { padding: 2.5rem; border-radius: 32px; overflow: hidden; }
                
                .overview-grid { display: grid; grid-template-columns: 350px 1fr; gap: 3rem; align-items: center; }
                .device-visual { position: relative; display: flex; justify-content: center; background: rgba(0,0,0,0.2); padding: 2rem; border-radius: 24px; }
                .device-visual img { width: 100%; max-width: 280px; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5)); }
                .ai-rating-badge { position: absolute; top: 1rem; right: 1rem; background: #6366f1; padding: 10px; border-radius: 16px; text-align: center; box-shadow: 0 10px 20px rgba(99,102,241,0.4); }
                .ai-rating-badge .label { display: block; font-size: 0.6rem; font-weight: 900; letter-spacing: 1px; }
                .ai-rating-badge .score { font-size: 1.5rem; font-weight: 900; }
                .ai-rating-badge .score span { font-size: 0.8rem; opacity: 0.6; }

                .verdict-card h3 { display: flex; align-items: center; gap: 10px; font-size: 1.4rem; margin-bottom: 1rem; }
                .verdict-card p { font-size: 1.1rem; line-height: 1.6; color: #cbd5e1; }
                .tags-grid { margin-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem; }
                .tag-group label { display: block; font-size: 0.7rem; font-weight: 900; color: #6366f1; margin-bottom: 0.8rem; letter-spacing: 1px; }
                .tags { display: flex; flex-wrap: wrap; gap: 10px; }
                .tag { padding: 8px 16px; border-radius: 100px; font-size: 0.85rem; font-weight: 700; }
                .tag.best { background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2); }
                .tag.avoid { background: rgba(244, 63, 94, 0.1); color: #f43f5e; border: 1px solid rgba(244, 63, 94, 0.2); }

                .side-by-side { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
                .pc-card { padding: 2rem; border-radius: 24px; }
                .pc-card h4 { display: flex; align-items: center; gap: 10px; text-transform: uppercase; font-size: 0.9rem; margin-bottom: 1.5rem; }
                .pros-title { color: #10b981; }
                .cons-title { color: #f43f5e; }
                .pc-card ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; }
                .pc-card li { font-size: 0.95rem; color: #cbd5e1; position: relative; padding-left: 1.5rem; }
                .pc-card li::before { content: '→'; position: absolute; left: 0; color: inherit; opacity: 0.5; }

                .detail-grid-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: 2rem; }
                .detail-card { padding: 2rem; border-radius: 24px; }
                .section-label { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: #818cf8; margin-bottom: 2rem; }
                
                .sentiment-stats { display: flex; flex-direction: column; gap: 20px; }
                .stat-header { display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; color: #94a3b8; margin-bottom: 8px; }
                .progress-bg { height: 8px; background: rgba(255,255,255,0.05); border-radius: 10px; overflow: hidden; }
                .progress-fill { height: 100%; border-radius: 10px; }
                .progress-fill.pos { background: #10b981; }
                .progress-fill.neu { background: #64748b; }
                .progress-fill.neg { background: #f43f5e; }

                .problems-list { display: flex; flex-direction: column; gap: 12px; }
                .problem-node { display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(244, 63, 94, 0.05); border: 1px solid rgba(244, 63, 94, 0.1); border-radius: 12px; }
                .prob-bullet { width: 6px; height: 6px; border-radius: 50%; background: #f43f5e; }
                .problem-node span { font-size: 0.85rem; color: #fca5a5; font-weight: 600; }

                .section-title { font-size: 1.8rem; font-weight: 800; margin-bottom: 2rem; display: flex; align-items: center; gap: 12px; }
                .performance-grid-complex { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
                .perf-box { padding: 1.5rem; border-radius: 20px; transition: transform 0.3s; }
                .perf-box:hover { transform: translateY(-5px); }
                .perf-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
                .battery { background: rgba(16, 185, 129, 0.1); color: #10b981; }
                .gaming { background: rgba(139, 92, 246, 0.1); color: #8b5cf6; }
                .camera { background: rgba(244, 63, 94, 0.1); color: #f43f5e; }
                .display { background: rgba(14, 165, 233, 0.1); color: #0ea5e3; }
                .smoothness { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
                .build { background: rgba(99, 102, 241, 0.1); color: #6366f1; }
                .perf-box h5 { font-size: 1rem; margin-bottom: 0.5rem; color: #fff; }
                .perf-box p { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; }
                .thermal-note { display: block; margin-top: 10px; font-size: 0.75rem; color: #8b5cf6; font-weight: 700; font-style: italic; }

                .video-category-block { margin-top: 3rem; }
                .cat-title { font-size: 0.8rem; letter-spacing: 2px; color: #818cf8; margin-bottom: 1.5rem; border-left: 3px solid #6366f1; padding-left: 12px; }
                .video-scroll { display: flex; gap: 1.5rem; overflow-x: auto; padding-bottom: 1rem; }
                .vault-card { min-width: 320px; border-radius: 20px; overflow: hidden; }
                .video-thumb-wrapper { aspect-ratio: 16/9; background: #000; }
                .video-thumb-wrapper iframe { width: 100%; height: 100%; border: none; }
                .vault-info { padding: 1.2rem; }
                .channel { font-size: 0.7rem; font-weight: 800; color: #6366f1; text-transform: uppercase; }
                .vault-info h6 { font-size: 1rem; margin: 8px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 2.4rem; }
                .views { font-size: 0.75rem; color: #64748b; }

                .qa-portal { padding: 3rem; background: rgba(99, 102, 241, 0.03); border: 1px solid rgba(99, 102, 241, 0.2); }
                .qa-header { display: flex; gap: 1.5rem; align-items: center; margin-bottom: 2rem; }
                .qa-header h4 { font-size: 1.4rem; }
                .portal-input { display: flex; align-items: center; gap: 1rem; background: rgba(0,0,0,0.3); padding: 10px 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
                .portal-input input { flex: 1; background: transparent; border: none; outline: none; color: white; font-size: 1rem; }
                .portal-input button { background: #6366f1; border: none; width: 44px; height: 44px; border-radius: 12px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
                .portal-input button:hover { background: #4f46e5; transform: scale(1.05); }

                .portal-response { margin-top: 2rem; padding: 2rem; background: rgba(99,102,241,0.05); border-radius: 20px; border-left: 4px solid #6366f1; }
                .res-tag { font-size: 0.65rem; font-weight: 900; color: #818cf8; margin-bottom: 10px; letter-spacing: 1px; }
                .portal-response p { font-size: 1.05rem; line-height: 1.6; color: #cbd5e1; }
                .spin { animation: spin 1s linear infinite; }
                @keyframes spin { to { transform: rotate(360deg); } }

                @media (max-width: 900px) {
                    .overview-grid { grid-template-columns: 1fr; }
                    .side-by-side { grid-template-columns: 1fr; }
                    .detail-grid-row { grid-template-columns: 1fr; }
                }
            `}} />
        </div>
    );
};

export default ReviewDetail;
