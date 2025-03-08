import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const demoStudents = [
  { id: 1, name: "Alice Johnson", stream: "Mathematics", institute: "Institute A", score: 95 },
  { id: 2, name: "Bob Smith", stream: "Science", institute: "Institute B", score: 88 },
  { id: 3, name: "Charlie Brown", stream: "Literature", institute: "Institute C", score: 76 },
  { id: 4, name: "Diana Prince", stream: "Arts", institute: "Institute D", score: 85 },
  { id: 5, name: "Ethan Hunt", stream: "Computer Science", institute: "Institute A", score: 92 },
];

const Leaderboard = () => {
  const [students, setStudents] = useState(demoStudents);
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setStudents(prevStudents => 
        prevStudents.sort((a, b) => b.score - a.score)
      );
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Center loading text
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-center">Leaderboard</h2>
        
      </div>
      <div style={{ overflow: 'hidden' }}> {/* Prevent scrolling */}
        <table className="table table-striped"> {/* Added Bootstrap classes */}
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Stream</th>
              <th>Institute</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.stream}</td>
                <td>{student.institute}</td>
                <td>{student.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
