import Grouper from "./Grouper";
import DateFilter from "./DateFilter";
import Constants from "./constants/Constants";
import moment from "moment";

export default class TodoRepo {
  constructor() {
    this.todos = []
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
  }

  deleteTodo(id) {
    this.todos = _.filter(this.todos, (todo) => { return todo.id != id });
  }

  toggleArchived(id) {
    let todo = this.findById(id);
    todo.archived = !todo.archived;
  }

  fetch(grouping, show, dueFilter, searchTerm) {
    let dateFilter = new DateFilter(this._todosByType(show));
    let filtered = dateFilter.filterBy(dueFilter);

    if (searchTerm != null) {
      filtered = this._filterBySearchTerm(filtered, searchTerm);
    }

    let grouper = new Grouper(filtered);

    if (grouping === Constants.BY_CONTEXT) {
      return grouper.byContext();
    } else if (grouping === Constants.BY_PROJECT) {
      return grouper.byProject();
    }
    return grouper.byAll();
  }

  _filterBySearchTerm(todos, searchTerm) {
    return _.filter(todos, (todo) => { return todo.subject.includes(searchTerm) });
  }

  _todosByType(show) {
    if (show === Constants.SHOW_UNARCHIVED) {
      return this._unarchivedTodos();
    } else {
      return this._archivedTodos();
    }
  }

  _unarchivedTodos() {
    return _.filter(this.todos, (todo) => { return !todo.archived });
  }
  _archivedTodos() {
    return _.filter(this.todos, (todo) => { return todo.archived });
  }


  toggleComplete(id) {
    let todo = this.findById(id);
    todo.completed = !todo.completed;
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
