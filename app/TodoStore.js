export default class TodoStore {
  constructor(backend) {
    this.todos = []
    this.backend = backend;
  }
  load(todos) {
    this.todos = todos;
  }

  add(todo) {
    this.todos.push(todo);
    backend.save();
  }
  toggleComplete(id) {
    let todo = this.findById(id);
    console.log("todo is ", todo);
    todo.completed = !todo.completed;
    console.log("todo completed is ", todo.completed);
    this.backend.save();
  }

  findById(id) {
    for(let todo of this.todos) {
      if (todo.id === id) { return todo; }
    }
    return null;
  }
}
