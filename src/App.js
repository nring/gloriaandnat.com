import React, { Component } from 'react';
import logo from './logo.svg';
import ProjectHeader from './components/ProjectHeader';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectHeader />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
