import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import Features from './features';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg sticky-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm`}>
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold text-primary" href="#">SkillEdge</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#how-it-works">How It Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#pricing">Pricing</a>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-outline-primary px-4">Login</Link>
              <Link to="/signup" className="btn btn-primary px-4">Sign Up</Link>
              <button onClick={toggleDarkMode} className="btn btn-outline-secondary ms-2">
                {darkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="d-inline-block bg-primary bg-opacity-10 px-3 py-2 rounded-pill mb-4">
                <span className="text-primary">✨ AI-Powered Learning Platform</span>
              </div>
              <h1 className="display-4 fw-bold mb-4">Learn Smarter, Not Harder</h1>
              <p className="lead text-muted mb-4">
                Personalized study plans, interactive quizzes, and sustainable learning habits — all powered by AI.
              </p>
              <div className="d-flex gap-3">
                <Link to="/signup" className="btn btn-primary btn-lg">Get Started Free →</Link>
                <button className="btn btn-outline-secondary btn-lg">Watch Demo</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-4 p-5 text-center">
                <span className="display-1">📚</span>
                <p className="text-muted mt-3">Interactive Learning Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />
    </div>
  );
};

export default HomePage;
