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
  changeGrouping(grouping) {
    let action = {
      actionType: Constants.CHANGE_GROUPING,
      grouping: grouping
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
  delete(id) {
    console.log("delete with id ", id);
    let action = {
      actionType: Constants.DELETE_TODO,
      id: id
    }
    AppDispatcher.dispatch(action);
  }
}

export default TodoActions;


