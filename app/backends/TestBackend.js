import Backend from './Backend';

export default class TestBackend extends Backend {
  load() {
    let promise = new Promise((resolve, reject) => {
      resolve(this._fakeTodos());
    });
    return promise;
  }

  save() {
    let promise = new Promise((resolve, reject) => {
      resolve();
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
      due: '2016-04-23',
      completed: false,
      archived: false
    },
    {
      id: 2,
      subject: '+toVerify did @john call me back about the +testProject?',
      projects: ['testProject'],
      contexts: ['john'],
      due: '2016-04-28',
      completed: true,
      archived: false
    }
    ];
    return todos;
  }
}
