import TestBackend from './TestBackend'
import { SHOW_UNARCHIVED, ALL } from '../constants';

import expect from 'expect';

describe('fetchTodos()', () => {
  it('fetches todos', (done) => {
    const backend = new TestBackend()
    backend.fetchTodos().then((todos) => {
      expect(todos.length).toEqual(6)
      done()
    }).catch((err) => { console.log("err is ", err) })
  })
});

describe('add()', () => {
  it('adds a todo', (done) => {
    const backend = new TestBackend()
    const todo = { id: 10, subject: "yet another thing", completed: false }

    backend.add(todo).then(() => {
      backend.fetchTodos().then((todos) => {
        expect(todos.length).toEqual(7)
        expect(todos[todos.length - 1].subject).toEqual("yet another thing")
        done()
      })
    })
  })
})

describe("update()", () => {
  it('updates a todo', (done) => {
    const backend = new TestBackend()

    backend.fetchTodos().then((todos) => {
      let todo = todos[0]
      todo.subject = "updated"

      backend.update(todo).then(() => {
        backend.fetchTodos().then((todos) => {
          expect(todos[0].subject).toEqual("updated")
          done()
        })
      })
    })
  })
})


