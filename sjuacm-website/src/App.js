import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About'
import Eboard from './pages/Eboard'
import Meetings from './pages/Meetings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/eboard" element={<Eboard/>} />
        <Route path="/meetings" element={<Meetings/>} />
      </Routes>
    </Router>
  );
}

export default App;
