import classNames from 'classnames';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import menuData from '@/Data/menu';

const Page = () => {
    const pathName = useLocation().pathname;
    const [ menu ] = useState(menuData.getSubMenu(pathName));
    let pathNameGroup = pathName.split('/').filter(i => i.length);
    let currentSelectedSubMenuItem = pathNameGroup[pathNameGroup.length - 1] != menu.pagePath ? 
    pathNameGroup[pathNameGroup.length - 1] : menu.subMenus[0].id;

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
        </div>
    );
}

export default Page;