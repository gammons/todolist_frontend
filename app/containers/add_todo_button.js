import React, { Component } from 'react';
import { startCreateTodo } from '../actions/todo_actions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { ADD_TODO_MODAL } from '../constants';

export class AddTodoButton extends Component {
  render() {
    return <Button onClick={this.props.startCreateTodo}>Add todo</Button>
  }
}

export default connect(null, { startCreateTodo })(AddTodoButton);
