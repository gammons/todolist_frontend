import { ADD_TODO, UPDATE_TODO, FETCH_TODOS, TOGGLE_COMPLETE } from '../constants';
import Backend from '../backends/TestBackend';
import TodoCreator from '../logic/todo_creator';

const backend = new Backend();

export function fetchTodos(archived, due, group) {
  const request = backend.fetchTodos(archived, due, group);

  return {
    type: FETCH_TODOS,
    payload: request
  }
}

export function createTodo(subject, due) {
  const creator = new TodoCreator();
  const request = backend.addTodo(creator.addTodo(subject, due));

  return {
    type: ADD_TODO,
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
