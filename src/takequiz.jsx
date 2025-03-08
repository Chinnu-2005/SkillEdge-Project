import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const demoQuizzes = {
  mathematics: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], correctAnswer: "4" },
    { question: "What is 5 * 6?", options: ["30", "32", "28"], correctAnswer: "30" },
    { question: "What is 12 / 4?", options: ["2", "3", "4"], correctAnswer: "3" },
    { question: "What is the square root of 16?", options: ["2", "4", "8"], correctAnswer: "4" },
    { question: "What is 7 - 3?", options: ["3", "4", "5"], correctAnswer: "4" },
    { question: "What is 9 + 10?", options: ["19", "20", "21"], correctAnswer: "19" },
    { question: "What is 15 / 3?", options: ["4", "5", "6"], correctAnswer: "5" },
    { question: "What is 8 * 7?", options: ["54", "56", "58"], correctAnswer: "56" },
    { question: "What is 3^2?", options: ["6", "9", "12"], correctAnswer: "9" },
    { question: "What is 10 - 4?", options: ["5", "6", "7"], correctAnswer: "6" },
  ],
  science: [
    { question: "What is H2O?", options: ["Hydrogen", "Oxygen", "Water"], correctAnswer: "Water" },
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], correctAnswer: "Mars" },
    { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Pb"], correctAnswer: "Au" },
    { question: "What gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], correctAnswer: "Carbon Dioxide" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome"], correctAnswer: "Mitochondria" },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s"], correctAnswer: "300,000 km/s" },
    { question: "What is the boiling point of water?", options: ["100°C", "90°C", "80°C"], correctAnswer: "100°C" },
    { question: "What is the main gas in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], correctAnswer: "Nitrogen" },
    { question: "What is the process of photosynthesis?", options: ["Conversion of light energy", "Respiration", "Digestion"], correctAnswer: "Conversion of light energy" },
    { question: "What is the smallest unit of life?", options: ["Cell", "Atom", "Molecule"], correctAnswer: "Cell" },
  ],
  computerProgramming: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language"], correctAnswer: "Hyper Text Markup Language" },
    { question: "Which language is used for styling web pages?", options: ["HTML", "CSS", "JavaScript"], correctAnswer: "CSS" },
    { question: "Which is not a JavaScript framework?", options: ["Vue.js", "Django", "React"], correctAnswer: "Django" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], correctAnswer: "Cascading Style Sheets" },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>"], correctAnswer: "<style>" },
    { question: "Which is a JavaScript library for building user interfaces?", options: ["React", "Vue", "Angular"], correctAnswer: "React" },
    { question: "What is the correct syntax for referring to an external script called 'script.js'?", options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>"], correctAnswer: "<script src='script.js'>" },
    { question: "Which of the following is a valid JavaScript variable name?", options: ["1stVariable", "first-variable", "firstVariable"], correctAnswer: "firstVariable" },
    { question: "What is the output of 2 + '2' in JavaScript?", options: ["22", "4", "Error"], correctAnswer: "22" },
    { question: "Which of the following is used to create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "myFunction: function()"], correctAnswer: "function myFunction()" },
  ],
  literature: [
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain"], correctAnswer: "William Shakespeare" },
    { question: "What is the main theme of '1984'?", options: ["Freedom", "Totalitarianism", "Love"], correctAnswer: "Totalitarianism" },
    { question: "Which novel features the character 'Huckleberry Finn'?", options: ["The Adventures of Tom Sawyer", "Moby Dick", "The Great Gatsby"], correctAnswer: "The Adventures of Tom Sawyer" },
    { question: "What is the genre of 'Pride and Prejudice'?", options: ["Romance", "Science Fiction", "Fantasy"], correctAnswer: "Romance" },
    { question: "Who is the author of 'The Catcher in the Rye'?", options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway"], correctAnswer: "J.D. Salinger" },
    { question: "What is the setting of 'To Kill a Mockingbird'?", options: ["New York", "Maycomb", "Chicago"], correctAnswer: "Maycomb" },
    { question: "Which book begins with 'Call me Ishmael'?", options: ["Moby Dick", "The Old Man and the Sea", "The Grapes of Wrath"], correctAnswer: "Moby Dick" },
    { question: "Who wrote 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"], correctAnswer: "F. Scott Fitzgerald" },
    { question: "What is the main conflict in 'The Hunger Games'?", options: ["Survival", "Love", "Friendship"], correctAnswer: "Survival" },
    { question: "Who is the protagonist in 'The Picture of Dorian Gray'?", options: ["Dorian Gray", "Lord Henry", "Basil Hallward"], correctAnswer: "Dorian Gray" },
  ],
  history: [
    { question: "Who was the first President of the United States?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"], correctAnswer: "George Washington" },
    { question: "What year did World War II end?", options: ["1945", "1944", "1939"], correctAnswer: "1945" },
    { question: "Who was known as the Iron Lady?", options: ["Margaret Thatcher", "Angela Merkel", "Indira Gandhi"], correctAnswer: "Margaret Thatcher" },
    { question: "What was the main cause of the Cold War?", options: ["Ideological conflict", "Territorial disputes", "Economic competition"], correctAnswer: "Ideological conflict" },
    { question: "Which empire was known for its road system?", options: ["Roman Empire", "Ottoman Empire", "Mongol Empire"], correctAnswer: "Roman Empire" },
    { question: "Who discovered America?", options: ["Christopher Columbus", "Ferdinand Magellan", "Leif Erikson"], correctAnswer: "Christopher Columbus" },
    { question: "What was the main event of the French Revolution?", options: ["Storming of the Bastille", "Signing of the Declaration", "Battle of Waterloo"], correctAnswer: "Storming of the Bastille" },
    { question: "Who was the first female Prime Minister of the UK?", options: ["Theresa May", "Margaret Thatcher", "Angela Rayner"], correctAnswer: "Margaret Thatcher" },
    { question: "What year did the Titanic sink?", options: ["1912", "1905", "1920"], correctAnswer: "1912" },
    { question: "What was the main purpose of the Berlin Wall?", options: ["Preventing immigration", "Separating East and West Berlin", "Economic control"], correctAnswer: "Separating East and West Berlin" },
  ],
};

const TakeQuiz = () => {
  const { interestPath } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(demoQuizzes[interestPath] || []);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [studentName, setStudentName] = useState(''); // Assuming you have a way to get the student's name

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/quiz/results', {
        name: studentName,
        subject: interestPath,
        score,
        totalQuestions: questions.length
      });
      navigate('/leaderboard'); // Redirect to leaderboard after submission
    } catch (error) {
      console.error("Error submitting results:", error);
    }
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h2>Your Score: {score}/{questions.length}</h2>
        <button onClick={handleSubmit}>Submit Results</button>
      </div>
    );
  }

  const { question, options, correctAnswer } = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option === correctAnswer)}>
          {option}
        </button>
      ))}
      <p>Correct Answer: {correctAnswer}</p> {/* Show the correct answer below the options */}
    </div>
  );
};

export default TakeQuiz;
