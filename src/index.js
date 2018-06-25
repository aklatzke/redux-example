import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import counter from './reducers';

let store = createStore(counter);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
)

registerServiceWorker();
