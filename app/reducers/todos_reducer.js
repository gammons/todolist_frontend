import { combineReducers } from 'redux';
import { NONE, SHOW_UNARCHIVED, TODAY, ADD_TODO } from '../constants'

const INITIAL_STATE = {
  todos: [],
  grouping: NONE,
  show: SHOW_UNARCHIVED,
  dueFilter: TODAY,
  searchTerm: null,
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.todo]}
      break;
  }
  return state;
}
