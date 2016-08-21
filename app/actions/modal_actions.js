import * as constants from '../constants'

export function openModal(component) {
  return {
    type: constants.MODAL,
    component: component
  }
}

export function openAlert(body) {
  return {
    type: constants.ALERT,
    body: body
  }
}

export function confirmationAlert(body) {
  return {
    type: constants.CONFIRMATION_ALERT,
    body: body
  }
}

export function cancelAlert() {
  return {
    type: constants.ALERT_CANCEL
  }
}

export function okAlert() {
  return {
    type: constants.ALERT_OK
  }
}
