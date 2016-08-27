import React, { Component, PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { okAlert, cancelAlert } from '../../actions/modal_actions'
import { connect } from 'react-redux'

class AlertModal extends Component {
  static get propTypes() {
    return {
      okAlert: PropTypes.func,
      cancelAlert: PropTypes.func,
      modal: PropTypes.object,
    }
  }

  constructor() {
    super()
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleOk() {
    this.props.okAlert()
  }
  handleCancel() {
    this.props.cancelAlert()
  }

  render() {
    return (
      <div>
        <Modal.Body>
          {this.props.modal.body}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleCancel}>Cancel</Button>
          <Button onClick={this.handleOk} bsStyle="primary">Ok</Button>
        </Modal.Footer>
      </div>
    )
  }
}

export default connect(null, { okAlert, cancelAlert })(AlertModal)
