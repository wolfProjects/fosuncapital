import qs from 'qs';

const team = (server) => {
    return ({
        fetchTab: fetchTab(server),
    });
}

const fetchTab = (axios) => subMenuID => {
    return axios.get('home-tabs', {
        params: {
            populate: [ 'mobileBackground', 'pcBackground' ],
        },
        paramsSerializer: params => qs.stringify(params, {
            encodeValuesOnly: true,
        })
    });
};

export default team;