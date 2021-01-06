import {sentenceReducer} from './sentence/sentenceReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './login/loginReducer';

const rootReducer = combineReducers({
    sentenceState: sentenceReducer,
    loginState: loginReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));