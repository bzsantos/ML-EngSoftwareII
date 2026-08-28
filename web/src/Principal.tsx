// App.tsx
import React from 'react';
import './Prince.css';

export function Index() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#sobre" className="nav-link">Sobre</a>
        </nav>
        <div className="logo-container">
          <svg className="brain-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2a4 4 0 0 0-4 4v1a3 3 0 0 0-3 3 3 3 0 0 0 1 2.23V15a3 3 0 0 0 3 3h1v1a3 3 0 0 0 3 3 3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3v-2.77A3 3 0 0 0 19 10a3 3 0 0 0-3-3V6a4 4 0 0 0-4-4z" />
            <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="2 2" />
          </svg>
        </div>
      </header>

      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-tag">MACHINE LEARNING</span>
        </div>
      </section>

      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="main-title">The New Era</h1>
          <div className="feature-illustration">
            <svg className="network-brain" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="6" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
              <path d="M7.75 7.75l2.83 2.83m2.84 2.84l2.83 2.83M7.75 16.25l2.83-2.83m2.84-2.84l2.83-2.83" />
              <rect x="3" y="3" width="4" height="4" rx="1" />
              <rect x="17" y="3" width="4" height="4" rx="1" />
              <rect x="3" y="17" width="4" height="4" rx="1" />
              <rect x="17" y="17" width="4" height="4" rx="1" />
            </svg>
          </div>
        </div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default Index;