import { ALL, SHOW_UNARCHIVED, TODAY, ADD_TODO, UPDATE_TODO, FETCH_TODOS, TOGGLE_COMPLETE } from '../constants'
import _ from 'lodash';

const INITIAL_STATE = {
  todos: [],
  error: false,
  errorMsg: null
}

export default (state = INITIAL_STATE, action) => {
  if (action.error === true) {
    return {...state, error: true, errorMsg: action.payload}
  }

  switch(action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.payload]}

    case TOGGLE_COMPLETE:
      return toggleCompleteTodo(state, action);

    case FETCH_TODOS:
      return {...state, todos: action.payload}
      break;
  }
  return state;
}

const toggleCompleteTodo = (state, action) => {
  let todo = _.find(state.todos, (todo) => { return todo.id === action.id })
  let idx = _.findIndex(state.todos, (todo) => { return todo.id === action.id })
  todo.completed = !todo.completed
  let newState = {...state, todos: [...state.todos.slice(0,idx), _.cloneDeep(todo), ...state.todos.slice(idx+1)]}
  return newState
}
