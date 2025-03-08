import React from 'react';
import { FaBrain, FaBookOpen, FaLeaf, FaComments } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <FaBrain className="display-4 text-primary" />, 
      title: 'Personalized Study Plans',
      description: 'AI-powered learning paths tailored to your unique learning style and goals.'
    },
    {
      icon: <FaBookOpen className="display-4 text-primary" />, 
      title: 'Interactive Quizzes',
      description: 'Track your strengths and weaknesses with adaptive quizzes that evolve with you.'
    },
    {
      icon: <FaLeaf className="display-4 text-primary" />, 
      title: 'Sustainability Tracking',
      description: 'Monitor and improve your eco-friendly study habits with our sustainability score.'
    },
    {
      icon: <FaComments className="display-4 text-primary" />, 
      title: 'AI Chatbot',
      description: 'Get instant academic assistance from our intelligent AI tutor, available 24/7.'
    },
  ];

  return (
    <section className="py-5 bg-light text-center">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-4 fw-bold mb-3">Powerful Features</h2>
          <p className="text-muted mb-5">
            Our AI-powered platform offers everything you need to learn efficiently and develop sustainable digital habits.
          </p>
        </motion.div>
        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="col-sm-12 col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card h-100 shadow-sm p-4 rounded-3 hover-lift">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="h5 fw-bold mb-3">{feature.title}</h3>
                <p className="text-muted mb-0">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
