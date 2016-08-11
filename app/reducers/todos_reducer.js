import { ALL, SHOW_UNARCHIVED, TODAY, ADD_TODO, UPDATE_TODO, FETCH_TODOS, TOGGLE_COMPLETE } from '../constants'
import _ from 'lodash';

const INITIAL_STATE = {
  todos: [],
  error: false,
  errorMsg: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      if (action.error === true) {
        return { ...state, error: true, errorMsg: action.payload }
      }
      return {...state, todos: [...state.todos, action.payload]}
      break;

    case UPDATE_TODO:
      if (action.error === true) {
        return {...state, error: true, errorMsg: action.payload}
      }
      let idx = _.findIndex(state.todos, (todo) => { return todo.id === action.todo.id })

      let newState = {...state, todos: [...state.todos.slice(0,idx), _.cloneDeep(action.todo), ...state.todos.slice(idx+1)]}
      return newState
      break;

    case FETCH_TODOS:
      if (action.error === true) {
        return {...state, todos: [], error: true, errorMsg: action.payload}
      }
      return {...state, todos: action.payload}
      break;
  }
  return state;
}
