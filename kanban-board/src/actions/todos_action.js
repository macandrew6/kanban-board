export const RECEIVE_ALL_TODOS = 'RECEIVE_ALL_TODOS';
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const receiveAllTodos = todos => ({
  type: RECEIVE_ALL_TODOS,
  todos
});

export const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

// const updateTodo = id => ({
//   type: UPDATE_TODO,
// })