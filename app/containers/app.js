import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';

import TodolistIconMenu from '../components/todolist_icon_menu'
import TodoTabs from '../components/todo_tabs'
import AddTodo from './add_todo';

export default class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const { due, show, group } = this.props.params;

    return(
      <div>
        <AppBar title="Todolist"
          showMenuIconButton={false}
          iconElementRight={<TodolistIconMenu due={due} show={show} group={group} />}
        />
        <TodoTabs due={due} show={show} group={group} />
        <Link to={{pathname: "/add", state: {modal: true, due: due, show: show, group: group}}}>Add todo</Link>
        {this.props.children}
      </div>
    )
  }
}
