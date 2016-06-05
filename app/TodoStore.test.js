import TodoStore from './TodoStore'
import TestBackend from './backends/TestBackend'
import expect from 'expect';

describe('TodoStore', () => {
  it('nextId', () => {
    let backend = new TestBackend();
    let store = new TodoStore(backend);
    store.todos = [{id: 1, subject: 'test1'}];
    expect(store._nextId()).toEqual(2);
  });

  //it('add', () => {
  //  let backend = new TestBackend();
  //  let store = new TodoStore(backend);
  //  let todo = {id: 1, subject: "thing"};
  //  store.add(todo);
  //  expect(store.todos.length).toEqual(1);
  //});

});


