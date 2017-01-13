import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexLink, Link } from 'react-router';
import basicModal from 'basicmodal';
import logo from './logo.svg';
import ProjectHeader from './components/ProjectHeader';
import ProjectFooter from './components/ProjectFooter';
import Modal from './components/Modal';
import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isModalOpen: false
    };
  }

  openModal() {
    this.setState({ isModalOpen: true });
    document.body.classList.add('has-modal');
  }

  closeModal() {
    this.setState({ isModalOpen: false });
    document.body.classList.remove('has-modal');
  }

  validatePassword = function(data) {
    var input = document.getElementById('input-password').value;
    input = input.trim().toLowerCase();
    if (input !== '888') {
        this.wrongPassword();
    } else {
      this.setPwdCookie();
      this.closeModal();
    }
  }

  checkPwCookie() {
    // If cookie has never been set, show modal
    if (document.cookie.indexOf("gnPwd") < 0) {
      this.openModal();
    }
  }

  setPwdCookie() {
    // set a new cookie
    var expiry = new Date();
    expiry.setTime(expiry.getTime()+(365*24*60*60*1000)); // 1 year

    // Date()'s toGMTSting() method will format the date correctly for a cookie
    document.cookie = "gnPwd=yes; expires=" + expiry.toGMTString();
  }

  wrongPassword() {
    browserHistory.push('/noPassword')
  }

  componentDidMount() {
    this.checkPwCookie();
  }

  render() {
    return (
      <div className="App">
        <ProjectHeader />
        <Modal isOpen={this.state.isModalOpen}
               transitionName="modal-anim">
          <h2>Please enter password</h2>
          <input type="text" id="input-password" />
          <button onClick={this.validatePassword.bind(this)}>Submit</button>
          <a onClick={this.wrongPassword.bind(this)}>Cancel</a>
        </Modal>
        <div className="content">
          {this.props.children}
        </div>
        <ProjectFooter />
      </div>
    );
  }
}

export default App;
