import * as constants from '../constants'
import moment from 'moment'

import TodoLogic from '../logic/todo_logic'

export function fetchTodos() {
  return { type: constants.FETCH_TODOS }
}

export function startCreateTodo() {
  return { type: constants.START_CREATE_TODO_SAGA }
}

export function startUpdateTodo(todo) {
  const logic = new TodoLogic()
  return { type: constants.START_UPDATE_TODO_SAGA, todo: logic.updateTodo(todo) }
}

export function dueToday(todo) {
  let modifiedTodo = todo
  const logic = new TodoLogic()
  modifiedTodo.due = moment()
  modifiedTodo = logic.updateTodo(modifiedTodo)
  return { type: constants.START_UPDATE_TODO_SAGA, todo: modifiedTodo }
}

export function dueTomorrow(todo) {
  let modifiedTodo = todo
  const logic = new TodoLogic()
  modifiedTodo.due = moment().add(1, 'day')
  modifiedTodo = logic.updateTodo(modifiedTodo)
  return { type: constants.START_UPDATE_TODO_SAGA, todo: modifiedTodo }
}

export function startDeleteTodo(todo) {
  return { type: constants.START_DELETE_TODO_SAGA, todo }
}

export function startToggleComplete(todo) {
  const modifiedTodo = todo
  modifiedTodo.completed = !todo.completed
  return { type: constants.START_UPDATE_TODO_SAGA, todo }
}

export function startArchiveTodo(todo) {
  const modifiedTodo = todo
  modifiedTodo.archived = !todo.archived
  return { type: constants.START_ARCHIVE_TODO_SAGA, todo }
}

export function startUnarchiveTodo(todo) {
  const modifiedTodo = todo
  modifiedTodo.archived = !todo.archived
  return { type: constants.START_UNARCHIVE_TODO_SAGA, todo: modifiedTodo }
}

export function createTodo(subject, due) {
  const logic = new TodoLogic()
  const todo = logic.addTodo(subject, due)
  return { type: constants.CREATE_TODO, todo }
}

export function addTodo(todo) {
  return { type: constants.ADD_TODO, todo }
}

export function updateTodo(todo) {
  return { type: constants.UPDATE_TODO, todo }
}

export function deleteTodo(todo) {
  return { type: constants.DELETE_TODO, todo }
}
