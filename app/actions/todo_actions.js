import { ADD_TODO, UPDATE_TODO, FETCH_TODOS } from '../constants';
import Backend from '../backends/TestBackend';
import TodoLogic from '../logic/todo_logic';

const backend = new Backend();

export function fetchTodos(archived, due, group) {
  const request = backend.fetchTodos(archived, due, group);

  return {
    type: FETCH_TODOS,
    payload: request
  }
}

export function createTodo(subject, due) {
  const logic = new TodoLogic();
  let todo = logic.addTodo(subject, due)
  const request = backend.addTodo(todo)

  return {
    type: ADD_TODO,
    payload: request,
    todo: todo
  }
}

export function toggleComplete(todo) {
  todo.completed = !todo.completed;

  const request = backend.update(todo)

  return {
    type: UPDATE_TODO,
    todo: todo,
    payload: request
  }
}

export function dueToday(todo) {
  const logic = new TodoLogic();
  todo.due = new Date().toString()
  todo = logic.updateTodo(todo);
  const request = backend.update(todo)

  return {
    type: UPDATE_TODO,
    todo: todo,
    payload: request
  }
}

export function updateTodo(todo) {
  const request = backend.update(todo)

  return {
    type: UPDATE_TODO,
    todo: todo,
    payload: request
  }
}
