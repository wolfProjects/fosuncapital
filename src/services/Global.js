import qs from 'qs';

const global = (server) => {
    return ({
        fetchNav: fetchNav(server),
        fetchBanner: fetchBanner(server),
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

const fetchBanner = (axios) => _ => {
    return axios.get('shijiao-chuangfuhui-banner', {
        params: {
            populate: 'banner'
        }
    });
};

export default global;