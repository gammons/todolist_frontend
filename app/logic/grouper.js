import _ from 'lodash'
import { ALL, BY_CONTEXT, BY_PROJECT } from '../constants'

export default class Grouper {
  constructor(todos) {
    this.todos = todos
  }

  grouped(grouping) {
    switch (grouping) {
      case ALL: return this.byAll()
      case BY_CONTEXT: return this.byContext()
      case BY_PROJECT: return this.byProject()
      default: return this.byAll()
    }
  }

  byContext() {
    const grouped = []
    _.map(this.getContexts(), (context) => {
      grouped.push({ title: context, todos: this.todosWithContext(context) })
    })
    const contextLengths = _.map(this.todos, (todo) => todo.contexts.length)
    if (_.some(contextLengths, (l) => l === 0)) {
      grouped.push({ title: 'No contexts', todos: this.todosWithNoContext() })
    }
    return grouped
  }

  byProject() {
    const grouped = []
    _.map(this.getProjects(), (project) => {
      grouped.push({ title: project, todos: this.todosWithProject(project) })
    })

    const projectLengths = _.map(this.todos, (todo) => todo.projects.length)
    if (_.some(projectLengths, (l) => l === 0)) {
      grouped.push({ title: 'No projects', todos: this.todosWithNoProject() })
    }
    return grouped
  }

  byAll() {
    return [{ title: 'All todos', todos: this.todos }]
  }

  todosWithContext(context) {
    const ret = []
    _.each(this.todos, (todo) => {
      if (_.includes(todo.contexts, context)) {
        ret.push(todo)
      }
    })
    return ret
  }

  todosWithNoContext() {
    return _.filter(this.todos, (todo) => todo.contexts.length === 0)
  }

  todosWithProject(project) {
    const ret = []
    _.each(this.todos, (todo) => {
      if (_.includes(todo.projects, project)) {
        ret.push(todo)
      }
    })
    return ret
  }

  todosWithNoProject() {
    return _.filter(this.todos, (todo) => todo.projects.length === 0)
  }

  getContexts() {
    const contexts = []
    _.each(this.todos, (todo) => {
      _.each(todo.contexts, (context) => {
        if (!_.includes(contexts, context)) {
          contexts.push(context)
        }
      })
    })
    return contexts
  }

  getProjects() {
    const projects = []
    _.each(this.todos, (todo) => {
      _.each(todo.projects, (project) => {
        if (!_.includes(projects, project)) {
          projects.push(project)
        }
      })
    })
    return projects
  }
}
