
import api_key from './apiIP'; // Added './' to correctly import the api_key
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // This line remains unchanged
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const demoUsers = [
  { email: "alice.johnson@example.com", password: "alice123" },
  { email: "bob.smith@example.com", password: "bob123" },
  { email: "charlie.brown@example.com", password: "charlie123" },
  { email: "diana.prince@example.com", password: "diana123" },
  { email: "ethan.hunt@example.com", password: "ethan123" },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const navigate = useNavigate();

  const showAlert = (message, type) => {
    setAlert({
      show: true,
      message,
      type
    });
    setTimeout(() => {
      setAlert({
        show: false,
        message: "",
        type: ""
      });
    }, 5000);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = demoUsers.find(user => user.email === email && user.password === password);
    if (user) {
      showAlert("Login successful!", "success");
      navigate("/dashboard"); // Redirect to Dashboard directly
    } else {
      showAlert("Invalid credentials. Please check your email and password.", "danger");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="position-fixed top-0 start-0 p-4">
        <Link to="/" className="btn btn-link text-decoration-none text-muted fs-5">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back
        </Link>
      </div>
      <Card className="border-0 p-4" style={{ maxWidth: "500px", width: "95%" }}>
        {alert.show && (
          <Alert variant={alert.type} dismissible onClose={() => setAlert({ show: false })} className="mb-4">
            {alert.message}
          </Alert>
        )}
        
        <div className="text-center mb-4">
          <h2 className="h3 fw-bold mb-2">Welcome Back</h2>
          <p className="text-muted">Login to continue your learning journey</p>
        </div>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="py-2"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="py-2"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-3">
            Login
          </Button>
          
          <div className="text-center">
            <span className="text-muted">Don't have an account? </span>
            <Link to="/signup" className="text-primary text-decoration-none">Sign up</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
