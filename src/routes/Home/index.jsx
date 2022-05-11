import React, { useCallback, useEffect, useState } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import Main from './Main';
import services from '@/services';
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
                <h1 className="title">{props.title}</h1>
                <p className="content">{props.content}</p>
            </div>

            <span className="home-welcome-scroll-tips"></span>
        </div>
    );
};

export default Layout({ name: 'home' })(Page);
