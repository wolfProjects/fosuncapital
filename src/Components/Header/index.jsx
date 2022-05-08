import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import menuData from '@/Data/menu';
import classNames from 'classnames';

const Page = () => {
    return (
        <div className="header">
            <div className="header-bd">
                <Link className="header-logo" to="/" />

                <div className="header-side">
                    <div className="language-selector">
                        <div className="language-selector-hd">
                            简体中文
                        </div>
                        <div className="language-selector-bd">

                        </div>
                    </div>
                    <HeaderMenu />
                </div>
            </div>
        </div>
    );
}

const HeaderMenu = (props) => {
    let [ showHeaderMenu, updateShowHeaderMenu ] = useState(false);

    //  keyboard shotcut: close header menu
    useEffect(() => {
        const closeHeaderMenu = (e) => {
            if (e.keyCode !== 27 || showHeaderMenu) return;
            updateShowHeaderMenu(false);
        };
        document.addEventListener('keydown', closeHeaderMenu);
        return () => document.removeEventListener('keydown', closeHeaderMenu);
    }, []);

    //  detect current selected menu
    const pathNames = useLocation().pathname.split('/').filter(i => i.length);
    let currentSelectedMenu = pathNames.shift();
    const menuList = menuData.getNav();

    return (
        <div className="header-menu">
            <div className="header-menu-hd" onClick={() => updateShowHeaderMenu(!showHeaderMenu)}></div>
            {
                showHeaderMenu && (
                    <div className="header-menu-bd">
                        <div className="hd">
                            <div className="logo"></div>
                            <div className="close"  onClick={() => updateShowHeaderMenu(!showHeaderMenu)}>X</div>
                        </div>
                        <div className="bd">
                            {
                                menuList.map((item, key) => (
                                    <Link 
                                        className={classNames("header-menu-item", { active: currentSelectedMenu === item.pagePath})} 
                                        key={key} 
                                        to={`/${item.pagePath}`}
                                    >
                                        { item.title }
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Page;