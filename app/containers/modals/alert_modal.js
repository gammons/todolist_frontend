import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { okAlert, cancelAlert } from '../../actions/modal_actions';
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
          <Button onClick={this.handleCancel.bind(this)}>Cancel</Button>
          <Button onClick={this.handleOk.bind(this)} bsStyle="primary">Ok</Button>
        </Modal.Footer>
      </div>
    )
  }
  handleOk(e) {
    this.props.okAlert()
  }
  handleCancel() {
    this.props.cancelAlert()
  }
}

export default connect(null, { okAlert, cancelAlert })(AlertModal);
