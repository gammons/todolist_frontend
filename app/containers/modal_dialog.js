import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import { toggleModal } from '../actions/modal_actions';
import { CONFIRMATION_ALERT_MODAL, ADD_TODO_MODAL, TOGGLE_ALERT } from '../constants';
import AddTodoModal from './add_todo_modal';
import AlertModal from './modals/alert_modal';
import ConfirmationAlertModal from './modals/confirmation_alert_modal';

const MODAL_COMPONENTS = {
  ADD_TODO_MODAL: AddTodoModal,
  ALERT_MODAL: AlertModal,
  CONFIRMATION_ALERT_MODAL: ConfirmationAlertModal
}

export default class ModalDialog extends Component {
  render() {
    if (!this.props.modal.component) {
      return null;
    }

    const SpecificModal = MODAL_COMPONENTS[this.props.modal.component]
    return(
      <Modal show={this.props.modal.open} onHide={this.handleHide.bind(this)}>
        <SpecificModal {...this.props} />
      </Modal>
    )
  }

  handleHide() {
    this.props.toggleModal(false);
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps, { toggleModal })(ModalDialog);
