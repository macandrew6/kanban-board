// connect to redux store
import { connect } from 'react-redux';
// import App from "./App.js";
import App from './App.js';
import { receiveAllTodos, addTodo } from './actions/todos_action';

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    allListItems: Object.values(state.allListItems)
  };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    receiveAllTodos: (todos) => dispatch(receiveAllTodos(todos)),
    addTodo: (todo) => dispatch(addTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);