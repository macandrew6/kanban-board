import React, { Component } from 'react';
import TodoBoard from './components/TodoBoard';
import InprogressBoard from './components/InprogressBoard';
import CompletedBoard from './components/CompletedBoard';
import TodoInput from './components/TodoInput';
import Modal from './components/modal/modal';
// import { saveState } from './localStorage';

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: ['todo', 'inProgress', 'completed'],
      show: false,
      editingTodo: {text: '', id: 0, category: ''},
      editingItemId: 0
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.moveTodoLeft = this.moveTodoLeft.bind(this);
    this.moveTodoRight = this.moveTodoRight.bind(this);
  }

  componentDidMount() {
  }
  
  addTodo(todo) {
    // local storage is being updated one action too late
    const allListItems = JSON.parse(JSON.stringify(this.props.allListItems));
    if (todo.text) {
      this.props.addTodo(todo);
    }
    allListItems.push(todo);
    localStorage.setItem('allListItems', JSON.stringify(allListItems));
  }

  deleteTodo(id) {
    return () => {
      console.log(this);
      const allListItems = JSON.parse(JSON.stringify(this.props.allListItems));
      const updatedListItems = allListItems.filter(item => item.id !== id);
      localStorage.setItem('allListItems', JSON.stringify(updatedListItems));
      this.props.removeTodo(id);
    }
  }

  editTodo(id, updatedText) {
    const allListItems = JSON.parse(JSON.stringify(this.props.allListItems));
    const updatingListItem = allListItems.find(item => item.id === id);
    updatingListItem.text = updatedText;
    
    localStorage.setItem('allListItems', JSON.stringify(allListItems));
  }

  toggleModal(e, id) {
    const editingTodo = this.props.allListItems.find(item =>
      item.id === id);

    this.setState({
      ...this.state,
      editingTodo: editingTodo,
      show: !this.state.show
    })
  }

  moveTodoRight(e, id) {
    const allListItems = JSON.parse(JSON.stringify(this.props.allListItems));
    const target = allListItems.find(item => item.id === id);
    for (let i = 0; i < this.state.categories.length - 1; i++) {
      let category = this.state.categories[i];
      if (target.category === category) {
        target.category = this.state.categories[i + 1];
        break;
      }
    }
    localStorage.setItem('allListItems', JSON.stringify(allListItems));
  }

  moveTodoLeft(e, id) {
    const allListItems = JSON.parse(JSON.stringify(this.props.allListItems));
    const target = allListItems.find(item => item.id === id);
    for (let i = 1; i < this.state.categories.length; i++) {
      let category = this.state.categories[i];
      if (target.category === category) {
        target.category = this.state.categories[i - 1];
        break;
      }
    }

    localStorage.setItem('allListItems', JSON.stringify(allListItems));
  }

  filterTodoListItems() {
    const copyAllLists = JSON.parse(JSON.stringify(this.props.allListItems));
    return copyAllLists.filter(item => item.category === 'todo');
  }

  filterInProgressListItems() {
    const copyAllLists = JSON.parse(JSON.stringify(this.props.allListItems));
    return copyAllLists.filter(item => item.category === 'inProgress');
  }

  filterCompletedListItems() {
    const copyAllLists = JSON.parse(JSON.stringify(this.props.allListItems));
    return copyAllLists.filter(item => item.category === 'completed');
  }

  render() {
    /*
    Notes from Ben:

    have one reusable component, with a bunch of items in it,
    have a board component:
      movetodoRight
      movetodoLeft
      ...
    child component:
      TodoBoard
      InprogressBoard
      CompletedBoard
    
    instead of wrapping the whole app in container,
    wrap the boards in containers to make it better it iterate on later


    
    Must Redo: Pokedex, BenchBnB, Redux Todo
    */

    return (
      <div className="App">
        <h2>Kanban board</h2>
        <div className="kanbanboard-container">
          <TodoBoard
            moveTodoRight={this.moveTodoRight}
            moveTodoLeft={this.moveTodoLeft}
            deleteTodo={this.deleteTodo}
            toggleModal={this.toggleModal}
            todoList={this.filterTodoListItems()}
          />
          <InprogressBoard
            moveTodoRight={this.moveTodoRight}
            moveTodoLeft={this.moveTodoLeft}
            deleteTodo={this.deleteTodo}
            toggleModal={this.toggleModal}
            inProgressList={this.filterInProgressListItems()}
          />
          <CompletedBoard
            moveTodoRight={this.moveTodoRight}
            moveTodoLeft={this.moveTodoLeft}
            deleteTodo={this.deleteTodo}
            toggleModal={this.toggleModal}
            completedList={this.filterCompletedListItems()}
          />
        </div>
        {this.state.show && (
          <Modal
            editingTodo={this.state.editingTodo}
            editTodo={this.editTodo}
            toggleModal={this.toggleModal}
            show={this.state.show}
          ></Modal>
        )}
        <TodoInput addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
