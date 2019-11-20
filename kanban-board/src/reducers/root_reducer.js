import { combineReducers } from 'redux';
import todoReducer from 'todo_reducer.js';

export default combineReducers({
  todos: todosReducer
});