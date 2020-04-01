import React, { Component } from 'react';
import UserCardList from './components/userCardList';
import './App.css';

class App extends Component {
  state = {
    userArray: [],
    user: 'fsundstedt'
  }

  handleChange = event => {
    this.setState({
      user: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const previousInput = this.state.user;

    this.setState({
      user: "",
      userArray: [...this.state.userArray, previousInput]
    });
  };

  render() {
    const { userArray, user } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            User Input:
            <input
              type="text"
              value={this.state.user}
              placeholder="user"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Enter</button>
        </form>
        <UserCardList userArray={userArray}/>
      </div>
    )
  }
}

export default App;
