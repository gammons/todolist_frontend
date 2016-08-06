import expect from 'expect';
import TodoActions from './todo_actions';

describe('TodoActions', () => {
  it('creates', () => {
    let results = TodoActions.create("test 1", "2016-08-03");
    expect(results.type).toEqual('ADD_TODO');
  })
})

