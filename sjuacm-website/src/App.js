import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About'
import Eboard from './pages/Eboard'
import Meetings from './pages/Meetings'
import Resources from './pages/Resources';
import InterviewPrep from './components/ResourcesSection/InterviewPrep/InterviewPrep';
import Blog from './pages/Blog';
import FaizanJourneytoBTBlog from './components/BlogSection/Blogs/FaizanJourneytoBT';
import TeutaBlog from './components/BlogSection/Blogs/TeutaBlogTemplate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/eboard" element={<Eboard/>} />
        <Route path="/meetings" element={<Meetings/>} />

        <Route path="/meetings/Upcoming" element={<Meetings semester='Upcoming' />} />
        <Route path="/meetings/Spring2024" element={<Meetings semester='Spring 2024' />} />
        <Route path="/meetings/Fall2023" element={<Meetings semester='Fall 2023' />} />
        <Route path="/meetings/Spring2023" element={<Meetings semester='Spring 2023' />} />
        <Route path="/meetings/Fall2022" element={<Meetings semester='Fall 2022' />} />
        <Route path="/meetings/2021-2022" element={<Meetings semester='2021-2022' />} />
        <Route path="/meetings/2020-2021" element={<Meetings semester='2020-2021'/>} />
        <Route path="/meetings/Fall2024" element={<Meetings semester='Fall 2024' />} />
        {/* Route for Spring 2025 meetings */}
        {/* <Route path="/meetings/Spring2025" element={<Meetings semester='Spring 2025' />} /> */}

        {/* Route for Fall 2025 meetings */}
        {/* <Route path="/meetings/Fall2025" element={<Meetings semester='Fall 2025' />} /> */}

        {/* Route for Spring 2026 meetings */}
        {/* <Route path="/meetings/Spring2026" element={<Meetings semester='Spring 2026' />} /> */}

        {/* Route for Fall 2026 meetings */}
        {/* <Route path="/meetings/Fall2026" element={<Meetings semester='Fall 2026' />} /> */}

        <Route path="/resources" element={<Resources/>} />
        <Route path="/resources/InterviewPrep" element={<InterviewPrep/>} />

        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/FaizansJourneytoBigTech" element={<FaizanJourneytoBTBlog/>} />
        <Route path="/blog/TeutasPivotToComputerScience" element={<TeutaBlog/>} />
      </Routes>
    </Router>
  );
}

export default App;
