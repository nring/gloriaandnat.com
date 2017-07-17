import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import logo from '../img/logo.svg';
import '../styles/ProjectHeader.css';

class ProjectHeader extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <IndexLink className="logo" activeClassName="active" to='/'><img src={logo} alt="Nat & Gloria Home" /></IndexLink>
          <Link activeClassName="active" to='/details'>Details</Link>
          <Link activeClassName="active" to='/photos'>Photos</Link>
          <Link activeClassName="active" to='/faq'>FAQ</Link>
          <Link activeClassName="active" to='/registry'>Registry</Link>
          <Link activeClassName="active" to='/rsvp'>RSVP</Link>
        </nav>
      </header>
    )
  }
}

export default ProjectHeader;