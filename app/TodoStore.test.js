import TodoStore from './TodoStore'
import TestBackend from './backends/TestBackend'
import expect from 'expect';

describe('TodoStore', () => {
  it('add', () => {
    let store = new TodoStore();
    let todo = {id: 1, subject: "thing"};
    store.add(todo);
    expect(store.todos.length).toEqual(1);
  });
});


