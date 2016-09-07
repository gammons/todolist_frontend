import * as constants from '../constants'

const INITIAL_STATE = {
  openAlerts: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.OPEN_ALERT:
      return {
        openAlerts: [...state.openAlerts, { body: action.body }],
      }
    case constants.DISMISS_ALERT:
      return {
        ...state,
        openAlerts: state.openAlerts.slice(1),
      }
    default:
      return state
  }
}
