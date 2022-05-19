import React, { useCallback, useEffect, useState } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import Main from './Main';
import services from '@/services';
import uiData from '@/Data/i18n';
import tools from '@/libs/tools';
import useFramerEmotionConfig from '@/libs/useFramerEmotionConfig';
import { AnimatePresence, motion } from 'framer-motion';
import useMediaQuery from '@tevhooks/use-media-query';

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

    let background = useMediaQuery(query => query.down('mobile')) ? welcome.mobileImg : welcome.pcImg;

    return (    
        <AnimatePresence>
        {
            !showHomePage ? 
                <HomeWelcome key={1} title={welcome.title} content={welcome.content} whenWheeled={whenWheeled} background={background} /> :
                <Main key={2} tabs={tabs} />
        }
        </AnimatePresence>
    );
};

const HomeWelcome = (props) => {
    useEffect(() => {
        let whenWheeling = () => props.whenWheeled && props.whenWheeled();
        tools.isTouchDevice() ? 
            document.body.addEventListener('touchmove', whenWheeling, { once: true }) :
            document.body.addEventListener('wheel', whenWheeling, { once : true });


        return (() => {
            tools.isTouchDevice() ? 
                document.body.removeEventListener('touchmove', whenWheeling) :
                document.body.removeEventListener('wheel', whenWheeling);
        });
    }, []);

    //  framer animation
    let framer = useFramerEmotionConfig({ 
        mobile: { 
            initial: { y: 3, opacity: 0 }, 
            animate: { y: 0, opacity: 1 }, 
            exit: { opacity: 0 },
            transition: { duration: 1.6, delay: .8 } 
        }, 
        laptop: {
            initial: { y: 20, opacity: 0 }, 
            animate: { y: 0, opacity: 1 }, 
            exit: { opacity: 0 },
            transition: { duration: 1.6, delay: .8 } 
        }
    });

    return (
        <motion.div 
            className="home-welcome" 
            style={{ backgroundImage: `url('${props.background}')`}} 
            initial={{ opacity: 0 }} 
            exit={{ opacity: 0, transition: { duration: .75 } }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }}
        >
            {
                framer && (
                    <div className="home-welcome-bd">
                        <motion.h1 className="title" initial={framer.initial} animate={framer.animate} exit={framer.exit} transition={framer.transition}>{props.title}</motion.h1>
                        <motion.p className="content" initial={framer.initial} animate={framer.animate} exit={framer.exit} transition={{ duration: 1.6, delay: 1.2 }}>{props.content}</motion.p>
                    </div>
                )
            }

            <span className="home-welcome-scroll-tips"></span>
        </motion.div>
    );
};

export default Layout({ name: 'home' })(Page);
