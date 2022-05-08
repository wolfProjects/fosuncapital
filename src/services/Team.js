import qs from 'qs';

const team = (server) => {
    return ({
        fetchMemberList: fetchMemberList(server),
    });
}

const fetchMemberList = (axios) => subMenuID => {
    return axios.get('teams', {
        params: {
            filters: {
                menu: {
                    id: {
                        $eq: subMenuID
                    }
                }
            },
            pagination: {
                pageSize: 999,
            },
            populate: ['avatar']
        },
        paramsSerializer: params => qs.stringify(params, {
            encodeValuesOnly: true,
        })
    });
};

export default team;