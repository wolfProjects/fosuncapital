import services from '@/services';

//  cache global common data
const COMMON_DATA_MAP = new Map();

//  locales
COMMON_DATA_MAP.set('locales', [
    { text: '简体中文', value: 'zh-Hans' },
    { text: 'English', value: 'en' }
]);

//  preload navigation data with sub menu
const preloadNav = async () => {
    let nav = await services.Global.fetchNav();
    nav = nav.data.data.map(menu => {
        //  reformat data
        menu.attributes.subMenus = menu.attributes.subMenus.data.map(subMenu => ({
            id: subMenu.id,
            ...subMenu.attributes
        }));
        delete menu.attributes.subMenus.data;
        return ({
            ...menu.attributes
        })
    });

    COMMON_DATA_MAP.set('nav', nav);
}

//  preload ui i18n config
const preloadUII18n = async () => {
    //  【local test】load local i18n file
    // if (process.env.NODE_ENV === 'development') {
    //     return; COMMON_DATA_MAP.set('uiConfig', UIi18n[services.getCurrentLocale()]);
    // }

    let uiConfig = await services.Global.fetchUII18n();
    COMMON_DATA_MAP.set('uiConfig', uiConfig.data.data.attributes.config);
}

//  init data
const init = async () => {
    await Promise.all([ preloadNav(), preloadUII18n() ]);
}

export {
    COMMON_DATA_MAP,
    init
};