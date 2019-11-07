import React, { Component } from 'react';
import ListItem from './ListItem';

export default class CompletedBoard extends Component {
  render() {
    const { 
      completedList, 
      moveTodoLeft, 
      moveTodoRight, 
      deleteTodo,
      show,
      toggleModal } = this.props;

    return (
      <div className="completedboard-container board">
        <h3>CompletedBoard</h3>
        <div>
          {completedList.map((completed, i) => (
            <ListItem
              todo={completed}
              key={completed.id}
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
