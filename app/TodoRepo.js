import Grouper from "./Grouper";
import Constants from "./Constants/Constants";
import moment from "moment";

export default class TodoRepo {
  constructor(backend) {
    this.todos = []
    this.backend = backend;
  }
  load(todos) {
    this.todos = todos;
    _.each(this.todos, (todo) => { if (todo.due == "") todo.due = null });
  }

  addTodo(subject, due) {
    if (due != null) {
      due = moment(due).format("YYYY-MM-DD");
    }
    let todo = {id: this._nextId(), subject: subject, due: due, projects: [], contexts: [], completed: false, archived: false}
    todo.contexts = this._getContexts(todo.subject);
    todo.projects = this._getProjects(todo.subject);
    this.todos.push(todo);
    this.backend.save(this.todos);
  }

  updateTodo(id, subject, due) {
    let todo = this.findById(id);
    todo.subject = subject;
    todo.contexts = this._getContexts(todo.subject);
    todo.projects = this._getProjects(todo.subject);
    if (due != null) {
      due = moment(due).format("YYYY-MM-DD");
    }
    todo.due = due;
    this.backend.save(this.todos);
  }

  deleteTodo(id) {
    this.todos = _.filter(this.todos, (todo) => { return todo.id != id });
    this.backend.save(this.todos);
  }

  toggleArchived(id) {
    let todo = this.findById(id);
    todo.archived = !todo.archived;
    this.backend.save(this.todos);
  }

  unarchivedTodos() {
    return _.filter(this.todos, (todo) => { return !todo.archived });
  }

  grouped(grouping) {
    let grouper = new Grouper(this.unarchivedTodos());
    if (grouping === Constants.BY_CONTEXT) {
      return grouper.byContext(this.todos);
    } else if (grouping === Constants.BY_PROJECT) {
      return grouper.byProject(this.todos);
    }
    return grouper.byAll(this.unarchivedTodos());
  }

  toggleComplete(id) {
    let todo = this.findById(id);
    todo.completed = !todo.completed;
    this.backend.save(this.todos);
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
