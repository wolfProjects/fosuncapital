import qs from 'qs';

const contact = (server) => {
    return ({
        fetchJobList: fetchJobList(server),
    });
}

const fetchJobList = (axios) => _ => {
    return axios.get('job-lists', {
        params: {
            populate: ['hrEmail']
        },
        paramsSerializer: params => qs.stringify(params, {
            encodeValuesOnly: true,
        })
    });
};

export default contact;