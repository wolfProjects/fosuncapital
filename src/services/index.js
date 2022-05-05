import axios from 'axios';
import Global from './Global';
require('es6-promise').polyfill(); 

// tools for maintain locale
const getDefaultLocale = () => {
    return localStorage.getItem('locale') || process.env.DEFAULT_LOCALE
};

const updateLocale = newLocale => {
    localStorage.setItem('locale', newLocale);
    server.defaults.params.locale = newLocale;
};

//  instantiating axios
const server = axios.create({
    baseURL: process.env.END_POINT,
    headers: {},
    params: {
        locale: getDefaultLocale(),
    }
});

export default {
    Global: Global(server),
    updateLocale
};