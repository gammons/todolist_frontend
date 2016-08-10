import { TOGGLE_MODAL } from '../constants'

export default (state = {open: false}, action) => {
  switch(action.type) {
    case TOGGLE_MODAL:
      return { open: action.open, component: action.component }
  }
  return state;
}
