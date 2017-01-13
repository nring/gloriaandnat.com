import React, { Component } from 'react';
import '../styles/NoPassword.css';

class NoPassword extends Component {
  render() {
    return (
      <div className="noPassword">
        <h1>Sorry, wrong password!</h1>
        <p>You should be able to find it on your Save the Date</p>
      </div>
    )
  }
}

export default NoPassword;