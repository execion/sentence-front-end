import {sentenceReducer} from './sentence/sentenceReducer';
import {gameReducer} from './game/gameReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './login/loginReducer';

const rootReducer = combineReducers({
    gameState: gameReducer,
    sentenceState: sentenceReducer,
    loginState: loginReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));