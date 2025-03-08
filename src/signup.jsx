import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    stream: '',
    institute: '', // Added institute field
    email: '',
    password: '',
    interests: [],
    gender: '' // Added gender field
  });

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: ''
  });

  const interestOptions = [
    'Mathematics',
    'Science', 
    'Computer Programming',
    'Literature',
    'History',
    'Arts',
    'Business',
    'Languages'
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleInterestChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prevState => ({
      ...prevState,
      interests: value
    }));
  };

  const showAlert = (message, type) => {
    setAlert({
      show: true,
      message,
      type
    });
    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        type: ''
      });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        dob: formData.dob,
        stream: formData.stream,
        institute: formData.institute, // Include institute in the request
        interests: formData.interests,
        gender: formData.gender // Include gender in the request
      });

      if (response.status === 201 || response.status === 200) {
        showAlert('Account created successfully! You can now login.', 'success');
        setFormData({
          fullName: '',
          dob: '',
          stream: '',
          institute: '', // Reset institute field
          email: '',
          password: '',
          interests: [],
          gender: '' // Reset gender field
        });
      }
    } catch (error) {
      if (error.response) {
        // Server responded with error
        showAlert(error.response.data.message || 'Registration failed. Please try again.', 'danger');
      } else if (error.request) {
        // Network error
        showAlert('Network error. Please check your connection.', 'danger');
      } else {
        showAlert('An unexpected error occurred. Please try again.', 'danger');
      }
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="position-fixed top-0 start-0 m-4">
        <Link to="/" className="btn btn-link text-decoration-none text-muted">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card border-0 shadow-sm p-4 mx-auto"
        style={{ maxWidth: '450px', width: '95%' }}
      >
        {alert.show && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.message}
            <button type="button" className="btn-close" onClick={() => setAlert({show: false})}></button>
          </div>
        )}

        <div className="text-center mb-4">
          <h2 className="display-6 fw-bold mb-2">Sign Up</h2>
          <p className="text-muted">Join us to start your learning journey</p>
        </div>

        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-12">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Institute</label> {/* Added institute label */}
            <input
              type="text"
              className="form-control"
              id="institute" // Added institute input
              placeholder="Enter your institute name"
              value={formData.institute}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Gender</label> {/* Added gender label */}
            <select
              className="form-select"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Education Level</label>
            <select
              className="form-select"
              id="stream"
              value={formData.stream}
              onChange={handleChange}
              required
            >
              <option value="">Select your education level</option>
              <option value="school">School</option>
              <option value="intermediate">Intermediate</option>
              <option value="degree">Degree</option>
              <option value="ug">Undergraduate</option>
              <option value="pg">Postgraduate</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Areas of Interest</label>
            <select
              multiple
              className="form-select"
              id="interests"
              value={formData.interests}
              onChange={handleInterestChange}
              required
              size="4"
            >
              {interestOptions.map((interest, index) => (
                <option key={index} value={interest}>{interest}</option>
              ))}
            </select>
            <div className="form-text">Hold Ctrl (Windows) or Command (Mac) to select multiple</div>
          </div>

          <div className="col-12">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
            />
          </div>

          <div className="col-12 mt-4">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="btn btn-primary w-100 py-2"
            >
              Create Account
            </motion.button>
          </div>
        </form>

        <p className="text-center mt-4 mb-0">
          Already have an account? <Link to="/login" className="text-primary text-decoration-none">Log in here</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
