import {
  RECEIVE_ALL_TODOS,
  ADD_TODO,
  REMOVE_TODO
} from '../actions/todos_action';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TODOS:
      return Object.assign({}, oldState, action.todos);
    case ADD_TODO:
      console.log(action.todo);
      return Object.assign({}, oldState, {[action.todo.id]: action.todo});
    case REMOVE_TODO:
      console.log(oldState);
      let newState = Object.assign({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
}