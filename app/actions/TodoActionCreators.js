import AppDispatcher from "../dispatchers/AppDispatcher";
import Constants from "../constants/Constants";

var TodoActions = {
  create(subject, due) {
    let action = {
      actionType: Constants.ADD_TODO,
      subject: subject,
      due: due
    };
    AppDispatcher.dispatch(action);
  },
  toggleComplete(id) {
    let action = {
      actionType: Constants.TOGGLE_COMPLETE_TODO,
      id: id
    }
    AppDispatcher.dispatch(action);
  },
  promptArchive(id) {
    let action = {
      actionType: Constants.NOTIFICATION,
      notificationPrompt: "Are you sure you wish to archive this todo?",
      snackbarPrompt: "The todo has been archived.",
      successFn: this.toggleArchived,
      id: id
    }
    AppDispatcher.dispatch(action);
  },
  toggleArchived(id) {
    let action = {
      actionType: Constants.TOGGLE_ARCHIVE_TODO,
      id: id
    }
    AppDispatcher.dispatch(action);
  },
  promptDelete(id) {
    let action = {
      actionType: Constants.NOTIFICATION,
      notificationPrompt: "Are you sure you wish to delete this todo?",
      snackbarPrompt: "The todo has been deleted.",
      successFn: this.delete,
      id: id
    }
    AppDispatcher.dispatch(action);
  },
  delete(id) {
    let action = {
      actionType: Constants.DELETE_TODO,
      id: id
    }
    AppDispatcher.dispatch(action);
  },
  update(id, subject, due) {
    let action = {
      actionType: Constants.UPDATE_TODO,
      id: id,
      subject: subject,
      due: due
    }
    AppDispatcher.dispatch(action);
  }
}

export default TodoActions;
