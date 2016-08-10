import { combineReducers } from 'redux';
import todos from './todos_reducer';
import modal from './modal_reducer';

const rootReducer = combineReducers({
  todos: todos,
  modal: modal
});

export default rootReducer;
