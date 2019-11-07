import React, { Component } from 'react';
import ListItem from './ListItem';

export default class TodoBoard extends Component {
  render() {
    const { 
      todoList, 
      moveTodoRight, 
      moveTodoLeft, 
      deleteTodo,
      show,
      toggleModal } = this.props;
    return (
      <div className="todoboard-container board">
        <h3>TodoBoard</h3>
        <div>
          {todoList.map((todo, i) => (
            <ListItem 
              todo={todo} 
              key={todo.id}
              deleteTodo={deleteTodo}
              moveTodoRight={moveTodoRight}
              moveTodoLeft={moveTodoLeft}
              show={show}
              toggleModal={toggleModal} />
          ))}
        </div>
      </div>
    );
  }
}
