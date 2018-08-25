import React from 'react';

import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/*Reducers*/
import reducer from '../reducers/data';

import Home from '../pages/containers/home';
import data from '../api.json';



const initialState = {
    data: {
        ...data,        
    },
    search: []
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

const homeContainer = document.getElementById("home-container");

render(
<Provider store={store}>
    <Home />
</Provider>
, homeContainer);