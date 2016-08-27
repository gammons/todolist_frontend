import moment from 'moment'
import _ from 'lodash'

export default class TodoLogic {
  addTodo(subject, inDue) {
    let due = inDue

    if (due != null) {
      due = moment(due).format('YYYY-MM-DD')
    }
    const todo = { subject, due, projects: [], contexts: [], completed: false, archived: false }
    todo.contexts = this.getContexts(todo.subject)
    todo.projects = this.getProjects(todo.subject)
    return todo
  }

  updateTodo(inTodo) {
    const todo = inTodo

    todo.contexts = this.getContexts(todo.subject)
    todo.projects = this.getProjects(todo.subject)

    if (todo.due != null) {
      todo.due = moment(todo.due).format('YYYY-MM-DD')
    }
    return todo
  }

  getContexts(subject) {
    const regex = /@\w+/g
    const matches = subject.match(regex)
    if (matches === null) {
      return []
    }
    return _.map(matches, (match) => match.replace(/@/, ''))
  }

  getProjects(subject) {
    const regex = /\+\w+/g
    const matches = subject.match(regex)
    if (matches === null) {
      return []
    }
    return _.map(matches, (match) => match.replace(/\+/, ''))
  }
}
