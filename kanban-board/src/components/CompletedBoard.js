import React, { Component } from 'react';
import ListItem from './ListItem';

export default class CompletedBoard extends Component {
  render() {
    const { completedList, moveTodoLeft, moveTodoRight } = this.props;

    return (
      <div className="completedboard-container board">
        <h3>CompletedBoard</h3>
        <div>
          {completedList.map((completed, i) => (
            <ListItem
              todo={completed}
              key={completed.id}
              moveTodoRight={moveTodoRight}
              moveTodoLeft={moveTodoLeft} />
          ))}
        </div>
      </div>
    );
  }
}
