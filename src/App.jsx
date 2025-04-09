// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import Results from './pages/Results';
import End from './pages/End';

function App() {
  return (      
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/results" element={<Results />} />
        <Route path="/end" element={<End />} />
      </Routes>
  </Router>
);
}

export default App;
