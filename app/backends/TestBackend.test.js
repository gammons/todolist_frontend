import TestBackend from './TestBackend'
import TodoStore from '../TodoStore'

import expect from 'expect';

describe('TodoStore', () => {
  let store = new TodoStore();

  it('load todos', (done) => {
    let backend = new TestBackend(store);
    backend.load().then((store) => {
      expect(store.todos.length).toEqual(2);
      done();
    });
  });

  it('save todos', (done) => {
    let backend = new TestBackend();
    backend.save().then((store) => {
      done();
    });
  });
});


