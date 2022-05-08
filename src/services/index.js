import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'
import Global from './Global';
import Home from './Home';
import Perspective from './Perspective';
import Team from './Team';
import Firm from './Firm';
import Contact from './Contact';
require('es6-promise').polyfill(); 

// create `axios-cache-adapter` instance
const cache = setupCache({
    maxAge: 15 * 60 * 1000,
    exclude: {
        query: false,
    }
})

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
    },
    adapter: cache.adapter
});

export default {
    Global: Global(server),
    Home: Home(server),
    Perspective: Perspective(server),
    Team: Team(server),
    Firm: Firm(server),
    Contact: Contact(server),
    updateLocale
};