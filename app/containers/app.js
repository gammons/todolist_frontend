import React, { Component } from 'react';
import { Link } from 'react-router';

import AddTodo from './add_todo';

export default class App extends Component {
  render() {
    return(
      <div>
        <h1>Todolist</h1>
        <Link to="/add">Add todo</Link>
        {this.props.children}
      </div>
    )
  }
}
