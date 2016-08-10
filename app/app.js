import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider  } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import TodoRouter from './router';
import reducers from './reducers';

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

class App extends React.Component {
  render() {
    return(
      <Provider store={createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension())}>
        <TodoRouter />
      </Provider>
    );
  }
}

const boot = () => {
  ReactDOM.render( <App />, document.getElementById('app'));
}
boot();
