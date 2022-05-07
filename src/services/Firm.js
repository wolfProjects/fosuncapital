import qs from 'qs';

const firm = (server) => {
    return ({
        fetchFirmList: fetchFirmList(server),
    });
}

const fetchFirmList = (axios) => subMenuID => {
    return axios.get('firms', {
        params: {
            filters: {
                menu: {
                    id: {
                        $eq: subMenuID
                    }
                }
            },
            populate: ['thumb']
        },
        paramsSerializer: params => qs.stringify(params, {
            encodeValuesOnly: true,
        })
    });
};

export default firm;