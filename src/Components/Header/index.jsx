import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import menuData from '@/Data/menu';
import { COMMON_DATA_MAP } from '@/Data';
import classNames from 'classnames';
import services from '@/services';
import tools from '@/libs/tools';


const Page = (props) => {
    const defaultLocale = tools.getCurrentLocale();
    const [ currentLocale, updateLocale ] = useState(defaultLocale);

    //  update locale, then refresh the page for new locale data available
    useEffect(() => {
        if (currentLocale == defaultLocale) return;
        services.updateLocale(currentLocale);
        window.location.reload();
    }, [ currentLocale ]);

    const [ isLanguageSelectorShow, updateIsLanguageSelectorShow ] = useState(false);

    //  enhance language selector close area
    useEffect(() => {
        if (!isLanguageSelectorShow) return;
        let closeLanguageSelector = () => updateIsLanguageSelectorShow(false);
        document.addEventListener('click', closeLanguageSelector, { once: true });
        return () => document.removeEventListener('click', closeLanguageSelector);
    }, [ isLanguageSelectorShow ]);

    return (
        <div className={classNames("header", props.headerStyle && `header-style-${props.headerStyle}`)}>
            <div className="header-bd">
                <Link className="header-logo" to="/" />

                <div className="header-side">
                    <div className={classNames("language-selector", { active: isLanguageSelectorShow })}>
                        <div className="language-selector-hd" onClick={(e) => { e.stopPropagation(); updateIsLanguageSelectorShow(true); } }></div>
                        <ul className="language-selector-bd"> {
                            COMMON_DATA_MAP.get('locales').map((locale, index) => (
                                <li 
                                    className={classNames("language-selector-item", { active: locale.value === currentLocale })} 
                                    onClick={() => updateLocale(locale.value) } 
                                    key={index}
                                >
                                    { locale.text }
                                </li>
                            ))
                        }
                        </ul>
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
        if (!showHeaderMenu) return;
        const closeHeaderMenu = (e) => {
            if (e.keyCode != undefined && e.keyCode !== 27) return;
            updateShowHeaderMenu(false);
        };
        document.addEventListener('keydown', closeHeaderMenu, { once: true });
        document.addEventListener('click', closeHeaderMenu, { once: true });
        return () => {
            document.removeEventListener('keydown', closeHeaderMenu);
            document.removeEventListener('click', closeHeaderMenu);
        };
    }, [ showHeaderMenu ]);

    //  detect current selected menu
    const pathNames = useLocation().pathname.split('/').filter(i => i.length);
    let currentSelectedMenu = pathNames.shift();
    const menuList = menuData.getNav();

    return (
        <div className="header-menu">
            <div className="header-menu-hd" onClick={(e) => { e.stopPropagation(); updateShowHeaderMenu(!showHeaderMenu) }}></div>
            {
                showHeaderMenu && (
                    <div className="header-menu-bd">
                        <div className="hd">
                            <i className="logo"></i>
                            <i className="close" onClick={() => updateShowHeaderMenu(!showHeaderMenu)}></i>
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