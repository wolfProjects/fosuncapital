import services from '@/services';

//  cache global common data
const COMMON_DATA_MAP = new Map();

//  preload navigation data with sub menu
const preloadNav = async () => {
    let nav = await services.Global.fetchNav();
    nav = nav.data.data.map(menu => {
        menu.attributes.subMenus = menu.attributes.subMenus.data.map(subMenu => ({
            id: subMenu.id,
            ...subMenu.attributes
        }));
        return ({
            ...menu.attributes
        })
    });

    COMMON_DATA_MAP.set('nav', nav);
}

//  init data
const init = async () => {
    await Promise.all([ preloadNav() ]);
}

export {
    COMMON_DATA_MAP,
    init
};