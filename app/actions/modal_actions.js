import { TOGGLE_MODAL } from '../constants'

export function toggleModal(open, component, title) {
  return {
    type: TOGGLE_MODAL,
    open: open,
    component: component
  }
}
