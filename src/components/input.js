import React, { Component } from 'react';


class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: '',
      xPosition: '',
      yPosition: '',

    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div id="search-bar">
        <input onChange={this.onInputChange} value={this.state.title} />
        <p> State value: {this.state.title} </p>
        <button onClick={() => this.props.addPost(Object.assign({}, this.state))}> add Post </button>

      </div>
    );
  }
}

export default InputBar;
