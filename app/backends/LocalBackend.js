export default class LocalBackend {
  constructor() {
    this.cachedTodos = null;
  }

  fetchTodos() {
    return new Promise((resolve, reject) => {
      if (this.cachedTodos) {
        resolve(this.cachedTodos)
      } else {
        fetch("http://localhost:7890/todos")
          .then((resp) => { return resp.json() })
          .then((json) => {
            this.cachedTodos = json
            resolve(json)
          })
          .catch((error) => { reject(error) })
      }
    });
  }

  add(todo) {
    console.log("calling add todo")
    return this._save([...this.cachedTodos, todo])
  }

  update(todo) {
    let idx = _.findIndex(this.cachedTodos, (t) => { return t.id === todo.id });
    let todos = [...this.cachedTodos.slice(0,idx), todo, ...this.cachedTodos.slice(idx+1)]
    return this._save(todos)
  }

  delete(todo) {
    let idx = _.findIndex(this.cachedTodos, (t) => { return t.id === todo.id });
    let todos = [...this.cachedTodos.slice(0,idx), ...this.cachedTodos.slice(idx+1)]
    return this._save(todos)
  }

  _save(todos) {
    return new Promise((resolve, reject)  => {
      console.log("in save promise")
      fetch('http://localhost:7890/todos', {
        method: 'POST',
        headers: { 'Accept': 'application/json', },
        body: JSON.stringify(todos)
      })
        .then((resp) => {
          console.log("in then")
          this.cachedTodos = todos
          resolve(resp);
        })
        .catch((error) => {
          debugger;
          console.log("error is ", error)
          reject(error)
        });
    })
  }
}
