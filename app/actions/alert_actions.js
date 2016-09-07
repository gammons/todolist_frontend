import * as constants from '../constants'

export function openAlert(body) {
  return {
    type: constants.OPEN_ALERT,
    body,
  }
}

export function dismissAlert() {
  return {
    type: constants.DISMISS_ALERT,
  }
}
