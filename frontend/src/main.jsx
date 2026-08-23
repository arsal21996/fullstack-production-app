import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function App() {
  const [status, setStatus] = React.useState('Checking API…');

  React.useEffect(() => {
    fetch(`${apiUrl}/api/health`)
      .then((r) => r.ok ? r.json() : Promise.reject(new Error('API unavailable')))
      .then((data) => setStatus(data.status === 'ok' ? 'API online' : 'API unavailable'))
      .catch(() => setStatus('API unavailable'));
  }, []);

  return (
    <main className="page">
      <section className="hero" aria-labelledby="title">
        <div className="copy">
          <span className="eyebrow">PRODUCTION READY</span>
          <h1 id="title">Ship faster.<br /><span>Stay fast.</span></h1>
          <p>A clean full-stack foundation with responsive UI, SEO essentials, accessible interactions, and a production-ready Express API.</p>
          <div className="actions">
            <a className="button primary" href="#features">Explore features</a>
            <a className="button secondary" href="https://github.com/arsal21996/fullstack-production-app">View source</a>
          </div>
          <div className="status" role="status"><i /> {status}</div>
        </div>
        <div className="visual" aria-label="Abstract dashboard illustration" role="img">
          <div className="window">
            <div className="window-bar"><i /><i /><i /></div>
            <div className="window-body">
              <div className="metric"><small>PERFORMANCE</small><strong>98</strong><span>+12%</span></div>
              <div className="chart" aria-hidden="true"><b /><b /><b /><b /><b /><b /><b /><b /></div>
              <div className="mini"><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="features" aria-labelledby="features-title">
        <div><small>01</small><h2 id="features-title">Fast by default</h2><p>Small dependencies, static assets, and production caching reduce unnecessary work.</p></div>
        <div><small>02</small><h2>SEO included</h2><p>Semantic HTML, descriptive metadata, canonical URL, robots policy, and accessible imagery.</p></div>
        <div><small>03</small><h2>Responsive</h2><p>Designed from mobile through wide desktop layouts with no horizontal overflow.</p></div>
      </section>
      <footer>Built for the Full-Stack Deployment &amp; Performance Pass.</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
