import React, { useCallback, useEffect, useState } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import Main from './Main';
import services from '@/services';
import { motion } from 'framer-motion';

const uiText = {
    title: '汇聚成长力量',
    content: '复星创富自2007年成立至今,\n十五年来发起并管理的资产包括母基金、私募股权投资基金、上市公司产业基金及其它各类股权投资基金'
};

const Page = (props) => {
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
                    <HomeWelcome title={uiText.title} content={uiText.content} whenWheeled={whenWheeled} /> :
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
