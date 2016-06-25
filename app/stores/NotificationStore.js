import AppDispatcher from "../dispatchers/AppDispatcher";
import { EventEmitter } from "events";
import Constants from "../constants/Constants";

const CHANGE_EVENT = "change_event";

const NotificationStore = Object.assign(EventEmitter.prototype, {
  open: false,
  snackbarOpen: false,
  successFn: null,
  id: null,
  notificationPrompt: null,
  snackbarPrompt: null,

  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  doSuccess() {
    this.open = false;
    this.successFn(this.id);
    if (this.snackbarPrompt != null) {
      this.snackbarOpen = true;
    }
    this.emitChange();
  },
  doCancel() {
    this.open = false;
    this.emitChange();
  },
  closeSnackbar() {
    this.snackbarOpen = false;
    this.emitChange();
  },
  getState() {
    return {
      id: this.id,
      notificationPrompt: this.notificationPrompt,
      successFn: this.doSuccess.bind(this),
      cancelFn: this.doCancel.bind(this),
      open: this.open,
      closeSnackbarFn: this.closeSnackbar.bind(this),
      snackbarOpen: this.snackbarOpen,
      snackbarPrompt: this.snackbarPrompt
    };
  },
  openPrompt(id, msg, successFn, snackbarPrompt) {
    this.id = id;
    this.notificationPrompt = msg;
    this.successFn = successFn;
    this.open = true;
    this.snackbarPrompt = snackbarPrompt;
    this.emitChange();
  }
});

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case Constants.NOTIFICATION:
      NotificationStore.openPrompt(action.id, action.notificationPrompt, action.successFn, action.snackbarPrompt);
      break;
  }
});

export default NotificationStore;;
