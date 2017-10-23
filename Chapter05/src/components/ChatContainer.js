import React, { Component } from 'react';
import Header from './Header';

export default class ChatContainer extends Component {
  handleLogout = () => {
    firebase.auth().signOut();
  };
  
  render() {
    return (
      <div id="ChatContainer">
        <Header>
          <button className="red" onClick={this.handleLogout}>
            Logout
          </button>
        </Header>
        <h1>Hello from ChatContainer</h1>
      </div>
    );
  }
}