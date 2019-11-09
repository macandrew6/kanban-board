import React, { Component } from 'react';
import TodoBoard from './components/TodoBoard';
import InprogressBoard from './components/InprogressBoard';
import CompletedBoard from './components/CompletedBoard';
import TodoInput from './components/TodoInput';
import Modal from './components/modal/modal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: ['todo', 'inProgress', 'completed'],
      allListItems: [], 
      show: false,
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
    let savedallListItems = localStorage.getItem('allListItems');

    if (savedallListItems) { 
      let parsedAllListItems = JSON.parse(savedallListItems);
      this.setState({
        allListItems: parsedAllListItems
      });
    } else {
      console.log('no todos');
    }
  }
  
  addTodo(todo) {
    const allListItems = JSON.parse(JSON.stringify(this.state.allListItems));
    allListItems.push(todo);

    this.setState({
      allListItems: allListItems 
    }, () => {
      localStorage.setItem('allListItems', JSON.stringify(allListItems));
    });
  }

  deleteTodo(e, id) {
    const allListItems = JSON.parse(JSON.stringify(this.state.allListItems));
    const updatedListItems = allListItems.filter(item => item.id !== id);

    this.setState({
      allListItems: updatedListItems
    }, () => {
      localStorage.setItem('allListItems', JSON.stringify(updatedListItems));
    });
  }

  editTodo(id, updatedText) {
    // need id
    // need todo 
    // need alltodos
    console.log(updatedText);
    const allListItems = JSON.parse(JSON.stringify(this.state.allListItems));
    const updatingListItem = allListItems.find(item => item.id === id);
    updatingListItem.text = updatedText;

    this.setState({
      allListItems: allListItems
    })
  }

  toggleModal(e, id) {
    this.setState({
      ...this.state,
      editingItemId: id,
      show: !this.state.show
    })
  }

  moveTodoRight(e, id) {
    const allListItems = JSON.parse(JSON.stringify(this.state.allListItems));
    const target = allListItems.find(item => item.id === id);
    for (let i = 0; i < this.state.categories.length - 1; i++) {
      let category = this.state.categories[i];
      if (target.category === category) {
        target.category = this.state.categories[i + 1];
        break;
      }
    }
    
    this.setState({
      allListItems
    }, () => {
      localStorage.setItem('allListItems', JSON.stringify(allListItems));
    });
  }

  moveTodoLeft(e, id) {
    const allListItems = JSON.parse(JSON.stringify(this.state.allListItems));
    const target = allListItems.find(item => item.id === id);
    for (let i = 1; i < this.state.categories.length; i++) {
      let category = this.state.categories[i];
      if (target.category === category) {
        target.category = this.state.categories[i - 1];
        break;
      }
    }

    this.setState({
      allListItems
    }, () => {
      localStorage.setItem('allListItems', JSON.stringify(allListItems));
    });
  }

  filterTodoListItems() {
    const copyAllLists = JSON.parse(JSON.stringify(this.state.allListItems));
    return copyAllLists.filter(item => item.category === 'todo');
  }

  filterInProgressListItems() {
    const copyAllLists = JSON.parse(JSON.stringify(this.state.allListItems));
    return copyAllLists.filter(item => item.category === 'inProgress');
  }

  filterCompletedListItems() {
    const copyAllLists = JSON.parse(JSON.stringify(this.state.allListItems));
    return copyAllLists.filter(item => item.category === 'completed');
  }

  render() {
    const editingTodo = this.state.allListItems.find(item => 
      item.id === this.state.editingItemId);
      console.log(editingTodo)
    return (
      <div className="App">
        <h2>Kanban board</h2>
        <div className="kanbanboard-container">
          <TodoBoard 
            moveTodoRight={this.moveTodoRight} 
            moveTodoLeft={this.moveTodoLeft}
            deleteTodo={this.deleteTodo}
            toggleModal={this.toggleModal}
            todoList={this.filterTodoListItems()}/>
          <InprogressBoard 
            moveTodoRight={this.moveTodoRight}
            moveTodoLeft={this.moveTodoLeft}
            deleteTodo={this.deleteTodo}
            toggleModal={this.toggleModal}
            inProgressList={this.filterInProgressListItems()}/>
          <CompletedBoard 
            moveTodoRight={this.moveTodoRight}
            moveTodoLeft={this.moveTodoLeft}
            deleteTodo={this.deleteTodo}
            toggleModal={this.toggleModal}
            completedList={this.filterCompletedListItems()}/>
        </div>
        <Modal 
          editingTodo={editingTodo ? editingTodo : ''}
          editTodo={this.editTodo}
          toggleModal={this.toggleModal}
          show={this.state.show}>
        </Modal>
        <TodoInput addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
