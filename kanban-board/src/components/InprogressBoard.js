import React, { Component } from 'react';
import ListItem from './ListItem';

export default class InprogressBoard extends Component {
  render() {
    const { 
      inProgressList, 
      moveTodoLeft, 
      moveTodoRight, 
      deleteTodo,
      show,
      toggleModal } = this.props;

    return (
      <div className="inprogressboard-container board">
        <h3>InprogressBoard</h3>
        <div>
          {inProgressList.map((inProgress, i) => (
            <ListItem
              todo={inProgress}
              key={inProgress.id}
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
