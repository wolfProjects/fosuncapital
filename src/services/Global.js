import qs from 'qs';

const global = (server) => {
    return ({
        fetchNav: fetchNav(server),
        fetchUII18n: fetchUII18n(server),
    });
}

const fetchNav = (axios) => _ => {
    return axios.get('navs', {
        params: {
            populate: [ 
                'subMenus', 
                'subMenus.banner'
            ],
            fields: [
                'title',
                'description',
                'pagePath',
            ]
        },
        paramsSerializer: params => qs.stringify(params, {
            encodeValuesOnly: true,
        })
    });
};

const fetchUII18n = (axios) => _ => {
    return axios.get('ui-i18n', {
        params: {
        }
    });
};

export default global;