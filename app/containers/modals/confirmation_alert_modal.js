import React, { Component, PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { okAlert } from '../../actions/modal_actions'
import { connect } from 'react-redux'

class ConfirmationAlertModal extends Component {
  static get propTypes() {
    return {
      okAlert: PropTypes.func,
      modal: PropTypes.object,
    }
  }

  constructor() {
    super()
    this.handleOk = this.handleOk.bind(this)
  }

  handleOk() {
    this.props.okAlert()
  }

  render() {
    return (
      <div>
        <Modal.Body>
          {this.props.modal.body}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleOk} bsStyle="primary">Ok</Button>
        </Modal.Footer>
      </div>
    )
  }
}

export default connect(null, { okAlert })(ConfirmationAlertModal)
