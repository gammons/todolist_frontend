import React from 'react'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import App from './containers/app'
import AddTodo from './containers/add_todo'
import Todolist from './containers/todolist'

const TodoRouter = () =>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/unarchived/today/all" />
      <Route path="/:show/:due/:group" component={Todolist} />
      <Route path="/add" component={AddTodo} />
    </Route>
  </Router>

export default TodoRouter
