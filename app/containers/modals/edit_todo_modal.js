import React, { Component, PropTypes } from 'react'
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import DatePicker from 'react-bootstrap-date-picker'
import moment from 'moment'

import { startUpdateTodo } from '../../actions/todo_actions'
import { cancelConfirmDialog } from '../../actions/modal_actions'

class EditTodoModal extends Component {
  static get propTypes() {
    return {
      modal: PropTypes.object,
      startUpdateTodo: PropTypes.func,
      cancelConfirmDialog: PropTypes.func,
    }
  }

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSubjectChange = this.onSubjectChange.bind(this)
    this.onDueChange = this.onDueChange.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  onSubjectChange(e) {
    this.props.modal.todo.subject = e.target.value
  }

  onDueChange(e) {
    this.props.modal.todo.due = e
  }

  handleSubmit() {
    this.props.startUpdateTodo(this.props.modal.todo)
  }

  handleHide() {
    this.props.cancelConfirmDialog()
  }

  isoDue(due) {
    if (due) {
      return moment(due).format()
    }
    return ''
  }

  render() {
    const todo = this.props.modal.todo
    return (
      <div>
        <Modal.Header>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="add-todo-form">
              <ControlLabel> Subject </ControlLabel>
              <FormControl
                onChange={this.onSubjectChange}
                type="text"
                placeholder="Enter subject"
                defaultValue={todo.subject}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Due</ControlLabel>
              <DatePicker value={this.isoDue(todo.due)} onChange={this.onDueChange} />
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

export default connect(null, { cancelConfirmDialog, startUpdateTodo })(EditTodoModal)
