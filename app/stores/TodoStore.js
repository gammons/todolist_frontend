import AppDispatcher from "../dispatchers/AppDispatcher";
import { EventEmitter } from "events";
import TodoRepo from "../TodoRepo";
import Backend from "../backends/LocalBackend";
import Constants from "../constants/Constants";

const CHANGE_EVENT = "change_event";

const TodoStore = Object.assign(EventEmitter.prototype, {
  repo: new TodoRepo(),
  backend: new Backend(),
  backendFailed: false,
  backendMsg: "",
  grouping: Constants.NONE,
  show: Constants.SHOW_UNARCHIVED,
  dueFilter: Constants.ALL,
  searchTerm: null,

  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getTodos() {
    return this.repo.fetch(this.grouping, this.show, this.dueFilter, this.searchTerm);
  },
  failureState() {
    return {backendFailed: this.backendFailed, backendMsg: this.backendMsg};
  },
  addTodo(subject, due) {
    let newRepo = _.cloneDeep(this.repo);
    newRepo.addTodo(subject, due);
    this._save(newRepo);
  },
  updateTodo(id, subject, due) {
    let newRepo = _.cloneDeep(this.repo);
    newRepo.updateTodo(id, subject, due);
    this._save(newRepo);
  },
  deleteTodo(id) {
    let newRepo = _.cloneDeep(this.repo);
    newRepo.deleteTodo(id);
    this._save(newRepo);
  },
  toggleComplete(id) {
    let newRepo = _.cloneDeep(this.repo);
    newRepo.toggleComplete(id);
    this._save(newRepo);
  },
  toggleArchived(id) {
    let newRepo = _.cloneDeep(this.repo);
    newRepo.toggleArchived(id);
    this._save(newRepo);
  },
  load() {
    this.backend.load().then((todos) => {
      this.backendFailed = false;
      this.repo.load(todos);
      this.emitChange();
    }).catch((reason) => {
      this.backendFailed = true;
      this.backendMsg = "Could not communicate with the backend.";
      this.emitChange();
    });
  },
  _save(repo) {
    this.backend.save(repo.todos).then(() => {
      this.repo = repo;
      this.emitChange();
    }).catch((error) => {
      this.backendFailed = true;
      this.backendMsg = "Could not communicate with the backend.";
      this.emitChange();
    });
  }
});

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case Constants.ADD_TODO:
      TodoStore.addTodo(action.subject, action.due);
      break;
    case Constants.UPDATE_TODO:
      TodoStore.updateTodo(action.id, action.subject, action.due);
      break;
    case Constants.DELETE_TODO:
      TodoStore.deleteTodo(action.id);
      break;
    case Constants.TOGGLE_COMPLETE_TODO:
      TodoStore.toggleComplete(action.id);
      TodoStore.emitChange();
      break;
    case Constants.CHANGE_GROUPING:
      TodoStore.grouping = action.grouping;
      TodoStore.emitChange();
      break;
    case Constants.CHANGE_SHOW:
      TodoStore.show = action.show;
      TodoStore.emitChange();
      break;
    case Constants.CHANGE_DUE_FILTER:
      TodoStore.dueFilter = action.filter;
      TodoStore.emitChange();
      break;
    case Constants.TOGGLE_ARCHIVE_TODO:
      TodoStore.toggleArchived(action.id);
      TodoStore.emitChange();
      break;
    case Constants.SEARCH:
      searchTerm = action.term;
      TodoStore.emitChange();
      break;
  }
});

TodoStore.load();

export default TodoStore;
