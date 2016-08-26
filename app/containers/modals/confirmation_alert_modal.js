import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { okAlert, cancelAlert } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';

class ConfirmationAlertModal extends Component {
  render() {
    return(
      <div>
        <Modal.Body>
          {this.props.modal.body}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleOk.bind(this)} bsStyle="primary">Ok</Button>
        </Modal.Footer>
      </div>
    )
  }
  handleOk(e) {
    this.props.okAlert()
  }
}

export default connect(null, { okAlert})(ConfirmationAlertModal);
