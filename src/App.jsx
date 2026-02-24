import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ComparisonProvider } from './context/ComparisonContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AISuggestion from './pages/AISuggestion';
import Comparison from './pages/Comparison';
import Reviews from './pages/Reviews';
import ReviewDetail from './pages/ReviewDetail';

function App() {
  return (
    <Router>
      <ComparisonProvider>
        <div className="app-shell">
          <Navbar />
          <main className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ai-suggestion" element={<AISuggestion />} />
              <Route path="/comparison" element={<Comparison />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/review/:deviceId" element={<ReviewDetail />} />
            </Routes>
          </main>

          <footer className="footer-main glass">
            <div className="footer-content">
              <div className="footer-brand">
                <h2 className="gradient-text">tech cart AI</h2>
                <p>The future of smartphone discovery.</p>
              </div>
              <div className="footer-links">
                <div className="link-group">
                  <h4>Platform</h4>
                  <Link to="/">Browse</Link>
                  <Link to="/ai-suggestion">AI Assistant</Link>
                  <Link to="/comparison">Comparison</Link>
                </div>
                <div className="link-group">
                  <h4>Company</h4>
                  <Link to="/">About Us</Link>
                  <Link to="/">Privacy Policy</Link>
                  <Link to="/">Contact</Link>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 tech cart AI<br />All rights reserved.</p>
            </div>
          </footer>
        </div>
      </ComparisonProvider>

      <style dangerouslySetInnerHTML={{
        __html: `
        .app-shell { min-height: 100vh; display: flex; flex-direction: column; }
        .content-area { flex: 1; }
        
        .footer-main { margin-top: 4rem; padding: 4rem 2rem 2rem; border-radius: 48px 48px 0 0; }
        .footer-content { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; gap: 4rem; flex-wrap: wrap; }
        .footer-brand h2 { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .footer-brand p { color: var(--text-dim); }
        
        .footer-links { display: flex; gap: 4rem; }
        .link-group { display: flex; flex-direction: column; gap: 0.75rem; }
        .link-group h4 { margin-bottom: 0.5rem; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
        .link-group a { color: var(--text-dim); text-decoration: none; cursor: pointer; transition: color 0.2s; font-size: 0.95rem; }
        .link-group a:hover { color: var(--primary); }
        
        .footer-bottom { max-width: 1200px; margin: 3rem auto 0; padding-top: 2rem; border-top: 1px solid var(--border); text-align: center; color: var(--text-dim); font-size: 0.85rem; }
        
        @media (max-width: 768px) {
          .footer-content { flex-direction: column; gap: 2rem; }
          .footer-links { gap: 2rem; }
        }
      `}} />
    </Router>
  );
}

export default App;
