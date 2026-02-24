import { useNavigate, useLocation } from 'react-router-dom';
import { useComparison } from '../context/ComparisonContext';
import { useState, useEffect } from 'react';
import {
    X,
    Trash2,
    ArrowLeft,
    Cpu,
    Battery,
    Camera,
    Monitor,
    Hammer,
    CreditCard,
    Zap,
    Tag,
    Sparkles,
    Inbox,
    Share2,
    Check
} from 'lucide-react';

const Comparison = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { comparisonList, removeItem, clearAll, addToComparisonByIds } = useComparison();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const idsString = params.get('ids');
        if (idsString) {
            const ids = idsString.split(',');
            addToComparisonByIds(ids);
        }
    }, [location.search]);

    const handleShare = () => {
        if (comparisonList.length === 0) return;
        const ids = comparisonList.map(item => item.id).join(',');
        const url = `${window.location.origin}/comparison?ids=${ids}`;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const formatINR = (val) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency', currency: 'INR', maximumFractionDigits: 0
        }).format(val);
    };

    const SpecRow = ({ label, icon: Icon, specKey, items }) => (
        <div className="spec-row">
            <div className="spec-label-col">
                <Icon size={18} />
                <span>{label}</span>
            </div>
            <div className="spec-values-container">
                {items.map(item => (
                    <div key={item.id} className="spec-value-cell">
                        {specKey === 'price' ? formatINR(item.price) :
                            specKey === 'fiveG' ? (item.specs.fiveG ? 'Supported' : 'No') :
                                specKey === 'battery' ? (item.type === 'laptop' ? item.specs.battery : `${item.specs.batteryCapacity}mAh`) :
                                    item.specs[specKey] || item[specKey] || 'N/A'}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="comparison-page">
            <div className="comp-header">
                <button className="back-btn" onClick={() => navigate('/ai-suggestion')}>
                    <ArrowLeft size={20} /> Back to Discover
                </button>
                <div className="header-titles">
                    <h1 className="neural-gradient">tech cart AI Matrix</h1>
                    <p>Clean Side-by-Side Spec Comparison.</p>
                </div>
                <div className="header-actions">
                    {comparisonList.length > 0 && (
                        <>
                            <button className={`share-btn ${copied ? 'copied' : ''}`} onClick={handleShare}>
                                {copied ? <Check size={18} /> : <Share2 size={18} />}
                                {copied ? 'Link Copied' : 'Share Matrix'}
                            </button>
                            <button className="clear-btn" onClick={clearAll}>
                                <Trash2 size={18} /> Clear List
                            </button>
                        </>
                    )}
                </div>
            </div>

            {comparisonList.length === 0 ? (
                <div className="empty-comparison glass">
                    <Inbox size={60} />
                    <h2>No devices added yet</h2>
                    <p>Add products from the AI Suggestion tool to start your side-by-side comparison.</p>
                    <button className="neural-cta" onClick={() => navigate('/ai-suggestion')}>Start Discovering</button>
                </div>
            ) : (
                <div className="comparison-viewport glass">
                    <div className="comparison-table">
                        <div className="spec-row header-row">
                            <div className="spec-label-col">
                                <Tag size={18} />
                                <span>Product</span>
                            </div>
                            <div className="spec-values-container">
                                {comparisonList.map(item => (
                                    <div key={item.id} className="product-header-cell">
                                        <button className="remove-item" onClick={() => removeItem(item.id)}><X size={14} /></button>
                                        <div className="item-img"><img src={item.image} alt={item.name} /></div>
                                        <h4>{item.name}</h4>
                                        <span className="type-tag">{item.type}</span>
                                        <button className="read-review-mini glass" onClick={() => navigate(`/review/${item.id}`)}>
                                            <Sparkles size={12} /> Read Review
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <SpecRow label="Price" icon={CreditCard} specKey="price" items={comparisonList} />
                        <SpecRow label="Processor" icon={Cpu} specKey="processor" items={comparisonList} />
                        <SpecRow label="Battery" icon={Battery} specKey="battery" items={comparisonList} />
                        <SpecRow label="Camera" icon={Camera} specKey="cameraMP" items={comparisonList} />
                        <SpecRow label="Display" icon={Monitor} specKey="displayType" items={comparisonList} />
                        <SpecRow label="Charging" icon={Zap} specKey="chargingSpeed" items={comparisonList} />
                        <SpecRow label="Durability" icon={Hammer} specKey="build" items={comparisonList} />
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
        .comparison-page { padding: 4rem 2rem; max-width: 1400px; margin: 0 auto; min-height: 100vh; color: white; }
        .comp-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem; }
        .back-btn { display: flex; align-items: center; gap: 8px; background: none; border: none; color: #818cf8; font-weight: 800; cursor: pointer; }
        .header-titles { text-align: center; }
        .neural-gradient { background: linear-gradient(135deg, #818cf8, #c084fc, #22d3ee); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-size: 2.8rem; font-weight: 800; }
        .header-actions { display: flex; gap: 12px; align-items: center; }
        .share-btn { display: flex; align-items: center; gap: 8px; background: rgba(99, 102, 241, 0.1); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.2); padding: 8px 16px; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; }
        .share-btn:hover { background: rgba(99, 102, 241, 0.2); transform: translateY(-2px); }
        .share-btn.copied { background: #10b981; color: white; border-color: #10b981; }
        .clear-btn { display: flex; align-items: center; gap: 8px; background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2); padding: 8px 16px; border-radius: 12px; font-weight: 700; cursor: pointer; }
        .empty-comparison { text-align: center; padding: 6rem; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); }
        .comparison-viewport { border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; background: #0f172a; }
        .comparison-table { display: flex; flex-direction: column; overflow-x: auto; }
        .spec-row { display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); min-width: max-content; }
        .spec-label-col { width: 220px; padding: 1.5rem 2rem; display: flex; align-items: center; gap: 12px; color: #94a3b8; font-weight: 800; border-right: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.3); position: sticky; left: 0; z-index: 10; }
        .spec-values-container { display: flex; flex: 1; }
        .product-header-cell { min-width: 280px; padding: 2.5rem 2rem; text-align: center; position: relative; border-right: 1px solid rgba(255,255,255,0.05); flex: 1; transition: 0.3s; }
        .item-img { width: 100px; height: 100px; margin: 0 auto 1.5rem; border-radius: 18px; overflow: hidden; background: #000; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .item-img img { width: 100%; height: 100%; object-fit: cover; }
        .spec-value-cell { min-width: 280px; padding: 1.5rem 2rem; text-align: center; border-right: 1px solid rgba(255,255,255,0.05); flex: 1; font-weight: 700; color: #e2e8f0; position: relative; display: flex; align-items: center; justify-content: center; }
        .remove-item { position: absolute; top: 1rem; right: 1rem; color: #ef4444; background: rgba(239, 68, 68, 0.1); border: none; padding: 8px; border-radius: 50%; cursor: pointer; opacity: 0; transition: 0.2s; }
        .product-header-cell:hover .remove-item { opacity: 1; }
        .neural-cta { background: #6366f1; color: white; padding: 12px 32px; border-radius: 14px; font-weight: 800; border: none; cursor: pointer; transition: 0.3s; }
        .type-tag { font-size: 0.7rem; background: #1e293b; color: #818cf8; padding: 2px 8px; border-radius: 100px; font-weight: 800; text-transform: uppercase; }
        .read-review-mini { margin-top: 10px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); color: #818cf8; padding: 6px 12px; border-radius: 8px; font-size: 0.7rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: 0.2s; width: max-content; margin-left: auto; margin-right: auto; }
        .read-review-mini:hover { background: #6366f1; color: white; transform: translateY(-2px); }
      `}} />
        </div>
    );
};

export default Comparison;
