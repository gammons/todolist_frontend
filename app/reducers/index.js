import { combineReducers } from 'redux';
import todos from './todos_reducer';

const rootReducer = combineReducers({
  todos: todos
});

export default rootReducer;
