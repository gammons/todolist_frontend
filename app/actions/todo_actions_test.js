import expect from 'expect';
import { createTodo, toggleComplete } from './todo_actions';
import { UPDATE_TODO, ADD_TODO } from '../constants';

describe('createTodo()', () => {
  it('creates an ADD_TODO type', () => {
    let results = createTodo("test 1", "2016-08-03");
    expect(results.type).toEqual(ADD_TODO);
  })

  it('runs through the todo logic to add projects and contexts', () => {
    let results = createTodo("meet with @nick about +project", "2016-08-03");
    expect(results.todo.completed).toEqual(false)
    expect(results.todo.projects).toEqual(["project"])
    expect(results.todo.contexts).toEqual(["nick"])
  })
})

describe("toggleComplete()", () => {
  it('creates an object with type of TOGGLE_COMPLETE', () => {
    let todo = {id: 1, subject: "meet with @nick", completed: false};
    let results = toggleComplete(todo)
    expect(results.type).toEqual(UPDATE_TODO)
  });

  it('toggles the todo completed', () => {
    let todo = {id: 1, subject: "meet with @nick", completed: false};
    let results = toggleComplete(todo)
    expect(results.todo.completed).toEqual(true)
  });
});

