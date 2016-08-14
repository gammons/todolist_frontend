import { TOGGLE_MODAL, TOGGLE_ALERT, ALERT_MODAL } from '../constants'

export default (state = {open: false}, action) => {
  switch(action.type) {
    case TOGGLE_MODAL:
      return { open: action.open, component: action.component }
    case TOGGLE_ALERT:
      return { open: action.open, component: ALERT_MODAL, body: action.body, onOk: action.onOk }
  }
  return state;
}
