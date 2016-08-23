import * as constants from '../constants'
import _ from 'lodash';

const INITIAL_STATE = {
  todos: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case constants.ADD_TODO:
      return {...state, todos: [...state.todos, action.todo]}

    case constants.UPDATE_TODO:
      return updateTodo(state, action);

    case constants.DELETE_TODO:
      return deleteTodo(state, action);

    case constants.TODOS_FETCHED:
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

const deleteTodo = (state, action) => {
  let idx = _.findIndex(state.todos, (todo) => { return todo.id === action.todo.id })
  let newState = {...state, todos: [...state.todos.slice(0,idx), ...state.todos.slice(idx+1)]}
  return newState
}
