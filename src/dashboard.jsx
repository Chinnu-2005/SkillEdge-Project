import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeaderboardPage from './leaderboard'; // Changed to LeaderboardPage

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profileImage: "/api/placeholder/60/60",
    goals: {
      completed: 786617,
      inProgress: 13561,
      progressPercentage: 75,
    },
  });
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulating loading state
    }, 1000); // Simulate a loading delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleLogout = () => {
    // Logic for logging out the user
    navigate('/login'); // Redirect to login page after logout
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="sidebar bg-white shadow-sm" style={{ width: "200px", zIndex: 100 }}>
        <div className="p-3 border-bottom">
          <div className="text-center mb-3">
            <div className="rounded-circle bg-light mx-auto mb-2" style={{ width: "60px", height: "60px", overflow: "hidden" }}>
              <img src={userData.profileImage} alt="Profile" className="w-100 h-100" />
            </div>
            <div className="fw-bold">Welcome Back, {userData.name}!</div>
          </div>
          
          <div className="list-group list-group-flush">
            <button 
              className={`list-group-item list-group-item-action border-0 d-flex align-items-center ${activeTab === 'dashboard' ? 'active bg-primary text-white' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <i className="bi bi-house-door me-2"></i> Dashboard
            </button>
            <button 
              className={`list-group-item list-group-item-action border-0 d-flex align-items-center ${activeTab === 'analytics' ? 'active bg-primary text-white' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <i className="bi bi-graph-up me-2"></i> Analytics
            </button>
          </div>
        </div>
        
        <div className="p-3">
          <div className="fw-bold text-muted small mb-2">APPS</div>
          <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action border-0 d-flex align-items-center">
              <i className="bi bi-envelope me-2"></i> Email
            </a>
            <a href="#" className="list-group-item list-group-item-action border-0 d-flex align-items-center">
              <i className="bi bi-chat me-2"></i> Chat
            </a>
            <a href="#" className="list-group-item list-group-item-action border-0 d-flex align-items-center">
              <i className="bi bi-check-square me-2"></i> Todo
            </a>
            <a href="#" className="list-group-item list-group-item-action border-0 d-flex align-items-center">
              <i className="bi bi-calendar me-2"></i> Calendar
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light overflow-auto">
        <div className="container-fluid p-4">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
          <div className="row g-4">
            {/* Dummy Quiz Section */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title mb-4">Take a Quiz</h5>
                  <ul className="list-group">
                    <li className="list-group-item" onClick={() => navigate('/takequiz/mathematics')}>Mathematics</li>
                    <li className="list-group-item" onClick={() => navigate('/takequiz/science')}>Science</li>
                    <li className="list-group-item" onClick={() => navigate('/takequiz/programming')}>Computer Programming</li>
                    <li className="list-group-item" onClick={() => navigate('/takequiz/literature')}>Literature</li>
                    <li className="list-group-item" onClick={() => navigate('/takequiz/history')}>History</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leaderboard Page Card */}
            <div className="col-md-8">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title mb-4">Leaderboard</h5>
                  <LeaderboardPage /> {/* Replaced table with LeaderboardPage component */}
                </div>
              </div>
            </div>

            {/* Progress Chart Card */}
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3">Progress</h5>
                  <div className="d-flex mb-3">
                    <button className="btn btn-sm btn-primary me-2">This Month</button>
                    <button className="btn btn-sm btn-outline-secondary">Last Month</button>
                  </div>
                  <div className="chart-container" style={{ height: "250px" }}>
                    <svg width="100%" height="100%" viewBox="0 0 800 250">
                      <rect width="100%" height="100%" fill="#f8f9fa" />
                      <polyline 
                        points="50,200 150,100 250,150 350,80 450,120 550,60 650,90 750,40" 
                        fill="none" 
                        stroke="#0d6efd" 
                        strokeWidth="3" 
                      />
                      <g fill="#6c757d" fontSize="12">
                        <text x="50" y="220">Jan</text>
                        <text x="150" y="220">Feb</text>
                        <text x="250" y="220">Mar</text>
                        <text x="350" y="220">Apr</text>
                        <text x="450" y="220">May</text>
                        <text x="550" y="220">Jun</text>
                        <text x="650" y="220">Jul</text>
                        <text x="750" y="220">Aug</text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
