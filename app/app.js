import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider  } from 'react-redux';

import createSagaMiddleware from 'redux-saga'

import todoSagas from './sagas'
import TodoRouter from './router';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const devTools = window.devToolsExtension || (() => noop => noop);

const middlewares = [
  sagaMiddleware
];

const enhancers = [
  applyMiddleware(...middlewares),
  devTools()
]

const store = createStore(
  reducers,
  compose(...enhancers)
)

sagaMiddleware.run(todoSagas)

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <TodoRouter />
      </Provider>
    );
  }
}

ReactDOM.render( <App />, document.getElementById('app'));
