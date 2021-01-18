import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './Theme';
import App from './app';
import { Store } from './Store';
import {ThemeProvider} from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Provider store={Store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
