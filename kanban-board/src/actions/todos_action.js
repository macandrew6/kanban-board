export const RECEIVE_ALL_TODOS = 'RECEIVE_ALL_TODOS';
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

const receiveAllTodos = todos => ({
  type: RECEIVE_ALL_TODOS,
  todos
});

const addTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

const deleteTodo = remainingTodos => ({
  type: REMOVE_TODO,
  remainingTodos
});

// const updateTodo = id => ({
//   type: UPDATE_TODO,
// })