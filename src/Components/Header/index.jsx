import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import menuData from '@/Data/menu';
import { COMMON_DATA_MAP } from '@/Data';
import classNames from 'classnames';
import services from '@/services';
import tools from '@/libs/tools';
import useFramerEmotionConfig from '@/libs/useFramerEmotionConfig';
import { AnimatePresence, motion } from 'framer-motion';

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
                <motion.div className="header-logo" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.6 }}>
                    <Link className="header-logo-link" to="/" />
                </motion.div>

                <motion.div className="header-side" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.6 }}>
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
                </motion.div>
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

    //  framer animation
    let framer = useFramerEmotionConfig({ 
        mobile: { 
            initial: { opacity: 0 }, 
            animate: { opacity: 1 }, 
            exit: { opacity: 0 },
            transition: { duration: .25 } 
        }, 
        laptop: {
            initial: { x: '20%', opacity: 0 }, 
            animate: { x: '0%', opacity: 1 }, 
            exit: { x: '20%', opacity: 0 },
            transition: { duration: .45 } 
        }
    });

    return (
        <div className="header-menu">
            <div className="header-menu-hd" onClick={(e) => { e.stopPropagation(); updateShowHeaderMenu(!showHeaderMenu) }}></div>
            <AnimatePresence>
            {
                showHeaderMenu && (
                    <motion.div className="header-menu-bd" initial={framer.initial} animate={framer.animate} exit={framer.exit} transition={framer.transition}>
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
                    </motion.div>
                )
            }
            </AnimatePresence>
        </div>
    );
};

export default Page;