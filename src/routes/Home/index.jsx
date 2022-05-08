import React, { useCallback, useEffect, useState } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import Main from './Main';
import services from '@/services';

const uiText = {
    title: '汇聚成长力量',
    content: '复星创富自2007年成立至今,\n十五年来发起并管理的资产包括母基金、私募股权投资基金、上市公司产业基金及其它各类股权投资基金'
};

const Page = () => {
    let [ showHomePage, updateShowHomePage ] = useState(false);
    const whenWheeled = useCallback(() => {
        updateShowHomePage(true);
    }, []);

    let [ tabs, updateTabs ] = useState([]);
    useEffect((currentSelectedSubMenuId) => {
        services.Home.fetchTab(currentSelectedSubMenuId).then(res => {
            updateTabs(res.data.data);
        })
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
                <h1 className="title">{props.title}</h1>
                <p className="content">{props.content}</p>
            </div>

            <span className="home-welcome-scroll-tips"></span>
        </div>
    );
};

export default Layout({ name: 'home' })(Page);
