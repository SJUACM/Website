import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About'
import Eboard from './pages/Eboard'
import Meetings from './pages/Meetings'
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import FaizanJourneytoBTBlog from './components/BlogSection/Blogs/FaizanJourneytoBT';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/eboard" element={<Eboard/>} />
        <Route path="/meetings" element={<Meetings/>} />
        
        <Route path="/meetings/Spring2022" element={<Meetings semester='Spring 2022' />} />
        <Route path="/meetings/Fall2021" element={<Meetings semester='Fall 2021' />} />
        <Route path="/meetings/Spring2021" element={<Meetings semester='Spring 2021'/>} />
        <Route path="/meetings/Fall2020" element={<Meetings semester='Fall 2020'/>} />

        <Route path="/resources" element={<Resources/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/FaizansJourneytoBigTech" element={<FaizanJourneytoBTBlog/>} />
      </Routes>
    </Router>
  );
}

export default App;
