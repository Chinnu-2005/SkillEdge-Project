import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import SignUp from './signup';
import Login from './login';
import Dashboard from './dashboard'; // Importing Dashboard component
import Quiz from './quiz'; // Importing Quiz component
import Leaderboard from './leaderboard'; // Importing Leaderboard component

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Added Dashboard route */}
          <Route path="/takequiz/:interestPath" element={<Quiz />} /> {/* Updated Quiz route for specific interest */}
          <Route path="/leaderboard" element={<Leaderboard />} /> {/* Added Leaderboard route */}
        </Routes>
      </Router>
    </>
  )
}

export default App
