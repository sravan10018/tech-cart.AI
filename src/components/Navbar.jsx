import { Link } from 'react-router-dom';
import { Smartphone, Sparkles, Split, PlayCircle, Menu, Share2, Check } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between" style={{ borderRadius: '0 0 24px 24px', margin: '0 20px' }}>
      <Link to="/" className="flex items-center gap-3 text-2xl font-bold brand-font group">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
          <Smartphone className="text-white" size={24} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="gradient-text tracking-tight">tech cart AI</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="hover:text-primary transition-colors font-medium">Home</Link>
        <Link to="/ai-suggestion" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
          <Sparkles size={18} /> Suggestion
        </Link>
        <Link to="/comparison" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
          <Split size={18} /> Comparison
        </Link>
        <Link to="/reviews" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
          <PlayCircle size={18} /> Reviews
        </Link>
        <button
          className={`flex items-center gap-2 p-2 rounded-lg transition-all ${copied ? 'bg-green-500/20 text-green-400' : 'hover:bg-indigo-500/10 text-indigo-400'}`}
          onClick={() => {
            navigator.clipboard.writeText(window.location.origin);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          title="Copy Website Link"
        >
          {copied ? <Check size={18} /> : <Share2 size={18} />}
        </button>
      </div>

      <button className="md:hidden p-2 text-text-main" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass mt-2 p-4 flex flex-col gap-4 md:hidden rounded-2xl">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/ai-suggestion" onClick={() => setIsOpen(false)}>AI Suggestion</Link>
          <Link to="/comparison" onClick={() => setIsOpen(false)}>Comparison</Link>
          <Link to="/reviews" onClick={() => setIsOpen(false)}>Reviews</Link>
          <button
            className="flex items-center gap-2 text-indigo-400 py-2"
            onClick={() => {
              navigator.clipboard.writeText(window.location.origin);
              setCopied(true);
              setIsOpen(false);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <Share2 size={18} /> {copied ? 'Link Copied!' : 'Share Website'}
          </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        .items-center { display: flex; align-items: center; }
        .justify-between { justify-content: space-between; }
        .flex-col { flex-direction: column; }
        .hidden { display: none; }
        @media (min-width: 768px) { .md\\:flex { display: flex; } .md\\:hidden { display: none; } }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .text-2xl { font-size: 1.5rem; }
        .sticky { position: sticky; }
        .top-0 { top: 0; }
        .z-50 { z-index: 50; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-2xl { border-radius: 1rem; }
        .mt-2 { margin-top: 0.5rem; }
        .transition-colors { transition-property: color; }
        
        /* Tagline & Logo Styles */
        .leading-tight { line-height: 1.2; }
        .tracking-tight { letter-spacing: -0.025em; }
        .tracking-\[0\.2em\] { letter-spacing: 0.2em; }
        .text-\[10px\] { font-size: 10px; }
        .text-indigo-400\\/80 { color: rgba(129, 140, 248, 0.8); }
        .mt-0\\.5 { margin-top: 0.125rem; }
        .p-2\\.5 { padding: 0.625rem; }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .shadow-indigo-500\\/20 { box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2); }
        .group:hover .group-hover\\:scale-105 { transform: scale(1.05); }
        .gap-3 { gap: 0.75rem; }
        .gap-8 { gap: 2rem; }
        .gap-4 { gap: 1rem; }
        .p-2 { padding: 0.5rem; }
        .font-extrabold { font-weight: 800; }
        .uppercase { text-transform: uppercase; }
      `}} />
    </nav>
  );
};

export default Navbar;
