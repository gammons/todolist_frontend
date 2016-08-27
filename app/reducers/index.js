import { combineReducers } from 'redux'
import todos from './todos_reducer'
import modal from './modal_reducer'

export default combineReducers({ todos, modal })
