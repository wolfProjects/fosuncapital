import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import menuData from '@/Data/menu';

const SubMenu = (props) => {
    const pathName = useLocation().pathname;
    const [ menu ] = useState(menuData.getSubMenu(pathName));
    let pathNames = pathName.split('/').filter(i => i.length);
    let currentSelectedSubMenuItem = pathNames[pathNames.length - 1] != menu.pagePath ? 
        pathNames[pathNames.length - 1] : menu.subMenus[0].id;

    useEffect(() => {
        props.onCurrentSelectedSubMenuIDChanged && props.onCurrentSelectedSubMenuIDChanged(currentSelectedSubMenuItem, menu.subMenus.find(i => i.id == currentSelectedSubMenuItem));
    }, [currentSelectedSubMenuItem]);

    let [isCollapse, setCollapse] = useState(false);
    let subMenus = (isCollapse ? menu.subMenus : menu.subMenus.filter(i => i.id == currentSelectedSubMenuItem )) || [menu.subMenus[0]];

    return (
        <div className="submenu">
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
            <div className={classNames("submenu-bd-mobile", { active: isCollapse })} onClick={() => setCollapse(!isCollapse)}>
                <div className="bd">
                    {
                        subMenus.map((item, key) => (
                            <Link 
                                className={classNames("item", { active: item.id == currentSelectedSubMenuItem })} 
                                to={`/${menu.pagePath}/${item.id}`} 
                                key={item.title}
                                
                            >
                                { item.title }
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default React.memo(SubMenu);