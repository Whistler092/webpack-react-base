import React from 'react';

import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/*Reducers*/
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

import Home from '../pages/containers/home';
// import data from '../api.json';

/* 
const initialState = {
    data: {
        //...data,        
        entities: data.entities,
        categories: data.result.categories,
        search: []
    },
    modal: {
        visibility: false,
        mediaId: null,
    }
} */

const store = createStore(
    reducer,
    map(), //initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log("initial data",store.getState());
// console.log("normalizedData",normalizedData);

const homeContainer = document.getElementById("home-container");

render(
<Provider store={store}>
    <Home />
</Provider>
, homeContainer);