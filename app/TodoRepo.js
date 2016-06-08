import Grouper from "./Grouper";

export default class TodoRepo {
  constructor(backend) {
    this.todos = []
    this.backend = backend;
  }
  load(todos) {
    this.todos = todos;
  }

  addTodo(subject, due) {
    let todo = {id: this._nextId(), subject: subject, due: due, projects: [], contexts: [], completed: false, archived: false}
    todo.contexts = this._getContexts(todo.subject);
    todo.projects = this._getProjects(todo.subject);
    this.todos.push(todo);
    this.backend.save();
  }

  grouped(grouping) {
    let grouper = new Grouper(this.todos);
    if (grouping === "context") {
      return grouper.byContext(this.todos);
    } else if (grouping === "project") {
      return grouper.byProject(this.todos);
    }
    return grouper.byAll(this.todos);
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

  _nextId() {
    let ids = _.map(this.todos, (todo) => { return todo.id })
    return _.max(ids) + 1;
  }

  _getContexts(subject) {
    let regex = /\@\w+/g;
    let matches = subject.match(regex);
    if (matches === null) {
      return [];
    }
    return _.map(matches, (match) => { return match.replace(/\@/,""); });
  }

  _getProjects(subject) {
    let regex = /\+\w+/g;
    let matches = subject.match(regex);
    if (matches === null) {
      return [];
    }
    return _.map(matches, (match) => { return match.replace(/\+/,""); });
  }
}
