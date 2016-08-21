import * as constants from '../constants';
import moment from 'moment';

import TodoLogic from '../logic/todo_logic';

export function fetchTodos(archived, due, group) {
  return {
    type: constants.FETCH_TODOS
  }
}

export function startCreateTodo() {
  return { type: constants.START_CREATE_TODO_SAGA }
}

export function createTodo(subject, due) {
  const logic = new TodoLogic();
  let todo = logic.addTodo(subject, due)
  return { type: constants.CREATE_TODO, todo: todo }
}

export function toggleComplete(todo) {
  todo.completed = !todo.completed;
  return updateTodo(todo)
}

export function dueToday(todo) {
  const logic = new TodoLogic();
  todo.due = moment();
  todo = logic.updateTodo(todo);
  return updateTodo(todo)
}

export function dueTomorrow(todo) {
  const logic = new TodoLogic();
  todo.due = moment().add(1, "day")
  todo = logic.updateTodo(todo);
  return updateTodo(todo);
}

export function toggleArchived(todo) {
  todo.archived = !todo.archived
  return {
    type: constants.TOGGLE_ARCHIVE_TODO,
    todo: todo
  }
}

export function addTodo(todo) {
  return { type: constants.ADD_TODO, todo: todo }
}

export function updateTodo(todo) {
  return { type: constants.UPDATE_TODO, todo: todo }
}

