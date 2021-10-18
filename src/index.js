import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './stores';
import Main from './main';
import './styles/index.less';

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root'),
);
