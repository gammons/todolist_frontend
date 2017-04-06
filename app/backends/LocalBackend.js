import _ from 'lodash'

export default class LocalBackend {
  constructor() {
    this.cachedTodos = null
  }

  fetchTodos() {
    return new Promise((resolve, reject) => {
      if (this.cachedTodos) {
        resolve(this.cachedTodos)
      } else {
        fetch('http://localhost:7890/todos')
          .then((resp) => resp.json())
          .then((json) => {
            this.cachedTodos = json
            resolve(json)
          })
          .catch((error) => { reject(error) })
      }
    })
  }

  add(todo) {
    const maxId = _.max(this.cachedTodos.map(t => t.id))
    todo.id = maxId + 1
    return this.save([...this.cachedTodos, todo])
  }

  update(todo) {
    const idx = _.findIndex(this.cachedTodos, (t) => t.id === todo.id)
    const todos = [...this.cachedTodos.slice(0, idx), todo, ...this.cachedTodos.slice(idx + 1)]
    return this.save(todos)
  }

  delete(todo) {
    const idx = _.findIndex(this.cachedTodos, (t) => t.id === todo.id)
    const todos = [...this.cachedTodos.slice(0, idx), ...this.cachedTodos.slice(idx + 1)]
    return this.save(todos)
  }

  save(todos) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:7890/todos', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify(todos),
      })
        .then((resp) => {
          this.cachedTodos = todos
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
