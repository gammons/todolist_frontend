import { ADD_TODO } from '../constants';
import Backend from '../backends/TestBackend';
import TodoCreator from '../logic/todo_creator';

var TodoActions = {
  create(subject, due) {
    const backend = new Backend();
    const creator = new TodoCreator();
    const request = backend.addTodo(creator.addTodo(subject, due));

    return {
      type: ADD_TODO,
      payload: request
    }
  }
}

export default TodoActions;
