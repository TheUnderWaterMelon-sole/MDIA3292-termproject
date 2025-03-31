// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
// import Result from './pages/Result';
// import End from './pages/End';

function App() {
  return (      
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Question />} />
        {/* Uncomment and add other routes as needed */}
        {/* <Route path="/about" element={<Result />} />
        <Route path="/team" element={<End />} /> */}
      </Routes>
  </Router>
);
}

export default App;
