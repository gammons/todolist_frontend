import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import App from './containers/app';
import AddTodo from './containers/add_todo';
import Todolist from './containers/todolist';

export default class TodoRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/unarchived/today/all" />
          <Route path="/:archived/:due/:group" component={Todolist}/>
          <Route path="/add" component={AddTodo}/>
        </Route>
      </Router>
    )
  }
}
