import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import sentenceReducer from './redux/sentenceReducer';
import { getSentences } from './redux/actions';
import Game from './components/Game';
import { gameReducer } from './redux/gameReducer';
import Header from './components/Header';

const middleware = [thunk];

const store = createStore(
  combineReducers({
    sentenceState: sentenceReducer,
    gameState: gameReducer
  }),
  applyMiddleware(...middleware)
);

store.dispatch(getSentences());

const GameLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Game />
    </Provider>
  );
}

export default GameLayout;