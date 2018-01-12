import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './css/index.css';
import Connection from './Connection';
import registerServiceWorker from './registerServiceWorker';


const app = (
    <Provider store={store}>
        <Connection  />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
