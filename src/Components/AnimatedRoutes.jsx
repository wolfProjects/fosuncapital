import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '@/routes/Home';
import About from '@/routes/About';
import Team from '@/routes/Team';
import Perspective from '@/routes/Perspective';
import Firm from '@/routes/Firm';
import Contact from '@/routes/Contact';
import ArticleDetail from '@/routes/ArticleDetail';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes () {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
    );
}

export default AnimatedRoutes;