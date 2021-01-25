import {sentenceReducer} from './sentence/sentenceReducer';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './login/loginReducer';
import { createStore, compose } from '@reduxjs/toolkit';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : 
        compose;
const rootReducer = combineReducers({
    sentenceState: sentenceReducer,
    loginState: loginReducer,
});

export const Store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);