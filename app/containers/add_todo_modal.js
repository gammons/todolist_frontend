import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { createTodo } from '../actions/todo_actions';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';

class AddTodoModal extends Component {
  render() {
    return(
      <div>
        <Modal.Header>
          <Modal.Title>Add todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="add-todo-form">
              <ControlLabel> Subject </ControlLabel>
              <FormControl onChange={this.subjectChange.bind(this)}type="text" placeholder="Enter subject" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Due</ControlLabel>
              <DatePicker onChange={this.dueChange.bind(this)} />
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
  subjectChange(e) {
    this.subject = e.target.value
  }
  dueChange(e) {
    this.due = e;
  }
  handleSubmit(e) {
    this.props.createTodo(this.subject, this.due)
    this.props.toggleModal(false)
  }
  handleHide() {
    this.props.toggleModal(false)
  }
}

export default connect(null, { createTodo })(AddTodoModal);
