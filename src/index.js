import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import 'normalize.css';
import './index.css';
import { init } from '@/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('[Init] start initialize app necessary data');

init().then(_ => {
    console.log('[Initialized] initialized all requested common data');
    root.render(<Routes />);
})
