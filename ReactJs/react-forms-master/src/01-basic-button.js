import React from 'react';

export default class extends React.Component {
  static displayName = "01-basic-button";
  
  onGreatClick = (evt) => {
    console.log("This is Great!", evt);
  }

  onAmazingClick = (evt) => {
    console.log("This is Amazing!", evt);
  }

  render() {
    return (
      <div>
        <h1>What do you think of React?</h1>

        <button
          name='button-1'
          value='great'
          onClick={this.onGreatClick}
        >
          Great
        </button>

        <button
          name='button-2'
          value='amazing'
          onClick={this.onAmazingClick}
        >
          Amazing
        </button>
      </div>
    );
  }
};
