import React, { Component } from 'react';

export default class InprogressBoard extends Component {
  render() {
    const { inProgressList } = this.props;

    return (
      <div className="inprogressboard-container board">
        <h3>InprogressBoard</h3>
        <div>
          {inProgressList.map((inProgress, i) => (
            <div>{inProgress}</div>
          ))}
        </div>
      </div>
    );
  }
}
