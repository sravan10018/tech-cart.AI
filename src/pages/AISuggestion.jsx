import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useComparison } from '../context/ComparisonContext';
import {
    Sparkles,
    Cpu,
    Battery,
    Zap,
    ShieldAlert,
    Smartphone,
    Laptop,
    HardDrive,
    Monitor,
    MonitorPlay,
    ChevronDown,
    SlidersHorizontal,
    Star,
    Camera,
    ShieldCheck,
    Radio,
    Search,
    CheckCircle2,
    ChevronUp,
    Sun,
    Hammer,
    Plus,
    ArrowRightLeft,
    X,
    Youtube,
    History,
    Volume2,
    Nfc,
    Fingerprint,
    Wifi,
    Settings,
    Languages,
    Activity,
    BarChart3,
    AlertTriangle,
    Users,
    Tag,
    Gamepad2,
    Trophy
} from 'lucide-react';

import { MOBILE_CATALOG, LAPTOP_CATALOG } from '../data/catalog';

const AISuggestion = () => {
    const navigate = useNavigate();
    const { comparisonList, addToComparison, removeItem } = useComparison();
    const resultsRef = useRef(null);

    const [activeMode, setActiveMode] = useState("Mobile");
    const [mobileBudget, setMobileBudget] = useState(0);
    const [laptopBudget, setLaptopBudget] = useState(0);
    const currentBudget = activeMode === "Mobile" ? mobileBudget : laptopBudget;

    const setBudget = (val) => {
        if (activeMode === "Mobile") setMobileBudget(val);
        else setLaptopBudget(val);
    };

    const [step1Solved, setStep1Solved] = useState(true);
    const [toast, setToast] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);

    // ADVANCED REFINEMENT STATES
    const [usageIntent, setUsageIntent] = useState("Any");
    const [sortBy, setSortBy] = useState("best"); // best, price_asc, price_desc, rating
    const [isRefinementExpanded, setIsRefinementExpanded] = useState(false);
    const [advMobile, setAdvMobile] = useState({
        displayType: "Any",
        brightness: 0,
        refreshRate: "Any",
        storage: "Any",
        batteryCapacity: 0,
        chargingSpeed: 0,
        wirelessCharging: false,
        cameraMP: 0,
        ois: false,
        videoQuality: "Any",
        stereoSpeakers: false,
        dolbyAtmos: false,
        buildMaterial: "Any",
        wifi6: false,
        nfc: false,
        fiveG: "Any",
        ipRating: "Any",
        bluetooth: "Any",
        fingerprintType: "Any",
        faceUnlock: false,
        androidVersion: "Any"
    });

    const [advLaptop, setAdvLaptop] = useState({
        processor: "Any",
        gpu: "Any",
        ram: "Any",
        storage: "Any",
        displayType: "Any",
        batteryLife: "Any",
        weight: "Any"
    });

    // Q&A STATES
    const [qaQuery, setQaQuery] = useState("");
    const [isAnswering, setIsAnswering] = useState(false);
    const [qaResult, setQaResult] = useState(null);

    const handleAskAI = (device) => {
        if (!qaQuery.trim()) return;
        setIsAnswering(true);

        setTimeout(() => {
            const q = qaQuery.toLowerCase();
            let answer = "";

            if (q.includes("battery") || q.includes("charging") || q.includes("charge") || q.includes("day") || q.includes("last")) {
                answer = `Specifically, ${device.performance?.battery || 'it offers great battery life'}. ${device.pros?.find(p => p.toLowerCase().includes('battery')) || ''}`;
            } else if (q.includes("game") || q.includes("gaming") || q.includes("performance") || q.includes("fast")) {
                answer = `Gaming Analysis: ${device.performance?.gaming || 'it performs exceptionally well'}. ${device.category === 'Gaming' ? 'As a gaming-tuned device, it remains stable under load.' : 'It handles most titles but might throttle.'}`;
            } else if (q.includes("camera") || q.includes("photo") || q.includes("video") || q.includes("night")) {
                answer = `Photography Insight: ${device.performance?.camera || 'it has a flagship camera system'}. ${device.pros?.find(p => p.toLowerCase().includes('camera')) || ''}`;
            } else if (q.includes("bad") || q.includes("avoid") || q.includes("worst") || q.includes("problem")) {
                answer = `Truth Check: ${device.whoAvoid}. Note common complaints: ${device.complaints?.join(', ')}.`;
            } else if (q.includes("worth") || q.includes("price") || q.includes("buy")) {
                answer = `${device.verdict} It's the best for ${device.bestFor.toLowerCase()}.`;
            } else {
                answer = `Review Hub Summary: ${device.performance?.smoothness || 'the experience is very fluid'}. Recommended specifically for ${device.bestFor.toLowerCase()}.`;
            }

            setQaResult(answer);
            setIsAnswering(false);
        }, 800);
    };

    // SEARCH & HISTORY logic preserved...
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [overrideItem, setOverrideItem] = useState(null);
    const [recentSearches, setRecentSearches] = useState(() => {
        const saved = localStorage.getItem('tech_cart_recent_searches');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('tech_cart_recent_searches', JSON.stringify(recentSearches));
    }, [recentSearches]);

    const highlightMatch = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, i) => part.toLowerCase() === query.toLowerCase() ? <span key={i} className="highlighted">{part}</span> : part);
    };

    const searchSuggestions = useMemo(() => {
        if (searchQuery.length < 2) return [];
        return [...MOBILE_CATALOG, ...LAPTOP_CATALOG].filter(item =>
            (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.brand.toLowerCase().includes(searchQuery.toLowerCase())) &&
            Number(item.price) <= (item.type === 'mobile' ? mobileBudget : laptopBudget)
        ).slice(0, 5);
    }, [searchQuery, mobileBudget, laptopBudget]);

    // EFFECT: Real-time neural recalculation trigger
    useEffect(() => {
        if (!step1Solved) return;
        setIsCalculating(true);
        const timer = setTimeout(() => setIsCalculating(false), 600);
        return () => clearTimeout(timer);
    }, [activeMode, mobileBudget, laptopBudget, usageIntent, advMobile, step1Solved]);

    const handleSearchSelect = (item) => {
        setSearchQuery(""); setIsSearchFocused(false);
        setActiveMode(item.type === 'mobile' ? "Mobile" : "Laptop");
        setBudget(Math.round(Number(item.price))); setStep1Solved(true); setOverrideItem(item);
        setRecentSearches(prev => [item, ...prev.filter(i => i.id !== item.id)].slice(0, 5));
        setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    };

    const handleQuickPick = (type) => {
        setOverrideItem(null);
        setIsCalculating(true);

        setTimeout(() => {
            switch (type) {
                case 'under10k':
                    setBudget(10000);
                    setUsageIntent("Any");
                    setSortBy("rating"); // As requested: highest rated within budget
                    break;
                case 'under20k':
                    setBudget(20000);
                    setUsageIntent("Any");
                    setSortBy("rating"); // As requested: highest rated within budget
                    break;
                case 'gaming':
                    setUsageIntent(activeMode === "Mobile" ? "Gaming" : "Gaming");
                    setSortBy("best"); // Uses AI match score which weights processor (+20)
                    if (activeMode === "Mobile" && mobileBudget < 30000) setMobileBudget(50000);
                    if (activeMode === "Laptop" && laptopBudget < 80000) setLaptopBudget(150000);
                    break;
                case 'camera':
                    if (activeMode === "Mobile") {
                        setUsageIntent("Photography");
                        setSortBy("best"); // Uses AI match score which weights camera features
                        if (mobileBudget < 40000) setMobileBudget(80000);
                    }
                    break;
                case 'battery':
                    if (activeMode === "Mobile") {
                        setAdvMobile(prev => ({ ...prev, batteryCapacity: 5000 }));
                        setSortBy("best"); // AI Match weights battery improvements
                    } else {
                        setAdvLaptop(prev => ({ ...prev, batteryLife: "15 Hours" }));
                        setSortBy("best");
                    }
                    break;
                default: break;
            }
            setIsCalculating(false);
            resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 600);
    };

    const recommendations = useMemo(() => {
        const activeCatalog = activeMode === "Mobile" ? MOBILE_CATALOG : LAPTOP_CATALOG;

        // 1. GLOBAL BUDGET CEILING (Rule #1)
        let sourcePool = overrideItem ? [overrideItem] : activeCatalog;
        const validDevices = sourcePool.filter(item => item.price <= currentBudget);

        return validDevices
            .map(item => {
                const matchReasons = [];
                let score = 40; // Base budget match
                matchReasons.push("Budget match");

                if (activeMode === "Mobile") {
                    // --- MOBILE SPECIFIC ENGINE ---
                    if (usageIntent !== "Any" && item.category === usageIntent) {
                        score += 10;
                        matchReasons.push(`Optimized for ${usageIntent}`);
                    }

                    const proc = item.specs.processor.toLowerCase();
                    if (["Gaming", "Photography", "Work"].includes(usageIntent)) {
                        if (proc.includes("gen 3") || proc.includes("a18 pro") || proc.includes("gen 2")) {
                            score += 20;
                            matchReasons.push("Flagship performance tier");
                        }
                    }

                    if (advMobile.batteryCapacity > 0 && item.specs.batteryCapacity >= advMobile.batteryCapacity) {
                        score += 15;
                        matchReasons.push(`${item.specs.batteryCapacity}mAh Battery match`);
                    }
                    if (advMobile.cameraMP > 0 && item.specs.cameraMP >= advMobile.cameraMP) {
                        score += 15;
                        matchReasons.push(`${item.specs.cameraMP}MP Camera match`);
                    }
                    if (advMobile.displayType !== "Any" && item.specs.displayType.toLowerCase().includes(advMobile.displayType.toLowerCase())) {
                        score += 5;
                        matchReasons.push(`${advMobile.displayType} Display match`);
                    }
                    if (advMobile.fiveG !== "Any" && item.specs.fiveG) {
                        score += 5;
                        matchReasons.push("5G Network Ready");
                    }
                    if (advMobile.ipRating !== "Any" && item.specs.ip.includes(advMobile.ipRating)) {
                        score += 5;
                        matchReasons.push(`${advMobile.ipRating} Protection match`);
                    }
                } else {
                    // --- LAPTOP SPECIFIC ENGINE (Strictly Opt-in) ---
                    if (usageIntent !== "Any" && (item.category === usageIntent || (usageIntent === "Coding" && item.category === "Office"))) {
                        score += 10;
                        matchReasons.push(`Best for ${usageIntent}`);
                    }

                    const proc = item.specs.processor.toLowerCase();
                    if (advLaptop.processor !== "Any" && proc.includes(advLaptop.processor.toLowerCase())) {
                        score += 20;
                        matchReasons.push(`${advLaptop.processor} Performance match`);
                    }

                    if (advLaptop.gpu !== "Any" && item.specs.gpu.toLowerCase().includes(advLaptop.gpu.toLowerCase())) {
                        score += 15;
                        matchReasons.push(`${advLaptop.gpu} GPU match`);
                    }

                    if (advLaptop.ram !== "Any" && item.specs.ram.includes(advLaptop.ram)) {
                        score += 10;
                        matchReasons.push(`${advLaptop.ram} RAM match`);
                    }

                    if (advLaptop.storage !== "Any" && item.specs.storage.includes(advLaptop.storage)) {
                        score += 5;
                        matchReasons.push(`${advLaptop.storage} SSD match`);
                    }

                    if (advLaptop.displayType !== "Any" && item.specs.displayType.includes(advLaptop.displayType)) {
                        score += 15;
                        matchReasons.push(`${advLaptop.displayType} Panel match`);
                    }

                    if (advLaptop.weight !== "Any") {
                        const w = parseFloat(item.specs.weight);
                        const target = parseFloat(advLaptop.weight);
                        if (w <= target) {
                            score += 10;
                            matchReasons.push(`Lightweight: ${item.specs.weight}`);
                        }
                    }

                    if (advLaptop.batteryLife !== "Any") {
                        const life = parseInt(item.specs.battery);
                        const target = parseInt(advLaptop.batteryLife);
                        if (life >= target) {
                            score += 10;
                            matchReasons.push("Battery endurance match");
                        }
                    }
                }

                return { ...item, matchScore: Math.min(Math.round(score), 99), matchReasons: [...new Set(matchReasons)].slice(0, 3) };
            })
            .sort((a, b) => {
                if (sortBy === "best") return b.matchScore - a.matchScore;
                if (sortBy === "price_asc") return a.price - b.price;
                if (sortBy === "price_desc") return b.price - a.price;
                if (sortBy === "rating") return b.rating - a.rating;
                return 0;
            });
    }, [activeMode, mobileBudget, laptopBudget, currentBudget, step1Solved, overrideItem, usageIntent, advMobile, advLaptop, sortBy]);

    const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

    return (
        <div className="discovery-container">
            <AnimatePresence>
                {toast && (
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className={`toast-popup ${toast.type}`}>
                        {toast.type === 'success' ? <CheckCircle2 size={18} /> : <ShieldAlert size={18} />}
                        <span>{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="discovery-header">
                <h1 className="neural-gradient">tech cart AI</h1>
                <p>Architectural discovery with advanced precision filters.</p>
            </div>

            <div className="discovery-wrapper">
                <motion.div className="neural-card glass" layout>

                    {/* SEARCH LAYER */}
                    <div className="search-layer">
                        <div className={`search-box ${isSearchFocused ? 'focused' : ''}`}>
                            <Search className="search-icon" size={20} />
                            <input type="text" placeholder="Search device for instant reviews..." value={searchQuery} onFocus={() => setIsSearchFocused(true)} onChange={(e) => { setSearchQuery(e.target.value); setOverrideItem(null); }} />
                            {searchQuery && <X className="clear-search" size={18} onClick={() => setSearchQuery("")} />}
                        </div>
                        <AnimatePresence>
                            {isSearchFocused && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="search-suggestions-panel glass">
                                    {searchQuery.length < 2 && recentSearches.length > 0 && (
                                        <div className="recent-section">
                                            <div className="section-title"><History size={14} /> <span>Recent Discoveries</span> <button className="clear-all" onClick={() => setRecentSearches([])}>Clear</button></div>
                                            {recentSearches.filter(i => Number(i.price) <= (i.type === 'mobile' ? mobileBudget : laptopBudget)).map(item => <div key={item.id} className="suggestion-node" onClick={() => handleSearchSelect(item)}>
                                                <div className="s-img"><img src={item.image} alt="" /></div>
                                                <div className="s-info"><h5>{item.name}</h5><span>{item.brand}</span></div>
                                            </div>)}
                                        </div>
                                    )}
                                    {searchQuery.length >= 2 && searchSuggestions.map(item => (
                                        <div key={item.id} className="suggestion-node" onClick={() => handleSearchSelect(item)}>
                                            <div className="s-img"><img src={item.image} alt="" /></div>
                                            <div className="s-info"><h5>{highlightMatch(item.name, searchQuery)}</h5><span>{highlightMatch(item.brand, searchQuery)}</span></div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="switch-zone">
                        <div className="switch-track">
                            <motion.div className="switch-thumb" animate={{ x: activeMode === "Mobile" ? 0 : '100%' }} />
                            <button className={`switch-btn ${activeMode === "Mobile" ? 'active' : ''}`} onClick={() => {
                                setActiveMode("Mobile"); setOverrideItem(null); setStep1Solved(true);
                            }}><Smartphone size={16} /> Mobile</button>
                            <button className={`switch-btn ${activeMode === "Laptop" ? 'active' : ''}`} onClick={() => {
                                setActiveMode("Laptop"); setOverrideItem(null); setStep1Solved(true);
                            }}><Laptop size={16} /> Laptop</button>
                        </div>
                    </div>

                    <section className="neural-section">
                        <div className="section-head"><span className="tag">Primary Filter</span><h3>Set Your Maximum Budget</h3></div>
                        <div className="range-container">
                            <input
                                type="range"
                                min={0}
                                max={activeMode === "Mobile" ? 150000 : 400000}
                                step={1000}
                                value={currentBudget}
                                onChange={(e) => {
                                    const newBudget = Math.round(Number(e.target.value));
                                    if (activeMode === "Mobile") {
                                        setMobileBudget(newBudget);
                                    } else {
                                        setLaptopBudget(newBudget);
                                    }
                                    setOverrideItem(null);
                                }}
                                className="neural-range"
                            />
                            <div className="budget-val">{formatINR(currentBudget)}</div>
                        </div>
                        <p className="budget-hint">Showing all {activeMode.toLowerCase()}s under {formatINR(currentBudget)}</p>
                    </section>

                    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="neural-section devider">
                        <div className="section-head"><span className="tag">Optimization</span><h3>Refine by Usage Intent</h3></div>
                        <div className="chip-stack">
                            {["Any", ...(activeMode === "Mobile" ? ["Gaming", "Photography", "Work", "Casual"] : ["Coding", "Design", "Office", "Gaming"])].map(cat => (
                                <button key={cat} className={`neural-chip ${usageIntent === cat ? 'active' : ''}`} onClick={() => { setUsageIntent(cat); setOverrideItem(null); }}>{cat}</button>
                            ))}
                        </div>
                    </motion.section>

                    {activeMode === "Mobile" && (
                        <section className="neural-section devider">
                            <button className="refinement-toggle" onClick={() => setIsRefinementExpanded(!isRefinementExpanded)}>
                                <div className="toggle-left"><SlidersHorizontal size={18} /> <span>Advanced Refinement</span></div>
                                {isRefinementExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>

                            <AnimatePresence>
                                {isRefinementExpanded && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="refinement-container">

                                        {/* DISPLAY & STORAGE (Existing) */}
                                        <div className="refinement-category">
                                            <h4>Visuals & Core</h4>
                                            <div className="refinement-grid">
                                                <div className="filter-group">
                                                    <label><Monitor size={14} /> Display Type</label>
                                                    <div className="filter-chips">
                                                        {["Any", "LCD", "AMOLED", "OLED", "LTPO AMOLED"].map(t => (
                                                            <button key={t} className={`f-chip ${advMobile.displayType === t ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, displayType: t })}>{t}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group slider-stabilizer">
                                                    <label><Sun size={14} /> Peak Brightness</label>
                                                    <div className="value-bubble">{advMobile.brightness === 0 ? "Any" : `${advMobile.brightness} Nits`}</div>
                                                    <input type="range" min="0" max="3000" step="100" value={advMobile.brightness} onChange={(e) => setAdvMobile({ ...advMobile, brightness: Number(e.target.value) })} className="neural-range" />
                                                </div>
                                                <div className="filter-group">
                                                    <label><Zap size={14} /> Refresh Rate</label>
                                                    <div className="filter-chips">
                                                        {["Any", "60Hz", "90Hz", "120Hz", "144Hz"].map(r => (
                                                            <button key={r} className={`f-chip ${advMobile.refreshRate === r ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, refreshRate: r })}>{r}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label><HardDrive size={14} /> Storage</label>
                                                    <div className="filter-chips">
                                                        {["Any", "128GB", "256GB", "512GB", "1TB"].map(s => (
                                                            <button key={s} className={`f-chip ${advMobile.storage === s ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, storage: s })}>{s}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* BATTERY & CHARGING (New) */}
                                        <div className="refinement-category">
                                            <h4><Battery size={16} /> Battery & Charging</h4>
                                            <div className="refinement-grid">
                                                <div className="filter-group slider-stabilizer">
                                                    <label>Capacity</label>
                                                    <div className="value-bubble">{advMobile.batteryCapacity === 0 ? "Any" : `${advMobile.batteryCapacity}mAh`}</div>
                                                    <input type="range" min="0" max="7000" step="100" value={advMobile.batteryCapacity} onChange={(e) => setAdvMobile({ ...advMobile, batteryCapacity: Number(e.target.value) })} className="neural-range" />
                                                </div>
                                                <div className="filter-group">
                                                    <label>Charging Speed</label>
                                                    <div className="filter-chips">
                                                        {["Any", 25, 45, 67, 120].map(w => (
                                                            <button key={w} className={`f-chip ${advMobile.chargingSpeed === w || (w === "Any" && advMobile.chargingSpeed === 0) ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, chargingSpeed: w === "Any" ? 0 : w })}>{w}{w === "Any" ? "" : "W+"}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label>Wireless Charging</label>
                                                    <button className={`toggle-btn ${advMobile.wirelessCharging ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, wirelessCharging: !advMobile.wirelessCharging })}>
                                                        {advMobile.wirelessCharging ? "Enabled" : "Disabled"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CAMERA ENHANCEMENTS (New) */}
                                        <div className="refinement-category">
                                            <h4><Camera size={16} /> Camera Architecture</h4>
                                            <div className="refinement-grid">
                                                <div className="filter-group slider-stabilizer">
                                                    <label>Main Camera</label>
                                                    <div className="value-bubble">{advMobile.cameraMP === 0 ? "Any" : `${advMobile.cameraMP}MP+`}</div>
                                                    <input type="range" min="0" max="200" step="4" value={advMobile.cameraMP} onChange={(e) => setAdvMobile({ ...advMobile, cameraMP: Number(e.target.value) })} className="neural-range" />
                                                </div>
                                                <div className="filter-group">
                                                    <label>Video Quality</label>
                                                    <div className="filter-chips">
                                                        {["Any", "1080p", "4K", "8K"].map(q => (
                                                            <button key={q} className={`f-chip ${advMobile.videoQuality === q ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, videoQuality: q })}>{q}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label>OIS Stabilization</label>
                                                    <button className={`toggle-btn ${advMobile.ois ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, ois: !advMobile.ois })}>
                                                        {advMobile.ois ? "Required" : "Not Essential"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* AUDIO & BUILD (New) */}
                                        <div className="refinement-category">
                                            <h4><Volume2 size={16} /> Audio & Build</h4>
                                            <div className="refinement-grid">
                                                <div className="filter-group">
                                                    <label>Stereo Speakers</label>
                                                    <button className={`toggle-btn ${advMobile.stereoSpeakers ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, stereoSpeakers: !advMobile.stereoSpeakers })}>
                                                        {advMobile.stereoSpeakers ? "Yes" : "No"}
                                                    </button>
                                                </div>
                                                <div className="filter-group">
                                                    <label>Dolby Atmos</label>
                                                    <button className={`toggle-btn ${advMobile.dolbyAtmos ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, dolbyAtmos: !advMobile.dolbyAtmos })}>
                                                        {advMobile.dolbyAtmos ? "Required" : "None"}
                                                    </button>
                                                </div>
                                                <div className="filter-group">
                                                    <label>Build Material</label>
                                                    <div className="filter-chips">
                                                        {["Any", "Plastic", "Glass", "Metal", "Titanium"].map(m => (
                                                            <button key={m} className={`f-chip ${advMobile.buildMaterial === m ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, buildMaterial: m })}>{m}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CONNECTIVITY (New) */}
                                        <div className="refinement-category">
                                            <h4><Wifi size={16} /> Connectivity</h4>
                                            <div className="refinement-grid">
                                                <div className="filter-group">
                                                    <label>WiFi 6/6E</label>
                                                    <button className={`toggle-btn ${advMobile.wifi6 ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, wifi6: !advMobile.wifi6 })}>
                                                        {advMobile.wifi6 ? "Required" : "Standard"}
                                                    </button>
                                                </div>
                                                <div className="filter-group">
                                                    <label>NFC Support</label>
                                                    <button className={`toggle-btn ${advMobile.nfc ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, nfc: !advMobile.nfc })}>
                                                        {advMobile.nfc ? "Yes" : "No"}
                                                    </button>
                                                </div>
                                                <div className="filter-group">
                                                    <label>Bluetooth</label>
                                                    <div className="filter-chips">
                                                        {["Any", "5.0", "5.2", "5.3", "5.4"].map(b => (
                                                            <button key={b} className={`f-chip ${advMobile.bluetooth === b ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, bluetooth: b })}>{b === "Any" ? "Any" : `v${b}+`}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label>IP Rating</label>
                                                    <div className="filter-chips">
                                                        {["Any", "IP54", "IP65", "IP67", "IP68"].map(ip => (
                                                            <button key={ip} className={`f-chip ${advMobile.ipRating === ip ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, ipRating: ip })}>{ip}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label>Connectivity</label>
                                                    <div className="filter-chips">
                                                        {["Any", "5G Required"].map(c => (
                                                            <button key={c} className={`f-chip ${advMobile.fiveG === c || (c === "Any" && advMobile.fiveG === "Any") ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, fiveG: c })}>{c}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* SECURITY & SOFTWARE (New) */}
                                        <div className="refinement-category">
                                            <h4><ShieldCheck size={16} /> Security & OS</h4>
                                            <div className="refinement-grid">
                                                <div className="filter-group">
                                                    <label>Fingerprint Type</label>
                                                    <div className="filter-chips">
                                                        {["Any", "Side", "In-Display", "Face ID"].map(f => (
                                                            <button key={f} className={`f-chip ${advMobile.fingerprintType === f ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, fingerprintType: f })}>{f}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label>Android Version</label>
                                                    <div className="filter-chips">
                                                        {["Any", "Android 13", "Android 14", "iOS 17", "iOS 18"].map(v => (
                                                            <button key={v} className={`f-chip ${advMobile.androidVersion === v ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, androidVersion: v })}>{v}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label>Face Unlock</label>
                                                    <button className={`toggle-btn ${advMobile.faceUnlock ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, faceUnlock: !advMobile.faceUnlock })}>
                                                        {advMobile.faceUnlock ? "Required" : "Optional"}
                                                    </button>
                                                </div>
                                                <div className="filter-group">
                                                    <label>Android Version</label>
                                                    <div className="filter-chips">
                                                        {["Android 13", "Android 14", "Android 15"].map(v => (
                                                            <button key={v} className={`f-chip ${advMobile.androidVersion === v ? 'active' : ''}`} onClick={() => setAdvMobile({ ...advMobile, androidVersion: v })}>{v}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </section>
                    )}

                    {activeMode === "Laptop" && (
                        <section className="neural-section devider">
                            <button className="refinement-toggle" onClick={() => setIsRefinementExpanded(!isRefinementExpanded)}>
                                <div className="toggle-left"><SlidersHorizontal size={18} /> <span>Laptop Performance Tuning</span></div>
                                {isRefinementExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>

                            <AnimatePresence>
                                {isRefinementExpanded && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="refinement-container">
                                        <div className="refinement-category">
                                            <div className="category-header">
                                                <h4>Performance Core</h4>
                                                <button className="reset-tuning-btn" onClick={() => setAdvLaptop({
                                                    processor: "Any", gpu: "Any", ram: "Any", storage: "Any",
                                                    displayType: "Any", batteryLife: "Any", weight: "Any"
                                                })}>Reset Filters</button>
                                            </div>
                                            <div className="refinement-grid">
                                                <div className="filter-group">
                                                    <label><Cpu size={14} /> Processor Family</label>
                                                    <div className="filter-chips">
                                                        {["Any", "Apple M3", "Intel Ultra 7", "Intel Ultra 9", "Ryzen 9"].map(p => (
                                                            <button key={p} className={`f-chip ${advLaptop.processor === p ? 'active' : ''}`} onClick={() => setAdvLaptop({ ...advLaptop, processor: p })}>{p}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label><Zap size={14} /> Discrete GPU</label>
                                                    <div className="filter-chips">
                                                        {["Any", "RTX 4070", "RTX 4080", "Apple GPU", "Intel Arc"].map(g => (
                                                            <button key={g} className={`f-chip ${advLaptop.gpu === g ? 'active' : ''}`} onClick={() => setAdvLaptop({ ...advLaptop, gpu: g })}>{g}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label><Activity size={14} /> RAM Capacity</label>
                                                    <div className="filter-chips">
                                                        {["Any", "8GB", "16GB", "18GB", "32GB"].map(r => (
                                                            <button key={r} className={`f-chip ${advLaptop.ram === r ? 'active' : ''}`} onClick={() => setAdvLaptop({ ...advLaptop, ram: r })}>{r}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group">
                                                    <label><HardDrive size={14} /> Storage (SSD)</label>
                                                    <div className="filter-chips">
                                                        {["Any", "256GB", "512GB", "1TB", "2TB"].map(s => (
                                                            <button key={s} className={`f-chip ${advLaptop.storage === s ? 'active' : ''}`} onClick={() => setAdvLaptop({ ...advLaptop, storage: s })}>{s}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="refinement-category">
                                            <h4>Portability & Visuals</h4>
                                            <div className="refinement-grid">
                                                <div className="filter-group">
                                                    <label><Monitor size={14} /> Display Type</label>
                                                    <div className="filter-chips">
                                                        {["Any", "OLED", "Retina", "IPS"].map(d => (
                                                            <button key={d} className={`f-chip ${advLaptop.displayType === d ? 'active' : ''}`} onClick={() => setAdvLaptop({ ...advLaptop, displayType: d })}>{d}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="filter-group slider-stabilizer">
                                                    <label><Battery size={14} /> Min. Battery Life</label>
                                                    <div className="value-bubble">{advLaptop.batteryLife === "Any" ? "Any" : advLaptop.batteryLife}</div>
                                                    <input type="range" min="0" max="22" step="2" value={advLaptop.batteryLife === "Any" ? 0 : parseInt(advLaptop.batteryLife)} onChange={(e) => setAdvLaptop({ ...advLaptop, batteryLife: e.target.value === "0" ? "Any" : `${e.target.value} Hours` })} className="neural-range" />
                                                </div>
                                                <div className="filter-group slider-stabilizer">
                                                    <label><Hammer size={14} /> Max. Weight</label>
                                                    <div className="value-bubble">{advLaptop.weight === "Any" ? "Any" : `${advLaptop.weight}kg`}</div>
                                                    <input type="range" min="1" max="3" step="0.1" value={advLaptop.weight === "Any" ? 3 : parseFloat(advLaptop.weight)} onChange={(e) => setAdvLaptop({ ...advLaptop, weight: e.target.value === "3" ? "Any" : e.target.value })} className="neural-range" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </section>
                    )}

                    <div className="discovery-action-hub devider">
                        <button className="find-best-btn" onClick={() => {
                            setIsCalculating(true);
                            setTimeout(() => {
                                setIsCalculating(false);
                                resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }, 800);
                        }}>
                            <Sparkles size={18} /> Find Best Devices
                        </button>
                    </div>

                    {/* RESULTS AREA */}
                    <section ref={resultsRef} className="neural-section devider results-area" style={{ position: 'relative' }}>
                        <AnimatePresence>
                            {isCalculating && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="calculating-overlay glass"
                                >
                                    <div className="neural-loader">
                                        <Sparkles className="spin" size={32} color="#818cf8" />
                                        <span>AI analyzing technical specs...</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {recommendations.length === 0 ? (
                            <div className="empty-state no-matches">
                                <AlertTriangle size={40} color="#f43f5e" />
                                <p>No devices found within this budget. Try increasing your budget to discover more matches.</p>
                            </div>
                        ) : (
                            <div className="results-content">
                                <div className="quick-picks-row">
                                    <button className="quick-pick-btn" onClick={() => handleQuickPick('under10k')}>
                                        <Tag size={14} /> <span>Under ₹10k</span>
                                    </button>
                                    <button className="quick-pick-btn" onClick={() => handleQuickPick('under20k')}>
                                        <Tag size={14} /> <span>Under ₹20k</span>
                                    </button>
                                    <button className="quick-pick-btn" onClick={() => handleQuickPick('gaming')}>
                                        <Gamepad2 size={14} /> <span>Best for Gaming</span>
                                    </button>
                                    {activeMode === "Mobile" && (
                                        <button className="quick-pick-btn" onClick={() => handleQuickPick('camera')}>
                                            <Camera size={14} /> <span>Top Cameras</span>
                                        </button>
                                    )}
                                    <button className="quick-pick-btn" onClick={() => handleQuickPick('battery')}>
                                        <Battery size={14} /> <span>Best Battery</span>
                                    </button>
                                </div>

                                <div className="results-header">
                                    <h3>{overrideItem ? 'Target Selection' : 'Scanned Matches'}</h3>
                                    <div className="sort-controls">
                                        <label>Sort By:</label>
                                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select glass">
                                            <option value="best">Best Match</option>
                                            <option value="price_asc">Price: Low to High</option>
                                            <option value="price_desc">Price: High to Low</option>
                                            <option value="rating">Highest Rated</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="results-flex-list">
                                    {recommendations.map((item, idx) => {
                                        const isAdded = comparisonList.some(i => i.id === item.id);
                                        return (
                                            <motion.div
                                                key={item.id}
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                className="match-container"
                                            >
                                                <div className={`result-node ${idx === 0 ? 'top-pick' : ''}`}>
                                                    <div className="node-img"><img src={item.image} alt="" /></div>
                                                    <div className="node-info">
                                                        <span className="node-price">{formatINR(item.price)}</span>
                                                        <h4>{item.name}</h4>
                                                        <div className="node-tags">{item.category} • {item.specs.processor}</div>


                                                        <button onClick={() => { addToComparison(item); setToast({ type: 'success', message: `${item.name} added!` }) }} className={`compare-btn-inline ${isAdded ? 'added' : ''}`}>
                                                            {isAdded ? <CheckCircle2 size={14} /> : <Plus size={14} />} {isAdded ? 'Added' : 'Add to Comparison'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                            </div>
                        )}
                    </section>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .discovery-container { padding: 4rem 2rem 10rem; max-width: 900px; margin: 0 auto; color: white; position: relative; }
        .neural-gradient { background: linear-gradient(135deg, #818cf8, #c084fc, #22d3ee); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-size: 2.8rem; font-weight: 800; text-align: center; }
        .neural-card { background: #0f172a; border-radius: 40px; border: 1px solid rgba(255,255,255,0.08); padding: 1rem; }
        .neural-section { padding: 2.5rem; }
        .neural-section.devider { border-top: 1px solid rgba(255,255,255,0.08); }
        
        .search-layer { margin: 1.5rem; position: relative; z-index: 100; }
        .search-box { display: flex; align-items: center; gap: 12px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); padding: 14px 24px; border-radius: 20px; }
        .search-box.focused { border-color: #6366f1; box-shadow: 0 0 20px rgba(99,102,241,0.2); }
        .search-box input { flex: 1; background: transparent; border: none; color: white; outline: none; font-size: 1rem; }
        .search-suggestions-panel { position: absolute; top: 110%; left: 0; right: 0; background: rgba(15, 23, 42, 0.98); border: 1px solid rgba(255,255,255,0.1); border-radius: 22px; overflow: hidden; }
        .suggestion-node { display: flex; align-items: center; gap: 1rem; padding: 1rem; cursor: pointer; transition: 0.2s; }
        .suggestion-node:hover { background: rgba(255,255,255,0.05); }
        .highlighted { color: #818cf8; font-weight: 900; }
        .s-img { width: 40px; height: 40px; border-radius: 8px; overflow: hidden; background: #000; }
        .s-img img { width: 100%; height: 100%; object-fit: cover; }

        .switch-zone { display: flex; justify-content: center; margin-bottom: 2rem; }
        .switch-track { background: rgba(0,0,0,0.4); padding: 5px; border-radius: 100px; display: flex; position: relative; width: 300px; }
        .switch-thumb { position: absolute; height: calc(100% - 10px); width: calc(50% - 5px); background: #6366f1; border-radius: 100px; z-index: 1; transition: transform 0.3s; }
        .switch-btn { flex: 1; border: none; background: transparent; color: white; padding: 12px; cursor: pointer; font-weight: 700; z-index: 2; opacity: 0.5; }
        .switch-btn.active { opacity: 1; }

        .chip-stack { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 1.5rem; }
        .neural-chip { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 8px 20px; border-radius: 100px; cursor: pointer; font-weight: 700; transition: 0.3s; }
        .neural-chip.active { background: #6366f1; color: white; border-color: #6366f1; box-shadow: 0 10px 20px rgba(99,102,241,0.3); }

        .refinement-toggle { width: 100%; display: flex; justify-content: space-between; align-items: center; background: none; border: none; color: #818cf8; cursor: pointer; font-weight: 800; padding: 1.5rem 0.5rem; }
        .toggle-left { display: flex; align-items: center; gap: 10px; }
        
        .refinement-container { padding: 1rem 0; }
        .refinement-category { margin-bottom: 2.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1.5rem; }
        .refinement-category h4 { display: flex; align-items: center; gap: 10px; color: #6366f1; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 1.5rem; letter-spacing: 1px; }

        .refinement-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .filter-group label { display: block; font-size: 0.75rem; font-weight: 800; color: #64748b; margin-bottom: 0.75rem; text-transform: uppercase; }
        .filter-chips { display: flex; gap: 8px; flex-wrap: wrap; }
        .f-chip { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 6px 12px; border-radius: 8px; font-size: 0.7rem; font-weight: 700; cursor: pointer; transition: 0.2s; }
        .f-chip:hover { background: rgba(255,255,255,0.08); }
        .f-chip.active { border-color: #6366f1; color: white; background: #6366f1; }

        .toggle-btn { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 6px 16px; border-radius: 8px; font-size: 0.7rem; font-weight: 800; cursor: pointer; }
        .toggle-btn.active { background: #10b981; color: white; border-color: #10b981; }

        .range-container { position: relative; height: 100px; display: flex; align-items: flex-end; padding-bottom: 10px; contain: layout; }
        .budget-val { position: absolute; top: 0; left: 50%; transform: translateX(-50%); font-size: 1.8rem; font-weight: 900; color: #818cf8; text-shadow: 0 0 20px rgba(99,102,241,0.4); pointer-events: none; white-space: nowrap; transition: none; }
        
        .slider-stabilizer { position: relative; min-height: 70px; display: flex; flex-direction: column; justify-content: flex-end; contain: layout; }
        .value-bubble { position: absolute; right: 0; top: 0; font-size: 0.8rem; font-weight: 900; color: #818cf8; pointer-events: none; transform: translateX(0); transition: none; }
        
        .neural-range { width: 100%; height: 8px; background: #1e293b; border-radius: 10px; outline: none; -webkit-appearance: none; cursor: pointer; margin: 0; transition: none; }
        .neural-range::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; background: white; border: 4px solid #6366f1; border-radius: 50%; transition: transform 0.1s; }
        .neural-range:active::-webkit-slider-thumb { transform: scale(1.2); }

        .result-node { display: flex; align-items: center; gap: 1.5rem; padding: 1.5rem; border-radius: 24px; background: rgba(255,255,255,0.02); margin-top: 1.5rem; }
        .top-pick { border-left: 6px solid #6366f1; background: linear-gradient(to right, rgba(99, 102, 241, 0.08), transparent); }
        .node-img { width: 80px; height: 80px; border-radius: 18px; overflow: hidden; background: #000; }
        .node-img img { width: 100%; height: 100%; object-fit: cover; }
        .node-info { flex: 1; }
        .node-price { color: #818cf8; font-weight: 900; }
        .match-reasons { margin: 8px 0; display: flex; flex-direction: column; gap: 4px; }
        .reason-pill { font-size: 0.75rem; color: #94a3b8; font-weight: 700; opacity: 0.9; }
        .compare-btn-inline { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 6px 14px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; cursor: pointer; margin-top: 8px; }
        .compare-btn-inline.added { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .node-score { background: #000; padding: 10px; border-radius: 14px; color: #6366f1; font-weight: 900; font-size: 1.2rem; }

        .review-integration { margin-top: 1rem; padding: 1.5rem; border-radius: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); }
        .review-header { display: flex; align-items: center; gap: 8px; color: #818cf8; font-weight: 800; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 1rem; }
        .ai-review-text { color: #94a3b8; font-size: 0.9rem; line-height: 1.6; }
        .video-section { margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1.5rem; }
        .video-label { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.8rem; color: #ef4444; margin-bottom: 1rem; }
        .video-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .video-card { background: rgba(0,0,0,0.2); border-radius: 12px; overflow: hidden; }
        .video-emb { aspect-ratio: 16/9; }
        .video-emb iframe { width: 100%; height: 100%; border: none; }
        .video-card span { display: block; padding: 8px; font-size: 0.7rem; color: #64748b; }

        .hub-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; }
        .full-review-btn { background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.3); color: #818cf8; padding: 12px 24px; border-radius: 14px; font-weight: 800; font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .full-review-btn:hover { background: #6366f1; color: white; transform: translateY(-3px); }

        .hub-grid-layout { display: grid; grid-template-columns: 1fr 1.2fr 1.2fr; gap: 2rem; margin-top: 2rem; }
        .hub-column { display: flex; flex-direction: column; gap: 2rem; }
        .hub-summary { padding: 2rem; border-radius: 24px; position: relative; overflow: hidden; }
        .hub-insights { gap: 1.5rem; }
        .hub-videos { }
        
        .insight-card { padding: 1.5rem; border-radius: 20px; }
        .insight-card label { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.75rem; color: #818cf8; text-transform: uppercase; margin-bottom: 1.2rem; }
        
        .sentiment-bar-container { height: 32px; display: flex; border-radius: 8px; overflow: hidden; }
        .sent-bar { display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 900; color: white; }
        .sent-bar.pos { background: #10b981; }
        .sent-bar.neu { background: #64748b; }
        .sent-bar.neg { background: #f43f5e; }
        
        .perf-grid { display: flex; flex-direction: column; gap: 12px; }
        .perf-item { display: flex; flex-direction: column; gap: 4px; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 8px; }
        .perf-item span { font-size: 0.65rem; font-weight: 900; color: #6366f1; text-transform: uppercase; }
        .perf-item p { font-size: 0.8rem; color: #cbd5e1; }
        
        .complaint-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .c-pill { background: rgba(244, 63, 94, 0.1); color: #f43f5e; border: 1px solid rgba(244, 63, 94, 0.2); padding: 4px 12px; border-radius: 100px; font-size: 0.7rem; font-weight: 700; }
        
        .avoid-block { margin-bottom: 1.5rem; }
        .avoid-block label { display: flex; align-items: center; gap: 8px; font-weight: 800; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 0.5rem; }
        .avoid-block p { color: #fca5a5; font-size: 0.85rem; line-height: 1.5; }

        .rich-list { list-style: none; padding: 0; }
        .rich-list li { position: relative; padding-left: 20px; margin-bottom: 8px; font-size: 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 6px; }
        .rich-list li::before { content: '→'; position: absolute; left: 0; color: inherit; }

        .video-scroll-grid-hub { display: flex; flex-direction: column; gap: 1.5rem; max-height: 900px; overflow-y: auto; padding-right: 10px; }
        .video-scroll-grid-hub::-webkit-scrollbar { width: 4px; }
        .video-scroll-grid-hub::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        
        .sec-label { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 1.5rem; color: #cbd5e1; }
        
        .hub-qa-section.glass { padding: 1.5rem; border-radius: 20px; border: 1px solid rgba(99,102,241,0.2) !important; }
        .hub-qa-section label { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.75rem; color: #818cf8; text-transform: uppercase; margin-bottom: 1rem; }
        .qa-input-box { display: flex; align-items: center; gap: 12px; background: rgba(0,0,0,0.2); padding: 8px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
        .qa-input-box input { background: transparent; border: none; outline: none; color: white; flex: 1; font-size: 0.85rem; }
        .qa-input-box button { background: #6366f1; border: none; border-radius: 8px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; transition: all 0.2s; }
        .qa-input-box button:hover { background: #4f46e5; }
        .qa-response { background: rgba(99,102,241,0.05); padding: 16px; border-radius: 12px; margin-top: 1rem; border-left: 3px solid #6366f1; }
        .res-tag { font-size: 0.6rem; font-weight: 900; color: #818cf8; margin-bottom: 8px; letter-spacing: 1px; }
        .qa-response p { color: #94a3b8; font-size: 0.85rem; line-height: 1.5; }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .toast-popup.success { color: #10b981; }

        .calculating-overlay { position: absolute; inset: 0; z-index: 50; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 32px; backdrop-filter: blur(8px); }
        .neural-loader { display: flex; flex-direction: column; align-items: center; gap: 15px; }
        .neural-loader span { font-weight: 800; color: #818cf8; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px; }

        .discovery-action-hub { padding: 2.5rem; display: flex; justify-content: center; background: rgba(0,0,0,0.2); }
        .find-best-btn { background: #6366f1; border: none; color: white; padding: 16px 48px; border-radius: 100px; font-weight: 800; font-size: 1.1rem; cursor: pointer; display: flex; align-items: center; gap: 12px; transition: 0.3s; box-shadow: 0 10px 30px rgba(99,102,241,0.4); }
        .find-best-btn:hover { transform: translateY(-3px) scale(1.02); background: #4f46e5; box-shadow: 0 15px 40px rgba(99,102,241,0.6); }
        .find-best-btn:active { transform: translateY(0) scale(0.98); }

        .no-matches { text-align: center; padding: 4rem 2rem; }
        .no-matches p { color: #f43f5e; margin-top: 1.5rem; font-weight: 700; max-width: 300px; margin-left: auto; margin-right: auto; line-height: 1.5; }

        .sort-controls { display: flex; align-items: center; gap: 15px; background: rgba(255,255,255,0.03); padding: 8px 16px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.05); }
        .sort-controls label { font-size: 0.65rem; font-weight: 900; color: #6366f1; text-transform: uppercase; letter-spacing: 1px; }
        .sort-select { background: transparent; border: none; color: #cbd5e1; font-size: 0.8rem; font-weight: 700; outline: none; cursor: pointer; transition: 0.3s; }
        .sort-select:hover { color: white; }
        .sort-select option { background: #0f172a; color: white; padding: 10px; }

        .budget-hint { text-align: center; font-size: 0.75rem; color: #94a3b8; margin-top: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }

        .quick-picks-row { display: flex; gap: 12px; overflow-x: auto; padding: 0 5px 20px; margin-bottom: 2rem; scrollbar-width: none; }
        .quick-picks-row::-webkit-scrollbar { display: none; }
        .quick-pick-btn { flex: 0 0 auto; display: flex; align-items: center; gap: 10px; background: rgba(99, 102, 241, 0.05); border: 1px solid rgba(99, 102, 241, 0.15); color: #818cf8; padding: 10px 20px; border-radius: 100px; font-size: 0.8rem; font-weight: 800; cursor: pointer; transition: 0.3s; white-space: nowrap; }
        .quick-pick-btn:hover { background: #6366f1; color: white; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(99,102,241,0.3); border-color: #6366f1; }
        .quick-pick-btn:active { transform: translateY(0) scale(0.95); }

        .category-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .reset-tuning-btn { background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.2); color: #f43f5e; padding: 6px 16px; border-radius: 100px; font-size: 0.7rem; font-weight: 800; cursor: pointer; transition: 0.3s; }
        .reset-tuning-btn:hover { background: #f43f5e; color: white; }
      `}} />
        </div>
    );
};

export default AISuggestion;
