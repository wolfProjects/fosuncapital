import qs from 'qs';

const perspective = (server) => {
    return ({
        fetchArticleList: fetchArticleList(server),
        fetchBanner: fetchBanner(server),
    });
}

const fetchArticleList = (axios) => subMenuID => {
    return axios.get('perspectives', {
        params: {
            filters: {
                menu: {
                    id: {
                        $eq: subMenuID
                    }
                }
            },
            populate: ['thumb', 'avatar']
        },
        paramsSerializer: params => qs.stringify(params, {
            encodeValuesOnly: true,
        })
    });
};

const fetchBanner = (axios) => subMenuID => {
    return axios.get(`submenus/${subMenuID}`, {
        params: {
            populate: ['banner']
        },
        paramsSerializer: params => qs.stringify(params, {
            encodeValuesOnly: true,
        })
    });
};

export default perspective;