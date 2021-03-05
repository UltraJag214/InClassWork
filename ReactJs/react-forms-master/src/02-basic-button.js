import React from 'react';

export default class extends React.Component {
  static displayName = "02-basic-button";

  clickButton = (evt) => {
    const btn = evt.target;
    console.log(`clicked ${btn.name} ${btn.value}`, evt);
  };

  render() {
    return (
      <div>
        <h1>What do you think of React?</h1>

        <button
          name='button-1'
          value='great'
          onClick={this.clickButton}
        >
          Great
        </button>

        <button
          name='button-2'
          value='amazing'
          onClick={this.clickButton}
        >
          Amazing
        </button>
      </div>
    );
  }

};
