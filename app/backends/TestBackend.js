import Backend from './Backend';
import { todos as todoFixtures } from '../../test/test_helper'

let todos = todoFixtures

export default class TestBackend extends Backend {
  constructor() {
    super();
    this.cachedTodos = null;
  }

  fetchTodos() {
    return new Promise((resolve, reject) => {
      if (this.cachedTodos) {
        resolve(this.cachedTodos)
      } else {
        let yes = () => {
          this.cachedTodos = _.cloneDeep(todos)
          resolve(this.cachedTodos)
        }
        setTimeout(yes, 400);
      }
    });
  }

  add(todo) {
    let promise = new Promise((resolve, reject) => {
      //reject("Can't connect with backend")
      todos.push(todo);
      this.cachedTodos = null
      resolve();
    });
    return promise;
  }

  update(todo) {
    return new Promise((resolve, reject) =>  {
      this.cachedTodos = null
      let idx = _.findIndex(todos, (t) => { return t.id === todo.id });
      todos = [...todos.slice(0,idx), todo, ...todos.slice(idx+1)]
      //reject("didn't work")
      resolve()
    });
  }

  delete(todo) {
    return new Promise((resolve, reject) =>  {
      this.cachedTodos = null
      let idx = _.findIndex(todos, (t) => { return t.id === todo.id });
      todos = [...todos.slice(0,idx), ...todos.slice(idx+1)]
      //reject("didn't work")
      resolve()
    });
  }
}
