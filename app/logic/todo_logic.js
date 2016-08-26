import moment from 'moment';

export default class TodoLogic {
  addTodo(subject, due) {
    if (due != null) {
      due = moment(due).format("YYYY-MM-DD");
    }
    let todo = {subject: subject, due: due, projects: [], contexts: [], completed: false, archived: false}
    todo.contexts = this._getContexts(todo.subject);
    todo.projects = this._getProjects(todo.subject);
    return todo
  }

  updateTodo(todo) {
    todo.contexts = this._getContexts(todo.subject);
    todo.projects = this._getProjects(todo.subject);
    if (todo.due != null) {
      todo.due = moment(todo.due).format("YYYY-MM-DD");
    }
    return todo
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

