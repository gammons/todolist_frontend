import TestBackend from './TestBackend'
import TodoRepo from '../TodoRepo'

import expect from 'expect';

describe('TestBackend', () => {
  it('load todos', (done) => {
    let backend = new TestBackend();
    backend.load().then((todos) => {
      expect(todos.length).toEqual(6);
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


