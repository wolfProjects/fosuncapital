import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import menuData from '@/Data/menu';
import { motion } from 'framer-motion';

const SubMenu = (props) => {
    const pathName = useLocation().pathname;
    const [ menu ] = useState(menuData.getSubMenu(pathName));
    let pathNames = pathName.split('/').filter(i => i.length);
    let currentSelectedSubMenuItem = pathNames[pathNames.length - 1] != menu.pagePath ? 
        pathNames[pathNames.length - 1] : menu.subMenus[0].id;

    useEffect(() => {
        props.onCurrentSelectedSubMenuIDChanged && props.onCurrentSelectedSubMenuIDChanged(currentSelectedSubMenuItem, menu.subMenus.find(i => i.id == currentSelectedSubMenuItem));
    }, [currentSelectedSubMenuItem]);

    return (
        <motion.div 
            className="submenu"
            initial={{ opacity: 0, transform: 'translateY(10px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            exit={{ opacity: 0, transform: 'translateX(10px)' }}
            transition={{ duration: 1 }}
        >
            <div className="submenu-hd">
                <h2 className="submenu-title">{ menu.title }</h2>
                <p className="submenu-description">{ menu.description }</p>
            </div>
            <div className="submenu-bd">
                {
                    menu.subMenus.map((item, key) => (
                        <Link className={classNames("submenu-item", { active: item.id == currentSelectedSubMenuItem })} to={`/${menu.pagePath}/${item.id}`} key={item.title}>
                            <span className="submenu-item-text">{ item.title }</span>
                        </Link>
                    ))
                }
            </div>
        </motion.div>
    );
}

export default React.memo(SubMenu);