import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import { toggleModal } from '../actions/modal_actions';
import { ADD_TODO_MODAL } from '../constants';
import AddTodoModal from './add_todo_modal';

const MODAL_COMPONENTS = {
  ADD_TODO_MODAL: AddTodoModal
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
