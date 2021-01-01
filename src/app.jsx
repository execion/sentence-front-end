import React from 'react'
import thunk from 'redux-thunk';
import GameLayout from './layout/GameLayout'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import sentenceReducer from './sentence/sentenceReducer';
import { getSentences } from './sentence/actions';
import { Provider } from 'react-redux';
import { gameReducer } from './game/gameReducer';

const middleware = [thunk];

const store = createStore(
    combineReducers({
        sentenceState: sentenceReducer,
        gameState: gameReducer
    }),
    applyMiddleware(...middleware)
);

store.dispatch(getSentences());

const App = () => {
    return (
        <Provider store={store}>
            <GameLayout />
        </Provider>
    );
}

export default App;
