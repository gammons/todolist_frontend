import { combineReducers } from 'redux';
import { ALL, SHOW_UNARCHIVED, TODAY, ADD_TODO, FETCH_TODOS } from '../constants'

const INITIAL_STATE = {
  todos: [],
  group: null,
  show: null,
  due: null,
  searchTerm: null,
  error: false,
  errorMsg: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.todo]}
      break;
    case FETCH_TODOS:
      if (action.error == true) {
        return {...state, todos: [], error: true, errorMsg: action.payload}
      }
      return {...state, todos: action.payload}
      break;
  }
  return state;
}
