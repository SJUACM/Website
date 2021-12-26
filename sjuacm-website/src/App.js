import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About'
import Eboard from './pages/Eboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/eboard" element={<Eboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
