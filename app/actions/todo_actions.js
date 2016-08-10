import { ADD_TODO, FETCH_TODOS, TOGGLE_COMPLETE } from '../constants';
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

export function toggleComplete(id) {
  const creator = new TodoCreator();
  const request = backend.toggleComplete(id)

  return {
    type: TOGGLE_COMPLETE,
    id: id,
    payload: request
  }

}
