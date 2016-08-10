import React, { Component } from 'react';
import { toggleModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { ADD_TODO_MODAL } from '../constants';

class AddTodoButton extends Component {
  render() {
    return <Button onClick={this.handleOpenAddTodo.bind(this)}>Add todo</Button>
  }

  handleOpenAddTodo() {
    this.props.toggleModal(true, ADD_TODO_MODAL);
  }
}

export default connect(null, { toggleModal })(AddTodoButton);
