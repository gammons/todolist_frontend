export default class TodoStore {
  constructor(backend) {
    this.backend = backend;
  }

  load(todos) {
    this.todos = todos;
  }

  add(todo) {
  }
}
