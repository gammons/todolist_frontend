import * as constants from '../constants'

export default (state = { open: false }, action) => {
  switch (action.type) {
    case constants.MODAL:
      return { open: true, component: action.component, todo: action.todo }

    case constants.ALERT:
      return { open: true, component: constants.ALERT_MODAL, body: action.body }

    case constants.CONFIRMATION_ALERT:
      return { open: true, component: constants.CONFIRMATION_ALERT_MODAL, body: action.body }

    case constants.ALERT_OK:
    case constants.ALERT_CANCEL:
      return { open: false }

    default: return state
  }
}
