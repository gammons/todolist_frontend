import AppDispatcher from "../dispatchers/AppDispatcher";
import { EventEmitter } from "events";
import TodoRepo from "../TodoRepo";
import TestBackend from "../backends/TestBackend";
import Constants from "../constants/Constants";

const CHANGE_EVENT = "change_event";

let backend = new TestBackend();
let todoRepo = new TodoRepo(backend);
let grouping = Constants.NONE;

const TodoStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  grouped() {
    return todoRepo.grouped(grouping);
  }
});

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case Constants.ADD_TODO:
      todoRepo.addTodo(action.subject, action.due);
      TodoStore.emitChange();
      break;
    case Constants.TOGGLE_COMPLETE_TODO:
      todoRepo.toggleComplete(action.id);
      TodoStore.emitChange();
      break;
    case Constants.CHANGE_GROUPING:
      grouping = action.grouping;
      TodoStore.emitChange();
      break;
    case Constants.TOGGLE_ARCHIVE_TODO:
      todoRepo.toggleArchived(action.id);
      TodoStore.emitChange();
      break;
  }
});

//load the initial repo
backend.load().then((todos) => {
  todoRepo.load(todos);
  TodoStore.emitChange();
});

export default TodoStore;

