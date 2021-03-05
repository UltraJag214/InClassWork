import React from 'react';
import isEmail from 'validator/lib/isEmail';

export default class extends React.Component {
  static displayName = '07-basic-validation';

  state = {
    name: '',
    names: [],
    fieldErrors: {}
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const errors = this.validate({name: this.state.name})
    this.setState({fieldErrors: errors})

    if (Object.keys(errors).length > 0) {
      return;
    }

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

  validate = (form) => {
    const errors = {};
    // validate the form object
    if (!form.name) errors.name = "Name Required";
    return errors;
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
          <span>{this.state.fieldErrors.name}</span>
          <input type="submit" />
        </form>
      </div>
    );
  }

};
