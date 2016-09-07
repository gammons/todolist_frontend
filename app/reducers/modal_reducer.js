import * as constants from '../constants'

const INITIAL_STATE = {
  open: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.MODAL:
      return { ...state, open: true, component: action.component, todo: action.todo }

    case constants.CONFIRM_DIALOG_MODAL:
      return { ...state, open: true, component: constants.CONFIRM_DIALOG_MODAL, body: action.body }

    case constants.CONFIRM_DIALOG_OK:
    case constants.CONFIRM_DIALOG_CANCEL:
      return { open: false }

    default: return state
  }
}
