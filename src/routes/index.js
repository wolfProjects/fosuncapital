import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRouter from '@/Components/AnimatedRouter';

export default () => {
    return (
        <Router>
            <AnimatedRouter />
        </Router>
    );
};