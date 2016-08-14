import { TOGGLE_MODAL, TOGGLE_ALERT } from '../constants'
import { archiveTodo } from './todo_actions';

export function toggleModal(open, component, title) {
  return {
    type: TOGGLE_MODAL,
    open: open,
    component: component
  }
}

export function toggleAlert(open, body, onOk) {
  return {
    type: TOGGLE_ALERT,
    open: open,
    body: body,
    onOk: onOk
  }
}

export function archiveAlert(open, onOk) {
  return toggleAlert(open,
    "Are you sure you wish to archive this todo?",
    onOk
  )
}
