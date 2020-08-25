import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import catsReducer from './reducers/catsReducer';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'

const store = createStore(catsReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
