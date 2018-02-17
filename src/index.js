import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './css/index.css';
import Main from './containers/Main';
import registerServiceWorker from './registerServiceWorker';


const app = (
    <Provider store={store}>
        <Main  />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
