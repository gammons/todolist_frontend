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
  }
}

export default TodoActions;


