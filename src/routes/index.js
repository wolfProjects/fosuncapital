import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import Team from './Team';

export default () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:id" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/team/:id" element={<Team />} />
            </Routes>
        </Router>
    );
};