import React, { Component, PropTypes } from 'react'
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import DatePicker from 'react-bootstrap-date-picker'

import { createTodo } from '../../actions/todo_actions'
import { cancelConfirmDialog } from '../../actions/modal_actions'

class AddTodoModal extends Component {
  static get propTypes() {
    return {
      cancelConfirmDialog: PropTypes.func,
      createTodo: PropTypes.func,
    }
  }

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.subjectChange = this.subjectChange.bind(this)
    this.dueChange = this.dueChange.bind(this)
  }

  handleHide() {
    this.props.cancelConfirmDialog()
  }

  subjectChange(e) {
    this.subject = e.target.value
  }
  dueChange(e) {
    this.due = e
  }
  handleSubmit() {
    this.props.createTodo(this.subject, this.due)
  }

  render() {
    return (
      <div>
        <Modal.Header>
          <Modal.Title>Add todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="add-todo-form">
              <ControlLabel> Subject </ControlLabel>
              <FormControl
                onChange={this.subjectChange}
                type="text"
                placeholder="Enter subject"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Due</ControlLabel>
              <DatePicker onChange={this.dueChange} />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
          <Button onClick={this.handleSubmit} bsStyle="primary">Save changes</Button>
        </Modal.Footer>
      </div>
    )
  }
}

export default connect(null, { cancelConfirmDialog, createTodo })(AddTodoModal)
