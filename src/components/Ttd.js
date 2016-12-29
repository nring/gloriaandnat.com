import React, { Component } from 'react';
import '../styles/Ttd.css';

class Ttd extends Component {
  render() {
    return (
      <li className={this.props.className}>
        {this.props.children}
      </li>
    )
  }
}

export default Ttd;