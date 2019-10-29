import React, { Component } from 'react';

export default class CompletedBoard extends Component {
  render() {
    const { completedList } = this.props;

    return (
      <div className="completedboard-container board">
        <h3>CompletedBoard</h3>
        <div>
          {completedList.map((completed, i) => (
            <div>{completed}</div>
          ))}
        </div>
      </div>
    );
  }
}
