import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import '../styles/Modal.css';

class Modal extends Component {

  render() {
    if(this.props.isOpen){
      return (
        <ReactCSSTransitionGroup 
          transitionName={this.props.transitionName}
          transitionAppear={false}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <div className="modal">
            {this.props.children}
          </div>
          <div className="modal__overlay" />
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionEnterTimeout={500} transitionLeaveTimeout={500} />;
    }
  }
}

export default Modal;