import { combineReducers } from 'redux'
import todos from './todos_reducer'
import modal from './modal_reducer'
import alerts from './alerts_reducer'

export default combineReducers({ todos, modal, alerts })
