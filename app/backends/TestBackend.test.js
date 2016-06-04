import TestBackend from './TestBackend'
import TodoStore from '../TodoStore'

import expect from 'expect';

describe('TestBackend', () => {
  it('load todos', (done) => {
    let backend = new TestBackend();
    backend.load().then((todos) => {
      expect(todos.length).toEqual(2);
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


