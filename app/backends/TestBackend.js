import Backend from './Backend';

export default class TestBackend extends Backend {
  constructor(todoStore) {
    super(todoStore);
  }
  load() {
    let promise = new Promise((resolve, reject) => {
      this.todoStore.load(this._fakeTodos());
      resolve(this.todoStore);
    });
    return promise;
  }

  save() {
    let promise = new Promise((resolve, reject) => {
      resolve(this.todoStore);
    });
    return promise;
  }

  _fakeTodos() {
    let todos = [
    {
      id: 1,
      subject: 'call with @bob and @frank about +bigProject',
      projects: ['bigProject'],
      contexts: ['bob','frank'],
      Due: '2016-04-23',
      Completed: false,
      Archived: false
    },
    {
      id: 2,
      subject: '+toVerify did @john call me back about the +testProject?',
      projects: ['testProject'],
      contexts: ['john'],
      Due: '2016-04-28',
      Completed: true,
      Archived: false
    }
    ];
    return todos;
  }
}
