import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexLink, Link } from 'react-router';
import basicModal from 'basicmodal';
import logo from './logo.svg';
import ProjectHeader from './components/ProjectHeader';
import './styles/App.css';

class App extends Component {


  validatePassowrd = function(data) {
    if (data.password !== '888') {
        // Invalid password
        //basicModal.error('password')
        return false;
    }

    // Login valid
    //basicModal.close()
    this.setPwdCookie();
    return true
  }

  checkPwCookie() {
    // If cookie has never been set, show modal
    //if (document.cookie.indexOf("gnPwd") < 0) {
      // basicModal.show({
      //     body: `
      //           <p>Please enter site password (we/'ll only make you do this once)!</p>
      //           <input class="basicModal__text" type="text" name="password">
      //           `,
      //     class: basicModal.THEME.small,
      //     closable: false,
      //     buttons: {
      //         cancel: {
      //             class: basicModal.THEME.xclose,
      //             fn: basicModal.close
      //         },
      //         action: {
      //             title: 'Submit',
      //             fn: this.validatePassowrd
      //         }
      //     }
      // })
    //}

    var prompt = window.prompt("Please enter site password (we'll only make you do this once)!")
    if (prompt !== '888') {
      browserHistory.push('/noPassword');
    }
  }

  setPwdCookie() {
    // set a new cookie
    var expiry = new Date();
    expiry.setTime(expiry.getTime()+(365*24*60*60*1000)); // 1 year

    // Date()'s toGMTSting() method will format the date correctly for a cookie
    document.cookie = "gnPwd=yes; expires=" + expiry.toGMTString();
  }

  componentDidMount() {
    this.checkPwCookie();
  }

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
