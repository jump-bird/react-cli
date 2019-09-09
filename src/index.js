
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "./assets/style/reset.css"
import "./assets/style/common.css"

import store from './pages/store';
import Routers from './pages/routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}> 
        <Routers/> 
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
