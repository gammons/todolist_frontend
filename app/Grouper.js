import _ from "lodash";

export default class Grouper {
  constructor(todos) {
    this.todos = todos;
  }

  byContext() {
    let grouped = [];
    _.map(this._getContexts(), (context) => {
      grouped.push({title: context, todos: this._todosWithContext(context) });
    });
    return grouped;
  }

  byProject(todos) {
    let grouped = [];
    _.map(this._getProjects(), (project) => {
      grouped.push({title: project, todos: this._todosWithProject(project) });
    });
    return grouped;
  }

  byAll(todos) {
    return [{title: "All todos", todos: todos}];
  }

  _todosWithContext(context) {
    let ret = [];
    _.each(this.todos, (todo) => {
      if (_.includes(todo.contexts, context)) {
        ret.push(todo);
      }
    });
    return ret;
  }
  _todosWithProject(project) {
    let ret = [];
    _.each(this.todos, (todo) => {
      if (_.includes(todo.projects, project)) {
        ret.push(todo);
      }
    });
    return ret;
  }

  _getContexts() {
    let contexts = [];
    _.each(this.todos, (todo) => {
      _.each(todo.contexts, (context) => {
        if (!_.includes(contexts, context)) {
          contexts.push(context)
        }
      });
    });
    return contexts;
  }
  _getProjects() {
    let projects = [];
    _.each(this.todos, (todo) => {
      _.each(todo.projects, (project) => {
        if (!_.includes(projects, project)) {
          contexts.push(project)
        }
      });
    });
    return projects;
  }
}
