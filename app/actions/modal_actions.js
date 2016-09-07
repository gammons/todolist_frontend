import * as constants from '../constants'

export function openModal(component, extraProps = {}) {
  return {
    type: constants.MODAL,
    component,
    ...extraProps,
  }
}

export function openConfirmDialog(body) {
  return {
    type: constants.CONFIRM_DIALOG_MODAL,
    body,
  }
}

export function cancelConfirmDialog() {
  return {
    type: constants.CONFIRM_DIALOG_CANCEL,
  }
}

export function okConfirmDialog() {
  return {
    type: constants.CONFIRM_DIALOG_OK,
  }
}
