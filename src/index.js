import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import { QueryProvider } from '@tevhooks/use-media-query'
import 'normalize.css';
import './index.scss';
import { init } from '@/Data';


//  media query break points
const breakpoints = {
    mobile: 428,
    table: 1024,
    laptop: 1480
};

//  init app
initApp(); 

function initApp () {
    console.log('[Init] start initialize app necessary data');
    
    init().then(_ => {
        console.log('[Initialized] initialized all requested common data');

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <QueryProvider breakpoints={breakpoints}>
                <Routes />
            </QueryProvider>      
        );
    }).catch(e => {
        console.log('[Server Error] preparing to retry initApp after 1 second', e);
        setTimeout(initApp, 1000);
    });
}
