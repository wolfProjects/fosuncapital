import { COMMON_DATA_MAP } from './index';

const getSubMenu = pathName => {
    let path = pathName.split('/').filter(i => i != undefined && i.length)[0];
    return COMMON_DATA_MAP.get('nav').find(item => {
        return item.pagePath == path;
    });
};

const getNav = _ => COMMON_DATA_MAP.get('nav');

export default {
    getSubMenu,
    getNav
}