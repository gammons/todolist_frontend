import moment from 'moment';
import Backend from './Backend';

let todos = [
  {
    id: 1,
    subject: 'Call with @Bob and @Frank about +bigProject',
    projects: ['bigProject'],
    contexts: ['Bob','Frank'],
    due: moment().add(1, 'day').format('YYYY-MM-DD'),
    completed: false,
    archived: false
  },
  {
    id: 2,
    subject: 'Strategy for +mobile @pomodoro',
    projects: ['mobile'],
    contexts: [],
    due: moment().format('YYYY-MM-DD'),
    completed: false,
    archived: false
  },
  {
    id: 3,
    subject: 'Send phone udid to @Marty to test +mobile projects',
    projects: ['mobile'],
    contexts: ['marty'],
    due: moment().format('YYYY-MM-DD'),
    completed: false,
    archived: false
  },
  {
    id: 4,
    subject: 'Did @john call me back about the +testProject?',
    projects: ['testProject'],
    contexts: ['john'],
    due: moment().format('YYYY-MM-DD'),
    due: '2016-04-28',
    completed: true,
    archived: false
  },
  {
    id: 5,
    subject: 'Follow up with @nick about 6-month salary increase',
    projects: [],
    contexts: ['Nick'],
    due: moment().subtract(2, 'day').format('YYYY-MM-DD'),
    completed: true,
    archived: true
  },
  {
    id: 6,
    subject: 'Work on +budget presentation for leadership team, sell to @Nick first',
    projects: [],
    contexts: ['Nick'],
    due: moment().subtract(2, 'day').format('YYYY-MM-DD'),
    completed: false,
    archived: false
  }
];

export default class TestBackend extends Backend {
  constructor() {
    super();
    this.cachedTodos = null;
  }

  fetchTodos() {
    let promise = new Promise((resolve, reject) => {
      if (this.cachedTodos) {
        resolve(this.cachedTodos)
      } else {
        let yes = () => {
          this.cachedTodos = _.cloneDeep(todos)
          resolve(this.cachedTodos)
        }
        setTimeout(yes, 400);
      }
    });
    return promise;
  }

  add(todo) {
    let promise = new Promise((resolve, reject) => {
      //reject("Can't connect with backend")
      todos.push(todo);
      this.cachedTodos = null
      resolve();
    });
    return promise;
  }

  update(todo) {
    return new Promise((resolve, reject) =>  {
      this.cachedTodos = null
      let idx = _.findIndex(todos, (t) => { return t.id === todo.id });
      todos = [...todos.slice(0,idx), todo, ...todos.slice(idx+1)]
      //reject("didn't work")
      resolve()
    });
  }

  save() {
    let promise = new Promise((resolve, reject) => {
      resolve();
    });
    return promise;
  }
}
