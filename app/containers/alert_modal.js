import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { createTodo } from '../actions/todo_actions';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';

class AlertModal extends Component {
  render() {
    return(
      <div>
        <Modal.Body>
          {this.props.modal.body}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide.bind(this)}>Cancel</Button>
          <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Ok</Button>
        </Modal.Footer>
      </div>
    )
  }
  handleSubmit(e) {
    this.props.modal.onOk()
  }
  handleHide() {
    this.props.toggleModal(false)
  }
}

export default connect(null, { createTodo })(AlertModal);
