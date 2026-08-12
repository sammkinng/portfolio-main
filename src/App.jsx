import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project5G from './pages/Project5G';
import ProjectAIJobHunter from './pages/ProjectAIJobHunter';
import ProjectVisualCrypto from './pages/ProjectVisualCrypto';
import Resume from './pages/Resume';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project/5g" element={<Project5G />} />
          <Route path="/project/ai-job-hunter" element={<ProjectAIJobHunter />} />
          <Route path="/project/visual-crypto" element={<ProjectVisualCrypto />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;

