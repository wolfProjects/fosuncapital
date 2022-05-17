import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import 'normalize.css';
import './index.scss';
import { init } from '@/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('[Init] start initialize app necessary data');
initApp(); 

function initApp () {
    init().then(_ => {
        console.log('[Initialized] initialized all requested common data');
        root.render(<Routes />);
    }).catch(e => {
        console.log('[Server Error] preparing to retry initApp after 1 second', e);
        setTimeout(initApp, 1000);
    });
}
