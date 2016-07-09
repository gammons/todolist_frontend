import TodoRepo from './TodoRepo'
import TestBackend from '../backends/TestBackend'
import expect from 'expect';

describe('TodoRepo', () => {
  it('nextId', () => {
    let backend = new TestBackend();
    let store = new TodoRepo(backend);
    store.todos = [{id: 1, subject: 'test1'}];
    expect(store._nextId()).toEqual(2);
  });

  describe("getContexts", () => {
    it('getContexts when no contexts', () => {
      let backend = new TestBackend();
      let store = new TodoRepo(backend);
      expect(store._getContexts("chat with nobody")).toEqual([]);
    });

    it("getContexts with contexts", () => {
      let backend = new TestBackend();
      let store = new TodoRepo(backend);
      expect(store._getContexts("chat with @bob and @mary")).toEqual(["bob","mary"]);
    });
  });

  describe("getProjects", () => {
    it('getProjects when no projects', () => {
      let backend = new TestBackend();
      let store = new TodoRepo(backend);
      expect(store._getProjects("chat with nobody")).toEqual([]);
    });

    it("getProjects with projects", () => {
      let backend = new TestBackend();
      let store = new TodoRepo(backend);
      expect(store._getProjects("chat about +project1 and +project2")).toEqual(["project1","project2"]);
    });
  });
  describe("deleteTodo", () => {
    it("deletes a todo", () => {
      let backend = new TestBackend();
      let store = new TodoRepo(backend);
      store.todos = [{id: 1, subject: 'test1'}, {id: 2, subject: 'test2'}];
      store.deleteTodo(1);
      expect(store.todos).toEqual([{id: 2, subject: 'test2'}]);
    });
  });
});


