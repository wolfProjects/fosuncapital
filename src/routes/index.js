import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import Team from './Team';
import Perspective from './Perspective';
import Firm from './Firm';
import Contact from './Contact';
import ArticleDetail from './ArticleDetail';

export default () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:id" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/team/:id" element={<Team />} />
                <Route path="/perspective" element={<Perspective />} />
                <Route path="/perspective/:id" element={<Perspective />} />
                <Route path="/firm" element={<Firm />} />
                <Route path="/firm/:id" element={<Firm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/:id" element={<Contact />} />
                <Route path="/article-detail/:id" element={<ArticleDetail />} />
            </Routes>
        </Router>
    );
};