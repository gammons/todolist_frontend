export default class TodoStore {
  constructor() {
    this.todos = []
  }
  load(todos) {
    this.todos = todos;
  }

  add(todo) {
    this.todos.push(todo);
  }
}
