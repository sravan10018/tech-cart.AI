import { useState, useMemo, useEffect } from 'react';
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
    ShieldCheck,
    Smartphone,
    Languages,
    Play
} from 'lucide-react';
import { MOBILE_CATALOG, LAPTOP_CATALOG } from '../data/catalog';

const Reviews = () => {
    const allDevices = useMemo(() => [...MOBILE_CATALOG, ...LAPTOP_CATALOG], []);
    const [selectedId, setSelectedId] = useState(allDevices[0]?.id);
    const [qaQuery, setQaQuery] = useState("");
    const [isAnswering, setIsAnswering] = useState(false);
    const [qaResult, setQaResult] = useState(null);

    const device = useMemo(() => allDevices.find(d => d.id === selectedId), [selectedId, allDevices]);

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

    if (!device) return null;

    return (
        <div className="reviews-page-container">
            <div className="header-text">
                <h1 className="gradient-text">tech cart AI Hub</h1>
                <p>Real-world technical reports and AI-synthesized community feedback.</p>
            </div>

            <div className="device-selector-strip glass">
                {allDevices.map(d => (
                    <button
                        key={d.id}
                        className={`selector-pill ${selectedId === d.id ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedId(d.id);
                            setQaResult(null);
                        }}
                    >
                        {d.name}
                    </button>
                ))}
            </div>

            <div className="review-dashboard">
                {/* 1. OVERVIEW & VERDICT */}
                <section className="dash-section overview-pane glass">
                    <div className="dash-grid">
                        <div className="dash-visual">
                            <img src={device.image} alt={device.name} />
                            <div className="dash-rating">
                                <span className="label">AI SCORE</span>
                                <span className="val">{device.rating}</span>
                            </div>
                        </div>
                        <div className="dash-summary">
                            <div className="verdict-bubble">
                                <h3><Sparkles size={20} color="#818cf8" /> Official AI Verdict</h3>
                                <p>{device.verdict}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. PROS & CONS */}
                <section className="dash-section pros-cons-pane">
                    <div className="dual-deck">
                        <div className="deck-card glass">
                            <h4 className="p-head"><CheckCircle2 size={18} /> High Performance Factors</h4>
                            <ul>{device.pros.map((p, i) => <li key={i}>{p}</li>)}</ul>
                        </div>
                        <div className="deck-card glass">
                            <h4 className="c-head"><AlertTriangle size={18} /> Points of Friction</h4>
                            <ul>{device.cons.map((c, i) => <li key={i}>{c}</li>)}</ul>
                        </div>
                    </div>
                </section>

                {/* 4 & 7. PERFORMANCE & ANALYSIS */}
                <section className="dash-section performance-grid">
                    <div className="perf-item-box glass">
                        <Battery size={20} className="col-battery" />
                        <h5>Power</h5>
                        <p>{device.performance.battery}</p>
                    </div>
                    <div className="perf-item-box glass">
                        <Zap size={20} className="col-gaming" />
                        <h5>Gaming</h5>
                        <p>{device.performance.gaming}</p>
                    </div>
                    <div className="perf-item-box glass">
                        <Camera size={20} className="col-camera" />
                        <h5>Camera</h5>
                        <p>{device.performance.camera}</p>
                    </div>
                    <div className="perf-item-box glass">
                        <Monitor size={20} className="col-display" />
                        <h5>Display</h5>
                        <p>{device.performance.display}</p>
                    </div>
                </section>

                {/* 3. VIDEO RECOMMENDATIONS */}
                <section className="dash-section videos-pane">
                    <h3 className="pane-title"><Youtube size={20} color="#ef4444" /> Media Insights</h3>
                    <div className="video-reel">
                        {device.videoCategories.top.map((v, i) => (
                            <div key={i} className="reel-card glass">
                                <div className="reel-thumb">
                                    <iframe src={v.url} title={v.title} allowFullScreen></iframe>
                                </div>
                                <div className="reel-info">
                                    <span className="ch">{v.channel}</span>
                                    <h6>{v.title}</h6>
                                    <span className="vws">{v.views} views</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* 8. AI Q&A */}
                <section className="dash-section qa-pane glass">
                    <div className="qa-input-box">
                        <Languages size={20} color="#818cf8" />
                        <input
                            placeholder={`Ask AI about the ${device.name}...`}
                            value={qaQuery}
                            onChange={(e) => setQaQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                        />
                        <button onClick={handleAskAI} disabled={isAnswering}>
                            {isAnswering ? "Analysing..." : "Consult AI"}
                        </button>
                    </div>
                    <AnimatePresence>
                        {qaResult && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="qa-reply">
                                <p>{qaResult}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .reviews-page-container { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
                .device-selector-strip { display: flex; gap: 10px; padding: 10px; border-radius: 100px; margin-bottom: 3rem; overflow-x: auto; scrollbar-width: none; }
                .device-selector-strip::-webkit-scrollbar { display: none; }
                .selector-pill { padding: 10px 24px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.05); background: transparent; color: #94a3b8; cursor: pointer; white-space: nowrap; font-weight: 700; transition: 0.3s; }
                .selector-pill.active { background: #6366f1; color: white; border-color: #6366f1; box-shadow: 0 10px 20px rgba(99,102,241,0.3); }
                .selector-pill:hover:not(.active) { background: rgba(255,255,255,0.05); }

                .review-dashboard { display: flex; flex-direction: column; gap: 3rem; }
                .dash-section { border-radius: 32px; overflow: hidden; }
                
                .overview-pane { padding: 3rem; }
                .dash-grid { display: grid; grid-template-columns: 280px 1fr; gap: 3rem; align-items: center; }
                .dash-visual { position: relative; background: rgba(0,0,0,0.2); padding: 2rem; border-radius: 20px; }
                .dash-visual img { width: 100%; border-radius: 12px; }
                .dash-rating { position: absolute; top: 1rem; right: 1rem; background: #6366f1; padding: 10px; border-radius: 12px; text-align: center; }
                .dash-rating .label { display: block; font-size: 0.55rem; font-weight: 900; }
                .dash-rating .val { font-size: 1.2rem; font-weight: 900; }

                .verdict-bubble h3 { display: flex; align-items: center; gap: 10px; font-size: 1.3rem; margin-bottom: 1rem; }
                .verdict-bubble p { font-size: 1.1rem; color: #cbd5e1; line-height: 1.5; }
                .dash-tags { margin-top: 2rem; display: flex; flex-direction: column; gap: 15px; }
                .tag-row label { display: block; font-size: 0.65rem; font-weight: 900; color: #6366f1; margin-bottom: 8px; letter-spacing: 1px; }
                .tag-p { padding: 8px 16px; border-radius: 10px; font-size: 0.85rem; font-weight: 700; display: inline-block; }
                .tag-p.postive { background: rgba(16, 185, 129, 0.1); color: #10b981; }
                .tag-p.caution { background: rgba(244, 63, 94, 0.1); color: #f43f5e; }

                .dual-deck { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
                .deck-card { padding: 2rem; border-radius: 24px; }
                .deck-card h4 { display: flex; align-items: center; gap: 10px; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 1.5rem; }
                .p-head { color: #10b981; }
                .c-head { color: #f43f5e; }
                .deck-card ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
                .deck-card li { font-size: 0.9rem; color: #94a3b8; position: relative; padding-left: 1.2rem; }
                .deck-card li::before { content: '•'; position: absolute; left: 0; color: inherit; }

                .performance-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
                .perf-item-box { padding: 1.5rem; border-radius: 20px; }
                .perf-item-box h5 { margin: 10px 0 5px; font-size: 0.9rem; }
                .perf-item-box p { font-size: 0.8rem; color: #64748b; line-height: 1.4; }
                .col-battery { color: #10b981; } .col-gaming { color: #8b5cf6; } .col-camera { color: #f43f5e; } .col-display { color: #0ea5e3; }

                .pane-title { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; }
                .video-reel { display: flex; gap: 1.5rem; overflow-x: auto; padding-bottom: 1rem; }
                .reel-card { min-width: 300px; border-radius: 20px; overflow: hidden; }
                .reel-thumb { aspect-ratio: 16/9; background: #000; }
                .reel-thumb iframe { width: 100%; height: 100%; border: none; }
                .reel-info { padding: 1rem; }
                .ch { font-size: 0.65rem; color: #6366f1; font-weight: 800; }
                .reel-info h6 { font-size: 0.9rem; margin: 5px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 2.6rem; }
                .vws { font-size: 0.7rem; color: #64748b; }

                .sentiment-pane { padding: 2rem; }
                .sent-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; color: #818cf8; }
                .sent-bar-complex { height: 12px; display: flex; border-radius: 100px; overflow: hidden; background: rgba(0,0,0,0.3); }
                .bar-seg { height: 100%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 900; }
                .bar-seg span { display: none; }
                .bar-seg:hover span { display: block; }
                .bar-seg.pos { background: #10b981; }
                .bar-seg.neu { background: #64748b; }
                .bar-seg.neg { background: #f43f5e; }

                .qa-pane { padding: 2rem; }
                .qa-input-box { display: flex; gap: 15px; align-items: center; background: rgba(0,0,0,0.3); padding: 8px 15px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); }
                .qa-input-box input { flex: 1; background: transparent; border: none; outline: none; color: white; font-size: 0.95rem; }
                .qa-input-box button { background: #6366f1; border: none; color: white; padding: 10px 20px; border-radius: 10px; font-weight: 700; cursor: pointer; transition: 0.3s; }
                .qa-input-box button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(99,102,241,0.4); }
                .qa-reply { margin-top: 1.5rem; padding: 1.5rem; background: rgba(99,102,241,0.05); border-radius: 15px; border-left: 4px solid #6366f1; }

                @media (max-width: 800px) {
                    .dash-grid { grid-template-columns: 1fr; }
                    .dual-deck { grid-template-columns: 1fr; }
                }
            `}} />
        </div>
    );
};

export default Reviews;
