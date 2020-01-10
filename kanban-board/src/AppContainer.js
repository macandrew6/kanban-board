// connect to redux store
import { connect } from 'react-redux';
import App from './App.js';
import { receiveAllTodos, addTodo, removeTodo } from './actions/todos_action';

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    allListItems: Object.values(state.allListItems)
  };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    // receiveAllTodos: (todos) => dispatch(receiveAllTodos(todos)),
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (todos) => dispatch(removeTodo(todos))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);