import _ from 'lodash';

export default class TodoStore {
  constructor(backend) {
    this.todos = []
    this.backend = backend;
  }
  load(todos) {
    this.todos = todos;
  }

  addTodo(subject, due) {
    let todo = {id: this._nextId(), subject: subject, due: due, projects: [], contexts: [], completed: false, archived: false}
    this.todos.push(todo);
    this.backend.save();
  }

  _nextId() {
    let ids = _.map(this.todos, (todo) => { return todo.id })
    return _.max(ids) + 1;
  }

  toggleComplete(id) {
    let todo = this.findById(id);
    todo.completed = !todo.completed;
    this.backend.save();
  }

  findById(id) {
    for(let todo of this.todos) {
      if (todo.id === id) { return todo; }
    }
    return null;
  }
}
