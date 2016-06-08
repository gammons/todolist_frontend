import AppDispatcher from "../dispatchers/AppDispatcher";
import Constants from "../constants/Constants";

var TodoActions = {
  createTodo(subject, due) {
    let action = {
      actionType: Constants.ADD_TODO,
      subject: subject,
      due: due
    };

    AppDispatcher.dispatch(action);
  }
}

export default TodoActions;


