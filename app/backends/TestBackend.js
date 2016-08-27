import _ from 'lodash'
import { todos as todoFixtures } from '../../test/test_helper'

let todos = todoFixtures

export default class TestBackend {
  constructor() {
    this.cachedTodos = null
  }

  fetchTodos() {
    return new Promise((resolve) => {
      if (this.cachedTodos) {
        resolve(this.cachedTodos)
      } else {
        const yes = () => {
          this.cachedTodos = _.cloneDeep(todos)
          resolve(this.cachedTodos)
        }
        setTimeout(yes, 400)
      }
    })
  }

  add(todo) {
    return new Promise((resolve) => {
      todos.push(todo)
      this.cachedTodos = null
      resolve()
    })
  }

  update(todo) {
    return new Promise((resolve) => {
      this.cachedTodos = null
      const idx = _.findIndex(todos, (t) => t.id === todo.id)
      todos = [...todos.slice(0, idx), todo, ...todos.slice(idx + 1)]
      resolve()
    })
  }

  delete(todo) {
    return new Promise((resolve) => {
      this.cachedTodos = null
      const idx = _.findIndex(todos, (t) => t.id === todo.id)
      todos = [...todos.slice(0, idx), ...todos.slice(idx + 1)]
      resolve()
    })
  }
}
