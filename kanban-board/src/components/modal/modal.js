import React from 'react';

export default class Modal extends React.Component {
  onClose(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }
  
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div>
          <button>close</button>
        </div>
        Hello Modal!
      </div>
    );
  }
}