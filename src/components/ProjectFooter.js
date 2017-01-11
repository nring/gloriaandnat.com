import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/ProjectFooter.css';

class ProjectFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <nav className="nav--footer">
          <IndexLink className="logo" activeClassName="active" to='/'>Home</IndexLink>
          <Link activeClassName="active" to='/details'>Details</Link>
          <Link activeClassName="active" to='/photos'>Photos</Link>
          <Link activeClassName="active" to='/registry'>Registry</Link>
          <Link activeClassName="active" to='/rsvp'>RSVP</Link>
        </nav>
      </footer>
    )
  }
}

export default ProjectFooter;