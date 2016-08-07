import moment from 'moment';
import Backend from './Backend';
import Grouper from '../logic/grouper';
import DateFilter from '../logic/date_filter';

export default class TestBackend extends Backend {
  constructor() {
    super();
    this.cachedTodos = null;
  }
  fetchTodos(archived, due, grouping) {
    let promise = new Promise((resolve, reject) => {
      if (this.cachedTodos) {
        let dateFilter = new DateFilter(this.cachedTodos);
        let grouper = new Grouper(dateFilter.filterBy(due));
        resolve(grouper.byAll());
      } else {
        let yes = () => {
          this.cachedTodos = this._fakeTodos();
          let dateFilter = new DateFilter(this.cachedTodos);
          let grouper = new Grouper(dateFilter.filterBy(due));
          resolve(grouper.byAll());
        }
        setTimeout(yes, 800);
      }
    });
    return promise;
  }

  addTodo(subject, due) {
    let promise = new Promise((resolve, reject) => {
      resolve({id: 1, subject: subject, due: due});
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
    return todos;
  }
}
