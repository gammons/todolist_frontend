import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';
import moment from 'moment'

import { startUpdateTodo } from '../../actions/todo_actions';
import { cancelAlert } from '../../actions/modal_actions';

class EditTodoModal extends Component {
  render() {
    const todo = this.props.modal.todo
    return(
      <div>
        <Modal.Header>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="add-todo-form">
              <ControlLabel> Subject </ControlLabel>
              <FormControl
                onChange={this.subjectChange.bind(this)}
                type="text"
                placeholder="Enter subject"
                defaultValue={todo.subject}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Due</ControlLabel>
              <DatePicker value={this.isoDue(todo.due)} onChange={this.dueChange.bind(this)} />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide.bind(this)}>Close</Button>
          <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save changes</Button>
        </Modal.Footer>
      </div>
    )
  }

  isoDue(due) {
    if (due) {
      return moment(due).format()
    }
  }

  subjectChange(e) {
    this.props.modal.todo.subject = e.target.value
  }

  dueChange(e) {
    this.props.modal.todo.due = e
  }

  handleSubmit(e) {
    this.props.startUpdateTodo(this.props.modal.todo)
  }

  handleHide() {
    this.props.cancelAlert()
  }
}

export default connect(null, { cancelAlert, startUpdateTodo })(EditTodoModal);
