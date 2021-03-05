import React from 'react';

export default class extends React.Component {
  static displayName = "05-state-input";

  state = {
    name: '',
    names: []
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const name = this.state.name;
    const names = [...this.state.names, name];
    this.setState({ 
      name: '',
      names: names
    });
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  }
  
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onNameChange}
          />

          <input type="submit" />
        </form>
        {/* render names below */}

        <h3>Names</h3>
        <ul>
          { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
        </ul>
      </div>
    );
  }

};
