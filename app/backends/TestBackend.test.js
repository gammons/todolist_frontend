import TestBackend from './TestBackend'
import { SHOW_UNARCHIVED, ALL } from '../constants';

import expect from 'expect';

describe('TestBackend', () => {
  it('load todos', (done) => {
    let backend = new TestBackend();
    backend.fetchTodos(SHOW_UNARCHIVED, ALL, ALL).then((todos) => {
      expect(todos.length).toEqual(8);
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


