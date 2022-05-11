import React, { useCallback, useEffect, useState } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import Main from './Main';
import services from '@/services';
import { motion } from 'framer-motion';
import uiData from '@/Data/i18n';

const Page = (props) => {
    let { welcome } = uiData.getUiI18n().home;

    let [ showHomePage, updateShowHomePage ] = useState(false);

    useEffect(() => props.updateHeaderStyle(1), []);
    
    const whenWheeled = useCallback(() => {
        props.updateHeaderStyle(2);
        updateShowHomePage(true);
    }, []);

    let [ tabs, updateTabs ] = useState([]);
    useEffect((currentSelectedSubMenuId) => {
        services.Home.fetchTab(currentSelectedSubMenuId).then(res => {
            updateTabs(res.data.data);
        });
    }, []);

    return (    
        <React.Fragment>
            {
                !showHomePage ? 
                    <HomeWelcome title={welcome.title} content={welcome.content} whenWheeled={whenWheeled} /> :
                    <Main tabs={tabs}/>
            }
        </React.Fragment>
    )
};

const HomeWelcome = (props) => {
    useEffect(() => {
        let whenWheeling = () => props.whenWheeled && props.whenWheeled();
        document.body.addEventListener('wheel', whenWheeling, { once : true });

        return () => document.body.removeEventListener('wheel', whenWheeling);
    }, []);

    return (
        <div className="home-welcome">
            <div className="home-welcome-bd">
                <motion.h1 
                    className="title"
                    initial={{ opacity: 0, transform: 'translateY(10px)' }}
                    animate={{ opacity: 1, transform: 'translateY(0px)' }}
                    exit={{ opacity: 0, transform: 'translateX(10px)' }}
                    transition={{ duration: 1 }}
                >
                    {props.title}
                </motion.h1>
                <motion.p 
                    className="content"
                    initial={{ opacity: 0, transform: 'translateY(10px)' }}
                    animate={{ opacity: 1, transform: 'translateY(0px)' }}
                    exit={{ opacity: 0, transform: 'translateX(10px)' }}
                    transition={{ duration: 1, delay: .25 }}
                >
                    {props.content}
                </motion.p>
            </div>

            <span className="home-welcome-scroll-tips"></span>
        </div>
    );
};

export default Layout({ name: 'home' })(Page);
