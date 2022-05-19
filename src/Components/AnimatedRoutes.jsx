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

function AnimatedRoutes (props) {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/about" element={<About updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/about/:id" element={<About updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/team" element={<Team updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/team/:id" element={<Team updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/perspective" element={<Perspective updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/perspective/:id" element={<Perspective updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/firm" element={<Firm updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/firm/:id" element={<Firm updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/contact" element={<Contact updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/contact/:id" element={<Contact updateHeaderStyle={props.updateHeaderStyle} />} />
                <Route path="/article-detail/:id" element={<ArticleDetail updateHeaderStyle={props.updateHeaderStyle} />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;