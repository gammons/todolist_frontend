import React, { Component, PropTypes } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'

import { cancelAlert } from '../actions/modal_actions'
import AddTodoModal from './modals/add_todo_modal'
import EditTodoModal from './modals/edit_todo_modal'
import AlertModal from './modals/alert_modal'
import ConfirmationAlertModal from './modals/confirmation_alert_modal'

const MODAL_COMPONENTS = {
  ADD_TODO_MODAL: AddTodoModal,
  EDIT_TODO_MODAL: EditTodoModal,
  ALERT_MODAL: AlertModal,
  CONFIRMATION_ALERT_MODAL: ConfirmationAlertModal,
}

class ModalDialog extends Component {
  static get propTypes() {
    return {
      cancelAlert: PropTypes.func,
      modal: PropTypes.object,
    }
  }

  constructor() {
    super()
    this.handleHide = this.handleHide.bind(this)
  }

  handleHide() {
    this.props.cancelAlert()
  }

  render() {
    if (!this.props.modal.component) {
      return null
    }

    const SpecificModal = MODAL_COMPONENTS[this.props.modal.component]
    return (
      <Modal show={this.props.modal.open} onHide={this.handleHide}>
        <SpecificModal {...this.props} />
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps, { cancelAlert })(ModalDialog)
