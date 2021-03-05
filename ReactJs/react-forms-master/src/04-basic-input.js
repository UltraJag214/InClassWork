import React from 'react';

export default class extends React.Component {
  static displayName = "04-basic-input";

  // 0. declare the state
  state = {
    names: []
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(this.refs.name.value);
    // 1. add the name to an array in the state
    const name = this.refs.name.value;
    // this.state.names.push(name); <-- don't do this
    const names = [...this.state.names, name];
    this.setState({ names: names});
    // this.setState({ names: this.state.names.concat(name)});
    // 2. clear the input text box
    this.refs.name.value = '';
  }
  
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Name"
            ref="name"
          />

          <input type="submit"/>
        </form>
      </div>
    );
  }

};
