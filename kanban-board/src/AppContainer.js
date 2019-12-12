// connect to redux store
import { connect } from 'react-redux';
// import App from "./App.js";
import App from './App.js';
import { receiveAllTodos } from './actions/todos_action';

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    allListItems: state.todos
  };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);