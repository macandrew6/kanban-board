import {
  RECEIVE_ALL_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO
} from '../actions/todos_action';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TODOS:
      return Object.assign({}, oldState, action.todos);
    case RECEIVE_TODO:
      return Object.assign({}, oldState, {[action.todo.id]: action.todo});
    default:
      return oldState;
  }
}