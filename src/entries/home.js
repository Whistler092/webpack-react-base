import React from 'react';

import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/*Reducers*/
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

import Home from '../pages/containers/home';

/*Middleware*/
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

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


//Construyendo un middleware
/* function logger({ getState, dispatch}){
    //Metodo para desparchar el siguiente middeware
    return (next) => {
        //Las arrow function heredan el contexto de arriba
        // esta funcion regresa la ejecuciòn del parametro next
        return (action) => {
            console.log('Acción a enviar', action);
            const value = next(action)
            console.log('nuevo estado ', getState().toJS());
            return value;
        }
    }
} */
/* const logger = ({ getState, dispatch}) => next => action => {
    console.log('Acción a enviar', action);
    const value = next(action)
    console.log('nuevo estado ', getState().toJS());
    return value;
}
 */


const store = createStore(
    reducer,
    map(), //initialState,
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log("initial data",store.getState());
// console.log("normalizedData",normalizedData);

const homeContainer = document.getElementById("home-container");

render(
<Provider store={store}>
    <Home />
</Provider>
, homeContainer);