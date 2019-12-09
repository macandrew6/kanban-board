// connect to redux store
import {connect} from 'redux';
// import App from "./App.js";
import App from './App.js';

// mapStateToProps
const mapStateToProps = ({state, ownProps}) => {
  return {
    allListItems: state.todos
  };
};

// mapDispatchToProps
const mapDispatchToProps = ({dispatch}) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);