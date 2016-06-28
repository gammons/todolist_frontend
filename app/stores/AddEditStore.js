import AppDispatcher from "../dispatchers/AppDispatcher";
import { EventEmitter } from "events";
import Constants from "../constants/Constants";

const CHANGE_EVENT = "change_event";

const AddEditNotificationStore = Object.assign({}, EventEmitter.prototype, {
  open: false,
  snackbarOpen: false,
  successFn: null,
  id: null,
  subject: null,
  due: null,
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
  doSuccess(subject, due) {
    this.open = false;
    this.successFn(this.id, subject, due);
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
      subject: this.subject,
      due: this.due,
      successFn: this.doSuccess.bind(this),
      cancelFn: this.doCancel.bind(this),
      open: this.open,
      closeSnackbarFn: this.closeSnackbar.bind(this),
      snackbarOpen: this.snackbarOpen,
      snackbarPrompt: this.snackbarPrompt
    };
  },
  openPrompt(id, subject, due, successFn, snackbarPrompt) {
    this.id = id;
    this.subject = subject;
    this.due = due;
    this.successFn = successFn;
    this.open = true;
    this.snackbarPrompt = snackbarPrompt;
    this.emitChange();
  }
});

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case Constants.ADD_EDIT_NOTIFICATION:
      AddEditNotificationStore.openPrompt(action.id, action.subject, action.due, action.successFn, action.snackbarPrompt);
      break;
  }
});

export default AddEditNotificationStore;
