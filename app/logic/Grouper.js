import _ from "lodash";
import { ALL, BY_CONTEXT, BY_PROJECT } from '../constants';

export default class Grouper {
  constructor(todos) {
    this.todos = todos;
  }

  grouped(grouping) {
    switch(grouping) {
      case ALL: return this.byAll();
      case BY_CONTEXT: return this.byContext();
      case BY_PROJECT: return this.byProject();
    }
  }

  byContext() {
    let grouped = [];
    _.map(this._getContexts(), (context) => {
      grouped.push({title: context, todos: this._todosWithContext(context) });
    });
    let contextLengths = _.map(this.todos, (todo) => { return todo.contexts.length });
    if (_.some(contextLengths, (l) => { return l == 0 })) {
      grouped.push({title: "No contexts", todos: this._todosWithNoContext()})
    }
    return grouped;
  }

  byProject() {
    let grouped = [];
    _.map(this._getProjects(), (project) => {
      grouped.push({title: project, todos: this._todosWithProject(project) });
    });
    let projectLengths = _.map(this.todos, (todo) => { return todo.projects.length });
    if (_.some(projectLengths, (l) => { return l == 0 })) {
      grouped.push({title: "No projects", todos: this._todosWithNoProject()})
    }
    return grouped;
  }

  byAll() {
    return [{title: "All todos", todos: this.todos}];
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

  _todosWithNoContext() {
    return _.filter(this.todos, (todo) => { return todo.contexts.length === 0 });
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

  _todosWithNoProject() {
    return _.filter(this.todos, (todo) => { return todo.projects.length === 0 });
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
          projects.push(project)
        }
      });
    });
    return projects;
  }
}
