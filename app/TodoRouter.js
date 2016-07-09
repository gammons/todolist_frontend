import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import FilterActionCreators from './actions/FilterActionCreators';
import Todolist from './components/Todolist';

export default class TodoRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Todolist}>
          <IndexRedirect to="/unarchived/today/all" />
        </Route>
        <Route path="/:archived/:due/:group" onEnter={this.changeFiltering.bind(this)} component={Todolist}/>
      </Router>
    )
  }
  changeFiltering(params, replace) {
    FilterActionCreators.changeRoute(params.params);
  }
}
