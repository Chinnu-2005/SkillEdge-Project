import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

// Dummy Subject
const subject = "Dummy Subject";

// Demo data for quizzes
const demoInterests = [
  { name: "Mathematics", path: "mathematics" },
  { name: "Science", path: "science" },
  { name: "Computer Programming", path: "programming" },
  { name: "Literature", path: "literature" },
  { name: "History", path: "history" },
  { name: "Arts", path: "arts" },
  { name: "Business", path: "business" },
  { name: "Languages", path: "languages" },
];

const Quiz = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mt-4">
      <div className="mb-4">
        <Link to="/dashboard" className="btn btn-link text-decoration-none">
          Back
        </Link>
      </div>
      <h1 className="text-center mb-4">Select an Interest</h1>
      <h2 className="text-center mb-4">{subject}</h2> {/* Added heading for the dummy subject */}
      <Row>
        {demoInterests.map((interest, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">{interest.name}</Card.Title>
                <Link to={`/takequiz/${interest.path}`} className="btn btn-primary w-100"> {/* Updated link to navigate to takequiz page */}
                  Start Quiz
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Quiz;
