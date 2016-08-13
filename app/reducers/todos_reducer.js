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
      return {...state, todos: [...state.todos, action.todo]}

    case UPDATE_TODO:
      return updateTodo(state, action);

    case FETCH_TODOS:
      return {...state, todos: action.payload}
      break;
  }
  return state;
}

const updateTodo = (state, action) => {
  let idx = _.findIndex(state.todos, (todo) => { return todo.id === action.todo.id })
  let newState = {...state, todos: [...state.todos.slice(0,idx), _.cloneDeep(action.todo), ...state.todos.slice(idx+1)]}
  return newState
}
