import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from '@/Components/AnimatedRoutes';
import Header from '@/Components/Header';

const Routers = () => {
    let [ headerStyle, updateHeaderStyle ] = useState(undefined);

    return (
        <Router>
            <Header headerStyle={headerStyle} />
            <AnimatedRoutes updateHeaderStyle={updateHeaderStyle} />
        </Router>
    );
};

export default Routers;