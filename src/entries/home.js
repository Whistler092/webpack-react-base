import React from 'react';

import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/*Reducers*/
import reducer from '../reducers/data';

import Home from '../pages/containers/home';
// import data from '../api.json';
import data from '../schemas/index';


const initialState = {
    data: {
        //...data,        
        entities: data.entities,
        categories: data.result.categories
    },
    search: []
}

const store = createStore(
    reducer,
    initialState,
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