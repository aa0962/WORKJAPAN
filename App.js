import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1 className="logo">WorkJapan</h1>
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#jobs">Job Listings</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="search-button">
          <button className="btn-search">Search</button>
        </div>
      </header>
      <section id="hero" className="hero">
        <div className="container">
          <h1>Unlock Your Career in Japan</h1>
          <p>Discover Exciting Work Opportunities in the Land of the Rising Sun</p>
          <a href="#jobs" className="btn">Explore Jobs</a>
        </div>
      </section>
      {/* Other sections */}
    </div>
  );
}

export default App;
