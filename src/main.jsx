import React from 'react';
import ReactDom from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
// import App from './HelloWorldAPP';
// import { HelloWorldAPP } from './HelloWorldAPP';

import './style.css';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola, soy Jorge Luis Paredes" /> */}
        <CounterApp value={ 20 } />
    </React.StrictMode>
)