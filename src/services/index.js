import axios from 'axios';
import Global from './Global';
import Home from './Home';
import Perspective from './Perspective';
import Team from './Team';
import Firm from './Firm';
import Contact from './Contact';
import tools from '@/libs/tools';
require('es6-promise').polyfill(); 

const updateLocale = newLocale => {
    localStorage.setItem('locale', newLocale);
    server.defaults.params.locale = newLocale;
};

//  instantiating axios
const server = axios.create({
    baseURL: process.env.END_POINT,
    headers: {},
    params: {
        locale: tools.getCurrentLocale(),
    },
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